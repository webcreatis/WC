import React, { useState } from "react";
import { submitDevis } from "../actions/submitDevisActions";

// Définir un type pour les clés de formErrors
type FormErrorKey = "name" | "email" | "service" | "message" | "global";

export default function ContactForm() {
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
            Nous avons bien reçu votre demande de devis. Notre équipe vous
            contactera dans les plus brefs délais.
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
              <p className="mt-1 text-sm text-red">{formErrors.email}</p>
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
                formErrors.service ? "border-red-500" : "border-gray-300"
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
              <p className="mt-1 text-sm text-red">{formErrors.service}</p>
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
                formErrors.message ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              placeholder="Décrivez votre projet et vos besoins..."
            />
            {formErrors.message && (
              <p className="mt-1 text-sm text-red">{formErrors.message}</p>
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
  );
}
