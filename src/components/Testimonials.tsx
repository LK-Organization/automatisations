import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const testimonials = [
  {
    name: "Jean-Pierre L.",
    role: "Gérant de magasin",
    company: "—",
    sector: "Commerce de détail",
    quote:
      "On a fait appel à Automatisons Agency pour optimiser notre gestion des commandes. J'étais sceptique au début mais l'équipe a assuré. Moins d’erreurs et un bon retour sur investissement. Je recommande !",
    result: "-30% erreurs",
    image:
      "https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    date: "Il y a 2 semaines",
  },
  {
    name: "Sarah M.",
    role: "Directrice Administrative",
    company: "—",
    sector: "Services",
    quote:
      "Ils ont automatisé la gestion des factures. Avant, on passait des heures à tout faire manuellement. Maintenant, c’est rapide, automatique, et on a plus de temps pour d'autres tâches.",
    result: "Gain de temps x2",
    image:
      "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    date: "Il y a 1 mois",
  },
  {
    name: "Mohamed K.",
    role: "Gérant E-commerce",
    company: "—",
    sector: "E-commerce",
    quote:
      "Super travail sur notre boutique en ligne. Commandes et stocks sont gérés automatiquement. Les ventes ont augmenté et le suivi des colis est bien pensé.",
    result: "+35% ventes",
    image:
      "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    date: "Il y a 3 semaines",
  },
  {
    name: "Claire D.",
    role: "Comptable",
    company: "—",
    sector: "Comptabilité",
    quote:
      "L'automatisation a réduit considérablement les erreurs de saisie. L’équipe est à l’écoute et réactive. Le support technique est rapide et efficace.",
    result: "-70% erreurs de saisie",
    image:
      "https://images.pexels.com/photos/210647/pexels-photo-210647.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    date: "Il y a 2 mois",
  },
  {
    name: "Thomas R.",
    role: "Directeur Logistique",
    company: "—",
    sector: "Logistique",
    quote:
      "On a automatisé notre chaîne d'approvisionnement. Moins de retards, meilleure organisation et bon rapport qualité-prix malgré l’investissement de départ.",
    result: "-50% retards livraison",
    image:
      "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    date: "Il y a 1 mois",
  },
  {
    name: "Nathalie F.",
    role: "Responsable Marketing",
    company: "—",
    sector: "Marketing",
    quote:
      "L’automatisation de la génération de leads a boosté nos conversions. Le système envoie les bonnes infos au bon moment. Équipe pédagogue et sympa.",
    result: "+45% conversions",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    date: "Il y a 3 semaines",
  },
  {
    name: "Karim B.",
    role: "Directeur Technique",
    company: "—",
    sector: "Industrie",
    quote:
      "Ils ont automatisé notre maintenance prédictive. Moins de pannes et une meilleure anticipation. Équipe technique compétente et réactive.",
    result: "-60% pannes",
    image:
      "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    date: "Il y a 2 mois",
  },
  {
    name: "Amélie L.",
    role: "Responsable RH",
    company: "—",
    sector: "Ressources humaines",
    quote:
      "Le tri des CV est automatisé. On a gagné un temps fou. L’équipe a bien pris le temps de nous former. L’interface pourrait être plus intuitive, mais le système est efficace.",
    result: "-50% temps de recrutement",
    image:
      "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    date: "Il y a 1 mois",
  },
];

const renderStars = (rating: number) => (
  <div className="flex mb-2">
    {[...Array(5)].map((_, i) => (
      <span
        key={i}
        className={`text-[20px] ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ))}
  </div>
);

const TestimonialsCarousel: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Témoignages clients
          </h3>
          <p className="text-lg text-gray-600">Ils nous font confiance.</p>
        </div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="mb-5">
              <div className="bg-white rounded-2xl p-6  shadow-lg border border-gray-100 h-[400px]  flex flex-col justify-center gap-0">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <span className="text-xs text-gray-400">
                      {testimonial.date}
                    </span>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-primary-600">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {renderStars(testimonial.rating)}

                <blockquote className="text-gray-700 mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {testimonial.sector}
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {testimonial.result}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
