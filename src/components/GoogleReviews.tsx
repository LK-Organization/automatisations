import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

interface Testimonial {
  name: string;
  quote: string;
  image: string;
  rating: number;
  date: string; // ISO date string YYYY-MM-DD
  link: string; // Google Maps URL
}

const testimonials: Testimonial[] = [
  {
    name: "Michal Klg",
    quote:
      "Je recommande pour la mise en place d'automatisation IA. Gros gain de temps et d'efficacité sur nos processus suite à l'intervention d'Automatisons.fr merci encore",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjVS5pyiS9_3e7sULrVYX_1lxPriE0LspxWZMCtvg3b9ZoIW1D7H=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    date: "2025-07-08",
    link: "https://maps.app.goo.gl/dMPkcWyNTZCkX5Mv6",
  },
  {
    name: "lucas desprat",
    quote:
      "L'agence Automatisons a littéralement révolutionné la gestion de mon auto entreprise. Ils ont automatisé tout le volet CRM et data, ce qui m’a fait gagner un temps fou au quotidien. Fini les tâches répétitives et la perte d’informations ! Aujourd’hui, tout est centralisé, fluide, et surtout, je peux enfin me concentrer sur ce qui compte vraiment : mon cœur de métier. Un accompagnement clair, humain et hyper efficace.\nJe recommande les yeux fermés.",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjXjgMdmZQigdYIIc4s61eOLL0JhQ8Ra9OkCZ0u5TDWGMzMqsk2l=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    date: "2025-07-08",
    link: "https://maps.app.goo.gl/QEGeBrYyCJHK6Fhk9",
  },
];

// pure-JS relative-date in French
const getRelativeDate = (isoDate: string) => {
  const now = new Date();
  const then = new Date(isoDate);
  const diffMs = now.getTime() - then.getTime();
  const day = 1000 * 60 * 60 * 24;
  const days = Math.floor(diffMs / day);

  if (days < 1) return "aujourd'hui";
  if (days === 1) return "il y a un jour";
  if (days < 7) return `il y a ${days} jours`;
  if (days < 14) return "il y a une semaine";
  if (days < 30) {
    const w = Math.floor(days / 7);
    return w === 1 ? "il y a une semaine" : `il y a ${w} semaines`;
  }
  const months = Math.floor(days / 30);
  return months === 1 ? "il y a un mois" : `il y a ${months} mois`;
};

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

const TestimonialsCarousel: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Google Rating Header */}
      <div className="flex flex-col items-center justify-center mb-12">
        <img src="/google.svg" alt="Google" className="w-100 h-auto mr-3" />
        <div className="flex items-center">
          <span className="text-2xl font-bold mr-3">5.0</span>
          <div className="flex mr-3">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-xl">
                ★
              </span>
            ))}
          </div>
          <span className="text-gray-500">2 avis</span>
        </div>
      </div>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        spaceBetween={30}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
      >
        {testimonials.map((t, idx) => (
          <SwiperSlide key={idx} className="mb-5">
            <a
              href={t.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100  flex flex-col justify-center">
                <div className="flex justify-between items-center">
                  <div className="flex items-center mb-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover mr-3"
                    />

                    <div>
                      <h4 className="font-bold text-gray-900">{t.name}</h4>
                      <span className="text-xs text-gray-400">
                        {getRelativeDate(t.date)}
                      </span>
                    </div>
                  </div>
                  <img
                    src="/google-logo.svg"
                    alt="G"
                    className="w-7 h-auto mr-2"
                  />
                </div>

                {renderStars(t.rating)}

                <blockquote
                  className="text-gray-700 mb-4 italic"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {t.quote}
                </blockquote>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default TestimonialsCarousel;
