// src/components/AutomationCarousel.tsx
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, X, Bot } from "lucide-react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "../i18n";

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
  const [selected, setSelected] = useState<
    | (Example & {
        title: string;
        subtitle: string;
        details: string;
      })
    | null
  >(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [originSlide, setOriginSlide] = useState<HTMLElement | null>(null);
  const swiperRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const examplesWithText = exampleIds.map((ex) => ({
    ...ex,
    title: t(`exemples.${ex.id}.title`),
    subtitle: t(`exemples.${ex.id}.subtitle`),
    details: t(`exemples.${ex.id}.details`),
  }));

  // Handle slide expansion
  const handleExpand = (ex: any, event: React.MouseEvent) => {
    setSelected(ex);
    setIsExpanded(true);
    setOriginSlide(event.currentTarget as HTMLElement);

    if (swiperRef.current) {
      swiperRef.current.autoplay.stop();
    }
  };

  // Handle slide collapse
  const handleCollapse = () => {
    setIsExpanded(false);
    setTimeout(() => {
      setSelected(null);
      setOriginSlide(null);
      if (swiperRef.current) {
        swiperRef.current.autoplay.start();
      }
    }, 300);
  };

  // Calculate position for expand animation
  const getSlidePosition = () => {
    if (!originSlide || !containerRef.current) return {};

    const slideRect = originSlide.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    return {
      top: slideRect.top - containerRect.top,
      left: slideRect.left - containerRect.left,
      width: slideRect.width,
      height: slideRect.height,
    };
  };

  return (
    <section className="py-16" id="exemples">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900">
            {t("exemples.title")}
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative " ref={containerRef}>
          {/* Expanded View */}
          <AnimatePresence>
            {isExpanded && selected && (
              <motion.div
                key="expanded-view"
                initial={getSlidePosition()}
                animate={{
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "fit-content",
                }}
                exit={getSlidePosition()}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute z-20 flex flex-col md:flex-row bg-gradient-to-br from-indigo-800 to-purple-700 rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="w-full md:w-1/3 h-full p-6 flex flex-col justify-between">
                  <div className="flex justify-center items-center h-full">
                    <img
                      src={selected.image}
                      alt={selected.title}
                      draggable={false}
                      className={clsx(
                        "w-full h-auto max-h-[300px] object-contain"
                      )}
                    />
                  </div>
                </div>

                <div className="w-full md:w-2/3 p-6 text-white border-t md:border-t-0 md:border-l border-white/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-indigo-100 text-indigo-600 rounded-full">
                      <Bot size={20} />
                    </div>
                    <h3 className="text-2xl font-semibold">{selected.title}</h3>
                    <div className="flex justify-end">
                      <button
                        onClick={handleCollapse}
                        className="mt-4 px-4 py-2 text-white rounded-full hover:bg-white/30 transition flex items-center"
                      >
                        <X size={16} className="mr-1" />
                        {t("common.close")}
                      </button>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed whitespace-pre-line mb-6">
                    {selected.details}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selected.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Carousel */}
          <motion.div
            animate={{
              opacity: isExpanded ? 0 : 1,
            }}
            transition={{ duration: 0.2 }}
            className={clsx("relative", isExpanded ? "invisible" : "visible")}
          >
            <Swiper
              modules={[Navigation, Autoplay]}
              onSwiper={(sw) => (swiperRef.current = sw)}
              loop
              autoplay={{ delay: 5000, disableOnInteraction: false }}
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
                  <div className="h-[450px] flex flex-col justify-between bg-gradient-to-br from-indigo-800 to-purple-700 rounded-2xl shadow-lg overflow-hidden relative">
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
                      <p className="text-gray-200 mb-4 text-sm">
                        {ex.subtitle}
                      </p>
                    </div>
                    {ex.imgPosition === "bottom" && (
                      <img
                        src={ex.image}
                        alt={ex.title}
                        draggable={false}
                        className={clsx(ex.imageClass, "w-full select-none")}
                      />
                    )}
                    <button
                      onClick={(e) => handleExpand(ex, e)}
                      className="absolute bottom-4 right-4 p-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition"
                      aria-label={t("common.expand")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 transform "
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>

        {/* Navigation buttons */}
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
      </div>
    </section>
  );
};

export default AutomationCarousel;
