import Image from "next/image";
import Link from "next/link";
import questionnairePics from "../assets/images/Questionnaire-webcreatis.webp";

type CallToActionProps = {
  ctaTitle: string;
  ctaDescription: string;
  ctaDescriptionQrCode: string;
  ctaLink: string;
  ctaTitleLink: string;
  ctaQrText: string;
};

export default function CallToActionWithQrCode({
  ctaTitle,
  ctaDescription,
  ctaDescriptionQrCode,
  ctaLink,
  ctaTitleLink,
  ctaQrText,
}: CallToActionProps) {
  return (
    <div>
      <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 sm:px-8 lg:px-10">
        <div className="relative flex flex-col lg:flex-row items-center isolate overflow-hidden creasite px-6 pt-12 shadow-2xl sm:rounded-3xl sm:px-12 md:pt-20 lg:gap-x-10 lg:px-10 lg:pt-0">
          {/* Bloc Texte */}
          <div className="w-full lg:w-[60%] text-center lg:text-left lg:flex-auto lg:py-20">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl laptop:text-4xl">
              {ctaTitle}
            </h2>
            <pre className="mt-6 text-lg text-gray-300 whitespace-pre-line xs:text-base md:text-lg">
              {ctaDescription}
            </pre>
            <p className="mt-6 text-lg text-gray-300">{ctaDescriptionQrCode}</p>
            {/* Bouton CTA */}
            <div className="mt-8 flex justify-center lg:justify-start">
              <Link
                href={ctaLink}
                aria-label="bouton action"
                data-link="link"
                className="buttonAction rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-md hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {ctaTitleLink}
              </Link>
            </div>
          </div>

          {/* Bloc QR Code */}
          <div className="relative w-full lg:w-[40%] flex flex-col items-center justify-center mt-10 lg:mt-0 xs:pb-10 lg:pb-0">
            <p className="font-raleway text-2xl text-white pb-6">{ctaQrText}</p>
            <Image
              alt="QR Code"
              src={questionnairePics.src}
              width={300}
              height={300}
              className="w-auto max-w-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
