import ContactCard from "../ui/ContactCard";
import CustomCursor from "../ui/CustomCursor";
import TextAnimated from "../ui/TextAnimated";

export default function ContactPage() {
  return (
    <section className="contact w-full flex flex-col text-white font-raleway pt-40">
      <TextAnimated title="contact us" />
      <div className="h-auto py-12 px-4 sm:px-6 lg:px-8 pb-40">
        <h1 className="w-full flex justify-center xs:text-xl xs:pb-10 xs:pl-3 mobile:text-center md:text-3xl md:leading-10 lg:p-20 lg:text-5xl lg:leading-relaxed xl:text-7xl xl:pb-28">
          Vous avez un projet digital ou une idée de collaboration ? Parlons-en.
        </h1>
        <div className="w-full flex flex-col items-center gap-5">
          <ContactCard
            title="Camp de base, la Réunion"
            link="https://www.google.com/maps/place//data=!4m2!3m1!1s0x218287c7a88b4291:0x1e0c6bfe54c406e6?sa=X&ved=1t:8290&ictx=111"
            textLink="view on maps"
          />
          <ContactCard
            title="mail"
            link="mailto:contact.webcreatis@gmail.com"
            textLink="contact.webcreatis@gmail.com"
          />
          <ContactCard
            title="tél Patrick - site internet"
            link="tel:+262693514439"
            textLink="06 93 51 44 39"
          />
          <ContactCard
            title="tél Patricia - com digitale"
            link="tel:+262693844876"
            textLink="06 93 84 48 76"
          />
          <ContactCard
            title="social network"
            link="https://www.instagram.com/webcreatis/"
            textLink="instagram"
          />
          <ContactCard
            title="planifier une visio"
            link="https://www.instagram.com/webcreatis/"
            textLink="calendly"
          />
        </div>
      </div>
      <CustomCursor />
    </section>
  );
}
