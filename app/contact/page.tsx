"use client";
import React, { useState } from "react";
import { submitDevis } from "../actions/submitDevisActions";
import CustomCursor from "../ui/CustomCursor";
import TextAnimated from "../ui/TextAnimated";

// Définir un type pour les clés de formErrors
type FormErrorKey = "name" | "email" | "service" | "message" | "global";

export default function DevisPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "création site vitrine",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
    global: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Effacer l'erreur lorsque l'utilisateur modifie le champ
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setFormErrors({
      name: "",
      email: "",
      service: "",
      message: "",
      global: "",
    });

    // Création d'un objet FormData
    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("service", formData.service);
    form.append("message", formData.message);

    console.log("form-------->", form);

    try {
      const result = await submitDevis(form);

      if (result.success) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          service: "création site vitrine",
          message: "",
        });
      } else if (result.error) {
        // Traiter les erreurs de validation Zod
        try {
          const parsedErrors = JSON.parse(result.error);

          // Mettre à jour les erreurs de formulaire avec les erreurs Zod
          const newErrors = {
            name: "",
            email: "",
            service: "",
            message: "",
            global: "",
          };

          if (parsedErrors._errors) {
            newErrors.global = parsedErrors._errors.join(", ");
          }

          // Extraire les erreurs par champ
          const fields: FormErrorKey[] = [
            "name",
            "email",
            "service",
            "message",
          ];
          for (const field of fields) {
            if (parsedErrors[field]?._errors) {
              newErrors[field as keyof typeof newErrors] =
                parsedErrors[field]._errors.join(", ");
            }
          }

          setFormErrors(newErrors);
        } catch (parseError) {
          console.log("parseError ====>", parseError);

          // Si le parsing échoue, utiliser l'erreur comme message global
          setFormErrors((prev) => ({
            ...prev,
            global:
              result.error ||
              "Une erreur s'est produite lors de la validation du formulaire.",
          }));
        }
      }
    } catch (err) {
      console.error(
        "Une erreur s'est produite lors de l'envoi du formulaire :",
        err
      );
      setFormErrors((prev) => ({
        ...prev,
        global:
          "Une erreur s'est produite lors de l'envoi du formulaire. Veuillez réessayer.",
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact w-full flex flex-col text-white font-raleway pt-40">
      <TextAnimated title="contact" />
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-center text-white mb-10 font-jaapokki">
            Demande de devis
          </h1>

          <div className="bg-white rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2">
            {/* Informations de contact */}
            <div className="bg-darkGreen text-white p-8 lg:p-12">
              <div className="max-w-lg mx-auto">
                <h2 className="text-2xl font-bold mb-6">Contactez-nous</h2>

                <div className="space-y-8">
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mt-1 mr-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <h3 className="font-semibold mb-1">Camp de base</h3>
                      <p className="text-indigo-100">
                        {" "}
                        La Possession - île de la Réunion
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mt-1 mr-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div>
                      <h3 className="font-semibold mb-1">Téléphone</h3>
                      <a
                        data-link="link"
                        href="tel:+262693514439"
                        className="buttonAction"
                      >
                        <span className="font-raleway">06.93.51.44.39</span>
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mt-1 mr-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        data-link="link"
                        href="mailto:contact.webcreatis@gmail.com"
                        className="buttonAction"
                      >
                        <span className="font-raleway">
                          contact.webcreatis@gmail.com
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mt-1 mr-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <h3 className="font-semibold mb-1">Horaires</h3>
                      <p className="text-indigo-100">Lun-Ven: 9h00 - 18h00</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="font-semibold mb-4">Suivez-nous</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-indigo-100 hover:text-white">
                      <span className="sr-only">Facebook</span>
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>

                    <a href="#" className="text-indigo-100 hover:text-white">
                      <span className="sr-only">Instagram</span>
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulaire */}
            <div className="p-8 lg:p-12">
              {submitted ? (
                <div className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-green-500 mx-auto mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">
                    Merci pour votre demande !
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Nous avons bien reçu votre demande de devis. Notre équipe
                    vous contactera dans les plus brefs délais.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Faire une nouvelle demande
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`text-black mt-1 block w-full border ${
                        formErrors.name ? "border-red-500" : "border-gray-300"
                      } rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                      placeholder="Votre nom"
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-sm text-red">{formErrors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`text-black mt-1 block w-full border ${
                        formErrors.email ? "border-red-500" : "border-gray-300"
                      } rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                      placeholder="votre.email@example.com"
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-sm text-red">
                        {formErrors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Service souhaité
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`text-black mt-1 block w-full border ${
                        formErrors.service
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                    >
                      <option value="création site vitrine">
                        Création site vitrine
                      </option>
                      <option value="landing page">Landing page</option>
                      <option value="site e-commerce">Site e-commerce</option>
                      <option value="refonte de site">Refonte de site</option>
                      <option value="gestion reseaux sociaux">
                        Gestion réseaux sociaux
                      </option>
                      <option value="canva">Accompagnement Canva</option>
                      <option value="logo">Création de Logo</option>
                      <option value="carte de visite">Carte de visite</option>
                      <option value="print">
                        Print (Kakemono - Plaquette Commerciale ect...)
                      </option>
                    </select>
                    {formErrors.service && (
                      <p className="mt-1 text-sm text-red">
                        {formErrors.service}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Votre projet
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className={`text-black mt-1 block w-full border ${
                        formErrors.message
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                      placeholder="Décrivez votre projet et vos besoins..."
                    />
                    {formErrors.message && (
                      <p className="mt-1 text-sm text-red">
                        {formErrors.message}
                      </p>
                    )}
                  </div>

                  {formErrors.global && (
                    <div className="rounded-md bg-red-50 p-4">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg
                            className="h-5 w-5 text-red-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-red">
                            {formErrors.global}
                          </h3>
                        </div>
                      </div>
                    </div>
                  )}

                  <div>
                    <button
                      data-link="link"
                      type="submit"
                      disabled={isSubmitting}
                      className="buttonAction w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-corail hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Envoi en cours...
                        </>
                      ) : (
                        "Demander un devis"
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <CustomCursor />
    </section>
  );
}
