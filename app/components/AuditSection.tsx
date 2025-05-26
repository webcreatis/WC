"use client";

import { Share2 } from "lucide-react";
import Button from "../ui/Button";
import TitleSection from "./TitleSection";

export default function AuditSection() {
  // state
  const iconFormation = <Share2 size={36} color="#7BE0AD" />;

  return (
    <section id="formations" className="formations pb-32">
      <div className="flex flex-col justify-center items-center pt-5 pb-20">
        <TitleSection icon={iconFormation} title="Audits" textSize="text-4xl" />
      </div>
      <div className="w-full h-auto bg-darkWhite rounded-2xl flex flex-col md:w-3/4 md:m-auto laptop:flex-row">
        <div className="w-full h-full flex justify-center items-center rounded-l-lg p-5 md:w-[60%] md:m-auto laptop:w-[60%] xl:w-[40%]">
          <video
            src="/videos/Visuel-Audit-Webcreatis.re.mp4"
            className="rounded-lg object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
        <div className=" flex flex-col items-start justify-center w-full p-5">
          <h3 className="font-jaapokki text-darkGreen text-2xl pb-5 md:text-4xl xl:text-6xl">
            Analyse globale de ta présence digitale
          </h3>
          <p className="font-raleway pt-5 pb-10 text-base xl:text-2xl">
            Ton site est peut-être en ligne, mais est-il vraiment performant,
            visible, sécurisé et aligné avec ton image de marque ? <br />
            Et tes supports de communication, est-ce qu’ils reflètent vraiment
            ce que tu veux transmettre ?<br /> Quand on a la tête dans le
            quotidien, c’est difficile de prendre du recul. C’est là que nous
            intervenons. Nous analysons l’ensemble de ta présence digitale et
            visuelle — site web, supports de communication, identité visuelle —
            pour te livrer une vue d’ensemble claire, honnête et surtout, utile.{" "}
            <br />
            <br />
            Notre proposition : <br />
            <br />
            * Audit de performance <br />
            * Audit SEO (référencement naturel) <br />
            * Audit ergonomie & expérience utilisateur (UX)
            <br />
            * Audit technique & sécurité
            <br />* Audit des supports de communication (cohérence, impact,
            clarté)
            <br />* Audit d’identité visuelle (logo, couleurs, typographies,
            usages)
            <br />* Rapport de synthèse clair, avec des recommandations
            concrètes
          </p>
          <Button
            text="Devis gratuit"
            bg="bg-green"
            color="text-black"
            onClick={() =>
              (window.location.href = "mailto:contact.webcreatis@gmail.com")
            }
          />
        </div>
      </div>
    </section>
  );
}
