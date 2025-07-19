// src/components/AutomationCarousel.tsx
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import {
  X,
  Bot,
  ChevronLeft,
  ChevronRight,
  Tag as TagIcon,
} from "lucide-react";
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
    image: "/invoice-fr.png",
    tags: ["OCR", "Node.js", "Excel"],
    imageClass:
      "h-auto md:h-[200px] md:w-full w-[300px] object-cover object-top rounded-b-2xl",
    imgPosition: "bottom",
  },
  {
    id: "emails",
    image: "/emailing.webp",
    tags: ["Gmail API", "Drive API"],
    imageClass:
      "h-[250px] md:h-[200px] md:w-full w-auto object-contain object-right rounded-t-2xl",
    imgPosition: "top",
  },
  {
    id: "chatbot",
    image: "/chatbot-fr.png",
    tags: ["React", "OpenAI"],
    imageClass:
      "h-auto md:h-[200px] md:w-full w-[300px] object-cover object-top rounded-t-2xl",
    imgPosition: "bottom",
  },
  {
    id: "crm",
    image: "/crm.webp",
    tags: ["Salesforce ", "Google Calendar "],
    imageClass:
      "h-[200px] md:h-[150px] md:w-auto w-[300px] object-cover object-center rounded-b-2xl",
    imgPosition: "top",
  },
  {
    id: "reports",
    image: "/reports.webp",
    tags: ["Formik", "jsPDF", "SMTP"],
    imageClass:
      "h-auto md:h-[200px] md:w-full w-[300px] object-cover object-top rounded-b-2xl",
    imgPosition: "bottom",
  },
  {
    id: "assistant",
    image: "/vocal-assitance.webp",
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
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                className="
          relative bg-white/90 dark:bg-zinc-900/80
          backdrop-blur-xl border border-white/30
          rounded-3xl shadow-2xl ring-1 ring-white/10
          w-full max-w-3xl mx-4 p-0 overflow-hidden
          max-h-[90svh] overflow-y-auto
        "
                initial={{ scale: 0.95, y: 30, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 30, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between gap-4 px-6 py-4 bg-white dark:bg-zinc-800 border-b border-gray-200 dark:border-zinc-700 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-indigo-100 text-indigo-600 rounded-full">
                      <Bot size={20} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {selected.title}
                    </h3>
                  </div>
                  <button
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white transition-colors"
                    onClick={() => setSelected(null)}
                  >
                    <X size={22} />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="px-6 py-6 sm:p-8 space-y-6">
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                    {selected.details}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {selected.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-800/20 dark:text-indigo-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AutomationCarousel;
