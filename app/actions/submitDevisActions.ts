"use server";

import TemplateEmail from "@/emails/TemplateEmail";
import { resend } from "@/lib/resend";
import { z } from "zod";

// ✅ Schema de validation
const formDevisSchema = z.object({
  name: z.string().min(3, "Le nom est requis").max(50),
  email: z.string().nonempty("Le mail est requis").email("Email invalide"),
  service: z.string().min(2).max(100),
  message: z.string().min(5, "Le message est trop court").max(1000),
});

export async function submitDevis(
  formData: FormData
): Promise<{ success: boolean; error?: string }> {
  const rawData = {
    name: formData.get("name")?.toString() || "",
    email: formData.get("email")?.toString() || "",
    service: formData.get("service")?.toString() || "",
    message: formData.get("message")?.toString() || "",
  };

  const validationForm = formDevisSchema.safeParse(rawData);
  
  if (!validationForm.success) {
    const errorMessage = JSON.stringify(validationForm.error.format());
    return { success: false, error: errorMessage };
  }

  const { name, email, service, message } = validationForm.data;

  try {
    await resend.emails.send({
      from: "contact.webcreatis@gmail.com",
      to: email,
      subject: `Nouvelle demande de devis: ${service}`,
      react: TemplateEmail({
        magicLink: "https://webcreatis.re",
        email,
        name,
        message,
        service,
      }),
    });

    return { success: true };
  } catch (error: unknown) {
    console.error("Erreur lors de l'envoi d'email :", error);
    return { success: false, error: "Erreur lors de l'envoi de l'email." };
  }
}
