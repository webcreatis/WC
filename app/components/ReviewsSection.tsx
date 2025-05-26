"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ChevronLeft, ChevronRight, Pen, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { reviews } from "../datas/reviewsdatas";
import TitleSection from "./TitleSection";

export default function ReviewsSection() {
  const iconTestimonial = <Pen size={36} color="#7BE0AD" />;

  // Refs pour flèches custom
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section
      id="testimonials"
      className="about relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8"
    >
      <TitleSection
        icon={iconTestimonial}
        title="Testimonials"
        color="text-black"
        textSize="text-4xl"
      />
      <h3 className="text-black font-raleway text-center pb-10 text-xl md:text-2xl">
        Ils parlent de nous
      </h3>

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

      {/* Flèches custom en dehors du slider */}
      <div className="flex justify-end items-center max-w-4xl mx-auto mb-4">
        <button
          ref={prevRef}
          className="swiper-button-prev-custom text-green hover:scale-110 transition"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          ref={nextRef}
          className="swiper-button-next-custom text-green hover:scale-110 transition"
        >
          <ChevronRight size={40} />
        </button>
      </div>

      <div className="mx-auto max-w-4xl text-white">
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          loop
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            if (
              swiper.params.navigation &&
              typeof swiper.params.navigation !== "boolean"
            ) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          className="mt-6"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <figure className="relative text-center bg-white rounded-2xl p-10 shadow-lg border-2 border-green md:p-28">
                <Quote
                  color="#7be0ad"
                  className="absolute top-2 right-2 w-8 h-8 sm:w-[50px] sm:h-[50px] md:left-5 md:top-5"
                />
                <blockquote className="text-xl sm:text-2xl font-semibold leading-relaxed">
                  <p className="font-normal text-black font-raleway text-left md:text-center">
                    {review.quote}
                  </p>
                </blockquote>
                <figcaption className="mt-8">
                  <Link
                    href={review.link}
                    className="buttonAction"
                    data-link="link"
                  >
                    <Image
                      alt={review.name}
                      src={review.avatar}
                      className="mx-auto size-20 rounded-full border-4 border-green"
                      width={58}
                      height={58}
                    />
                  </Link>
                  <div className="mt-4 flex flex-col items-center justify-center space-x-3 text-base md:flex-row">
                    <span className="font-light text-black font-jaapokki">
                      {review.name}
                    </span>
                    <svg
                      width={4}
                      height={4}
                      viewBox="0 0 8 8"
                      className="fill-green"
                      aria-hidden="true"
                    >
                      <circle cx={4} cy={4} r={4} />
                    </svg>
                    <span className="font-light text-black font-jaapokki">
                      {review.title}
                    </span>
                    <svg
                      width={4}
                      height={4}
                      viewBox="0 0 8 8"
                      className="fill-green"
                      aria-hidden="true"
                    >
                      <circle cx={4} cy={4} r={4} />
                    </svg>
                    <span className="font-light text-black font-jaapokki">
                      {review.date}
                    </span>
                  </div>
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
