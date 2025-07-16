// src/components/AutomationCarousel.tsx
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { X, ChevronLeft, ChevronRight, Tag as TagIcon } from "lucide-react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "../i18n"; // ← IMPORT i18n

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

interface Example {
  id: string;
  image: string;
  tags: string[];
  imageClass?: string;
  imgPosition?: "top" | "bottom";
}

interface AutomationCarouselProps {
  lang: string;
}

const exampleIds: Example[] = [
  {
    id: "factures",
    image: "/invoice.png",
    tags: ["OCR", "Node.js", "Excel"],
    imageClass:
      "h-auto md:h-[200px] md:w-full w-[300px] object-cover object-top rounded-b-2xl",
    imgPosition: "bottom",
  },
  {
    id: "emails",
    image: "/emailing.png",
    tags: ["Gmail API", "Drive API"],
    imageClass:
      "h-[250px] md:h-[200px] md:w-full w-auto object-contain object-right rounded-t-2xl",
    imgPosition: "top",
  },
  {
    id: "chatbot",
    image: "/chatbot.png",
    tags: ["React", "OpenAI"],
    imageClass:
      "h-auto md:h-[200px] md:w-full w-[300px] object-cover object-top rounded-t-2xl",
    imgPosition: "bottom",
  },
  {
    id: "crm",
    image: "/crm.png",
    tags: ["Salesforce ", "Google Calendar "],
    imageClass:
      "h-[200px] md:h-[150px] md:w-auto w-[300px] object-cover object-center rounded-b-2xl",
    imgPosition: "top",
  },
  {
    id: "reports",
    image: "/reports.png",
    tags: ["Formik", "jsPDF", "SMTP"],
    imageClass:
      "h-auto md:h-[200px] md:w-full w-[300px] object-cover object-top rounded-b-2xl",
    imgPosition: "bottom",
  },
  {
    id: "assistant",
    image: "/vocal-assitance.png",
    tags: ["React", "Web Speech API"],
    imageClass:
      "h-[250px] md:w-full w-full object-cover object-bottom rounded-t-2xl",
    imgPosition: "top",
  },
];

const AutomationCarousel: React.FC<AutomationCarouselProps> = ({ lang }) => {
  const t = useTranslations(lang);
  const [selected, setSelected] = useState<Example | null>(null);
  const swiperRef = useRef<any>(null);

  const examplesWithText = exampleIds.map((ex) => ({
    ...ex,
    title: t(`exemples.${ex.id}.title`),
    subtitle: t(`exemples.${ex.id}.subtitle`),
    details: t(`exemples.${ex.id}.details`),
  }));

  return (
    <section className="py-16" id="exemples">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            {t("exemples.title")}
          </h2>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={(sw) => (swiperRef.current = sw)}
          spaceBetween={24}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 12 },
            640: { slidesPerView: 2, spaceBetween: 16 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
            1280: { slidesPerView: 4, spaceBetween: 24 },
          }}
          className="px-4"
        >
          {examplesWithText.map((ex) => (
            <SwiperSlide key={ex.id}>
              <div
                onClick={() => setSelected(ex)}
                className="h-[450px] flex flex-col justify-between bg-gradient-to-br from-indigo-800 to-purple-700 rounded-2xl shadow-lg overflow-hidden cursor-pointer"
              >
                {ex.imgPosition === "top" && (
                  <img
                    src={ex.image}
                    alt={ex.title}
                    draggable={false}
                    className={clsx(ex.imageClass, "w-full select-none")}
                  />
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {ex.title}
                  </h3>
                  <p className="text-gray-200 mb-4 text-sm">{ex.subtitle}</p>
                  <div className="flex flex-wrap gap-2">
                    {ex.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-1 bg-white bg-opacity-20 text-white text-xs rounded-full"
                      >
                        <TagIcon size={12} className="mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {ex.imgPosition === "bottom" && (
                  <img
                    src={ex.image}
                    alt={ex.title}
                    draggable={false}
                    className={clsx(ex.imageClass, "w-full select-none")}
                  />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <div className="flex justify-center space-x-4 mt-6">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="p-3 bg-white rounded-full shadow disabled:opacity-50"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="p-3 bg-white rounded-full shadow disabled:opacity-50"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                className="bg-white rounded-2xl max-w-2xl w-full p-8 relative mx-4"
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 50 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                  onClick={() => setSelected(null)}
                >
                  <X size={24} />
                </button>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {selected.title}
                </h3>
                <p className="text-gray-700 whitespace-pre-line mb-6">
                  {selected.details}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AutomationCarousel;
