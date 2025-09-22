// Updated TestimonialsCarousel with 3-line text clamp and full modal display
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { useTranslations } from "../i18n";
import GoogleRating from "./ui/googleRatings";

interface Testimonial {
  nameKey: string;
  quoteKey: string;
  image: string;
  rating: number;
  dateKey: string;
  roleKey?: string;
  companyKey?: string;
  sectorKey?: string;
  resultKey?: string;
  google?: boolean;
  link?: string;
}

const testimonials: Testimonial[] = [
  {
    nameKey: "google.michal.name",
    quoteKey: "google.michal.quote",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjVS5pyiS9_3e7sULrVYX_1lxPriE0LspxWZMCtvg3b9ZoIW1D7H=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    dateKey: "google.michal.date",
    link: "https://maps.app.goo.gl/dMPkcWyNTZCkX5Mv6",
    google: true,
  },

  {
    nameKey: "google.lucas.name",
    quoteKey: "google.lucas.quote",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjXjgMdmZQigdYIIc4s61eOLL0JhQ8Ra9OkCZ0u5TDWGMzMqsk2l=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    dateKey: "google.lucas.date",
    link: "https://maps.app.goo.gl/QEGeBrYyCJHK6Fhk9",
    google: true,
  },

  {
    nameKey: "google.robert.name",
    quoteKey: "google.robert.quote",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjXAaT0oltSu6t0NBpGSbs6iwzfuC3Xt_2lCRuTEBoyrrBXZkGgf=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateKey: "google.robert.date",
    link: "https://maps.app.goo.gl/xtHdunsTCQDC9oN58",
    google: true,
  },

  {
    nameKey: "google.gauthier.name",
    quoteKey: "google.gauthier.quote",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjUDF573SdGX3zh50wMnANkKf1_ru0jfsGaPM7ThpNoxjYjUTv3L=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateKey: "google.gauthier.date",
    link: "https://maps.app.goo.gl/xtHdunsTCQDC9oN58",
    google: true,
  },
];

const renderStars = (rating: number) => (
  <div className="flex mb-2">
    {[...Array(5)].map((_, i) => (
      <span
        key={i}
        className={`text-[20px] ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
      >
        ★
      </span>
    ))}
  </div>
);

const TestimonialsCarousel: React.FC<{ lang: string }> = ({ lang }) => {
  const t = useTranslations(lang);
  const [selectedTestimonial, setSelectedTestimonial] =
    useState<Testimonial | null>(null);

  const openTestimonial = (tst: Testimonial, e: React.MouseEvent) => {
    if (!tst.google) {
      e.preventDefault();
      setSelectedTestimonial(tst);
    }
  };

  const closeModal = () => setSelectedTestimonial(null);

  return (
    <section className="pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            {t("testimonials.title")}
          </h3>
        </div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((tst, index) => (
            <SwiperSlide key={index} className="mb-5">
              <a
                href={tst.link || "#"}
                target={tst.link ? "_blank" : undefined}
                rel={tst.link ? "noopener noreferrer" : undefined}
                className="block h-full"
                onClick={(e) => openTestimonial(tst, e)}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-[350px] flex flex-col justify-center gap-0">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <img
                        src={tst.image}
                        alt={t(tst.nameKey)}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-bold text-gray-900">
                          {t(tst.nameKey)}
                        </h4>
                        <span className="text-xs text-gray-400">
                          {t(tst.dateKey)}
                        </span>
                        {tst.roleKey && (
                          <p className="text-sm text-gray-600">
                            {t(tst.roleKey)}
                          </p>
                        )}
                        {tst.companyKey && (
                          <p className="text-sm text-primary-600">
                            {t(tst.companyKey)}
                          </p>
                        )}
                      </div>
                    </div>
                    {tst.google && (
                      <img
                        src="/google-logo.svg"
                        alt="Google"
                        className="w-6 h-auto"
                      />
                    )}
                  </div>

                  {renderStars(tst.rating)}

                  <blockquote
                    className="text-gray-700 mb-4 italic whitespace-pre-line line-clamp-3 overflow-hidden"
                    style={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 3,
                    }}
                  >
                    "{t(tst.quoteKey)}"
                  </blockquote>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {selectedTestimonial && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              ✕
            </button>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <img
                  src={selectedTestimonial.image}
                  alt={t(selectedTestimonial.nameKey)}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-xl">
                    {t(selectedTestimonial.nameKey)}
                  </h4>
                  <span className="text-sm text-gray-400">
                    {t(selectedTestimonial.dateKey)}
                  </span>
                  {selectedTestimonial.roleKey && (
                    <p className="text-gray-600">
                      {t(selectedTestimonial.roleKey)}
                    </p>
                  )}
                  {selectedTestimonial.companyKey && (
                    <p className="text-primary-600 font-medium">
                      {t(selectedTestimonial.companyKey)}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {renderStars(selectedTestimonial.rating)}

            <blockquote className="text-gray-700 text-lg mb-6 italic whitespace-pre-line">
              "{t(selectedTestimonial.quoteKey)}"
            </blockquote>
          </div>
        </div>
      )}
      <GoogleRating />
    </section>
  );
};

export default TestimonialsCarousel;
