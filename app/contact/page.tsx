"use client";
import { Clock9, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import ContactForm from "../ui/ContactForm";
import CustomCursor from "../ui/CustomCursor";
import TextAnimated from "../ui/TextAnimated";

export default function ContactPage() {
  return (
    <section className="contact w-full flex flex-col text-white font-raleway pt-40">
      <TextAnimated title="contact" />
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-center text-white mb-10 font-jaapokki">
            Demande de devis
          </h1>

          <div className="bg-white rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2">
            <div className="bg-darkGreen text-white p-8 lg:p-12">
              <div className="max-w-lg mx-auto">
                <h2 className="text-2xl font-bold mb-6">Contactez-nous</h2>

                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <MapPin color="#ffffff" />
                    <div>
                      <h3 className="font-semibold mb-1">Camp de base</h3>
                      <p className="text-indigo-100">
                        {" "}
                        La Possession - île de la Réunion
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <Phone color="#ffffff" />
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

                  <div className="flex items-start gap-5">
                    <Mail color="#ffffff" />
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

                  <div className="flex items-start gap-5">
                    <Clock9 color="#ffffff" />
                    <div>
                      <h3 className="font-semibold mb-1">Horaires</h3>
                      <p className="text-indigo-100">Lun-Ven: 9h00 - 18h00</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="font-semibold mb-4">Suivez-nous</h3>
                  <div className="flex space-x-4">
                    <Link
                      href="https://www.instagram.com/webcreatis/"
                      className="text-indigo-100 hover:text-white buttonAction"
                      data-link="link"
                    >
                      <span className="sr-only">Instagram</span>
                      <Instagram color="#ffffff" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
      <CustomCursor />
    </section>
  );
}
