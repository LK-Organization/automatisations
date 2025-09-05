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

// Simple hook to detect mobile screens
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
};

const exampleIds: Example[] = [
  {
    id: "factures",
    image: "/facture.jpg",
    tags: ["OCR", "Node.js", "Excel"],
    imageClass:
      "h-auto md:h-[200px] md:w-full w-[300px] object-cover object-top",
    imgPosition: "bottom",
  },
  {
    id: "emails",
    image: "/email.jpg",
    tags: ["Gmail API", "Drive API"],
    imageClass:
      "h-auto md:h-[200px] md:w-full w-[300px] object-cover object-right",
    imgPosition: "top",
  },
  {
    id: "chatbot",
    image: "/chatbot.webp",
    tags: ["React", "OpenAI"],
    imageClass:
      "h-auto md:h-[200px] md:w-full w-[300px] object-cover object-top",
    imgPosition: "bottom",
  },
  {
    id: "crm",
    image: "/crm.jpg",
    tags: ["Salesforce", "Google Calendar"],
    imageClass:
      "h-auto md:h-[210px] md:w-full w-[300px] object-cover object-center",
    imgPosition: "top",
  },
  {
    id: "reports",
    image: "/reports.jpg",
    tags: ["Formik", "jsPDF", "SMTP"],
    imageClass:
      "h-auto md:h-[200px] md:w-full w-[300px] object-cover object-top",
    imgPosition: "bottom",
  },
];

const AutomationCarousel: React.FC<AutomationCarouselProps> = ({ lang }) => {
  const t = useTranslations(lang);
  const isMobile = useIsMobile();

  const [selected, setSelected] = useState<
    (Example & { title: string; subtitle: string; details: string }) | null
  >(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [originSlide, setOriginSlide] = useState<HTMLElement | null>(null);
  const swiperRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const expandedRef = useRef<HTMLDivElement>(null);

  // Lock background scroll on mobile when modal is open
  useEffect(() => {
    if (isMobile && isExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobile, isExpanded]);

  // Close expanded view on click outside (desktop only)
  useEffect(() => {
    if (isExpanded && !isMobile) {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          expandedRef.current &&
          !expandedRef.current.contains(event.target as Node)
        ) {
          handleCollapse();
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isExpanded, isMobile]);

  const examplesWithText = exampleIds.map((ex) => ({
    ...ex,
    title: t(`exemples.${ex.id}.title`),
    subtitle: t(`exemples.${ex.id}.subtitle`),
    details: t(`exemples.${ex.id}.details`),
  }));

  const handleExpand = (
    ex: Example & { title: string; subtitle: string; details: string },
    event: React.MouseEvent<HTMLElement>
  ) => {
    setSelected(ex);
    setIsExpanded(true);
    setOriginSlide(event.currentTarget);
    swiperRef.current?.autoplay.stop();
  };

  const handleCollapse = () => {
    setIsExpanded(false);
    setTimeout(() => {
      setSelected(null);
      setOriginSlide(null);
      swiperRef.current?.autoplay.start();
    }, 300);
  };

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

        <div className="relative" ref={containerRef}>
          <AnimatePresence>
            {isExpanded &&
              selected &&
              (isMobile ? (
                // Mobile full-screen modal
                <motion.div
                  key="mobile-modal"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 bg-white overflow-auto p-6"
                >
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex flex-col items-center gap-2">
                      <Bot size={40} className="text-indigo-600" />
                      <h3 className="text-2xl text-center font-semibold text-gray-900">
                        {selected.title}
                      </h3>
                    </div>
                    <button
                      onClick={handleCollapse}
                      aria-label={t("common.close")}
                      className="absolute top-4 right-4"
                    >
                      <X size={24} className="text-gray-700" />
                    </button>
                  </div>
                  <p className="text-gray-800 mb-6 whitespace-pre-line">
                    {selected.details}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selected.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ) : (
                // Desktop expanded view with outside click handling
                <motion.div
                  ref={expandedRef}
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
                  className="absolute z-20 flex flex-col md:flex-row bg-gradient-to-br from-blue-800 to-[#2563eb] rounded-2xl shadow-lg overflow-hidden min-h-[300px]"
                >
                  <div
                    className="w-full md:w-1/3 min-h-[300px] p-6 flex flex-col justify-between bg-cover bg-center"
                    style={{ backgroundImage: `url(${selected.image})` }}
                  ></div>
                  <div className="w-full md:w-2/3 p-6 text-white border-t md:border-t-0 md:border-l border-white/20">
                    <div className="flex justify-between items-center gap-3 mb-4">
                      <div className="p-2 bg-indigo-100 text-indigo-600 rounded-full">
                        <Bot size={20} />
                      </div>
                      <h3 className="text-2xl font-semibold">
                        {selected.title}
                      </h3>
                      <button
                        onClick={handleCollapse}
                        className="px-4 py-2 text-white rounded-full hover:bg-white/30 transition flex items-center"
                      >
                        <X size={16} className="mr-1" /> {t("common.close")}
                      </button>
                    </div>
                    <p className="text-sm leading-relaxed whitespace-pre-line mb-6">
                      {selected.details}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selected.tags.map((tag) => (
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
              ))}
          </AnimatePresence>

          {/* Carousel */}
          <motion.div
            animate={{ opacity: isExpanded ? 0 : 1 }}
            transition={{ duration: 0.2 }}
            className={clsx(isExpanded ? "invisible" : "visible")}
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
                  <div
                    onClick={(e) => handleExpand(ex, e)}
                    className="cursor-pointer h-[450px] flex flex-col justify-between bg-gradient-to-br from-blue-800 to-[#2563eb] rounded-2xl shadow-lg overflow-hidden relative"
                  >
                    {ex.imgPosition === "top" && (
                      <img
                        src={ex.image}
                        alt={ex.title}
                        draggable={false}
                        className={clsx(ex.imageClass, "w-full select-none")}
                      />
                    )}
                    <div className="flex flex-col items-end p-6">
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {ex.title}
                      </h3>
                      <p className="text-gray-200 mb-4 text-sm">
                        {ex.subtitle}
                      </p>
                      <div className="w-fit bottom-4 right-4 p-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 transform"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
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
