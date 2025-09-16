// src/components/AutomationCarousel.tsx
import React, {
  useState,
  useRef,
  useEffect,
  type ButtonHTMLAttributes,
} from "react";
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
  lang: "fr" | "en";
}
type CustomButtonHTMLAttributes = ButtonHTMLAttributes<HTMLButtonElement> & {
  ariaLabel?: "common.close" | "other.value";
};

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

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [originSlide, setOriginSlide] = useState<HTMLElement | null>(null);
  const swiperRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const expandedRef = useRef<HTMLDivElement>(null);

  // For touch swipe on mobile modal
  const touchStartX = useRef<number | null>(null);
  const touchCurrentX = useRef<number | null>(null);

  // Build examples with translated text
  const examplesWithText = exampleIds.map((ex) => ({
    ...ex,
    title: t(`exemples.${ex.id}.title` as any),
    subtitle: t(`exemples.${ex.id}.subtitle` as any),
    details: t(`exemples.${ex.id}.details` as any),
  }));

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

  // Keyboard navigation when expanded
  useEffect(() => {
    if (!isExpanded) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCollapse();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExpanded, selectedIndex]);

  const handleExpand = (
    index: number,
    event: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>
  ) => {
    setSelectedIndex(index);
    setIsExpanded(true);
    // store origin element for animation (only if click provided)
    if ("currentTarget" in event) {
      setOriginSlide(event.currentTarget as HTMLElement);
    }
    swiperRef.current?.autoplay?.stop?.();
  };

  const handleCollapse = () => {
    setIsExpanded(false);
    setTimeout(() => {
      setSelectedIndex(null);
      setOriginSlide(null);
      swiperRef.current?.autoplay?.start?.();
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

  const wrapIndex = (i: number) => {
    const n = examplesWithText.length;
    return ((i % n) + n) % n;
  };

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((s) => (s === null ? null : wrapIndex(s + 1)));
  };

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((s) => (s === null ? null : wrapIndex(s - 1)));
  };

  // Touch handlers for mobile swipe in modal
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchCurrentX.current = e.touches[0].clientX;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    touchCurrentX.current = e.touches[0].clientX;
  };
  const onTouchEnd = () => {
    if (touchStartX.current === null || touchCurrentX.current === null) return;
    const delta = touchCurrentX.current - touchStartX.current;
    const threshold = 50; // px
    if (delta > threshold) {
      // swipe right -> previous
      handlePrev();
    } else if (delta < -threshold) {
      // swipe left -> next
      handleNext();
    }
    touchStartX.current = null;
    touchCurrentX.current = null;
  };

  // When switching selectedIndex, update originSlide to the slide DOM (optional)
  useEffect(() => {
    if (selectedIndex === null) return;
    // find slide element with data-example-id
    const id = examplesWithText[selectedIndex].id;
    const slideEl = containerRef.current?.querySelector<HTMLElement>(
      `[data-example-id="${id}"]`
    );
    if (slideEl) setOriginSlide(slideEl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIndex]);

  return (
    <section className="py-16" id="exemples">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900">
            {t("exemples.title")}
          </h2>
        </div>

        <div className="relative" ref={containerRef}>
          <AnimatePresence initial={false}>
            {isExpanded &&
              selectedIndex !== null &&
              // Mobile full-screen modal
              (isMobile ? (
                <motion.div
                  key="mobile-modal"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 bg-white overflow-auto p-6"
                  onTouchStart={onTouchStart}
                  onTouchMove={onTouchMove}
                  onTouchEnd={onTouchEnd}
                >
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex flex-col items-center gap-2">
                      <Bot size={40} className="text-indigo-600" />
                      <h3 className="text-2xl text-center font-semibold text-gray-900">
                        {examplesWithText[selectedIndex].title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleCollapse}
                        className="absolute top-4 right-4"
                        aria-label="Close"
                      >
                        <X size={24} className="text-gray-700" />
                      </button>
                    </div>
                  </div>

                  <div className="mb-6">
                    <img
                      src={examplesWithText[selectedIndex].image}
                      alt={examplesWithText[selectedIndex].title}
                      className="w-full h-auto rounded-lg mb-4 object-cover"
                    />
                    <p className="text-gray-800 mb-6 whitespace-pre-line">
                      {examplesWithText[selectedIndex].details}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {examplesWithText[selectedIndex].tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="fixed bottom-6 left-0 right-0 flex justify-between px-6 pointer-events-auto">
                    <button
                      onClick={handlePrev}
                      className="p-3 bg-white rounded-full shadow disabled:opacity-50"
                      aria-label="Previous example"
                    >
                      <ChevronLeft />
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-3 bg-white rounded-full shadow disabled:opacity-50"
                      aria-label="Next example"
                    >
                      <ChevronRight />
                    </button>
                  </div>
                </motion.div>
              ) : (
                // Desktop expanded view with side arrows + outside click handling
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
                  className="absolute z-20 flex flex-col md:flex-row bg-gradient-to-br from-blue-800 to-[#2563eb] rounded-2xl shadow-lg overflow-visible min-h-[300px]"
                >
                  {/* Left arrow */}
                  <button
                    onClick={handlePrev}
                    className="hidden md:flex absolute left-[-24px] top-1/2 transform -translate-y-1/2 z-30 bg-white  p-3 rounded-full items-center justify-center shadow-xl"
                    aria-label="Previous example"
                    style={{ backdropFilter: "blur(6px)" }}
                  >
                    <ChevronLeft className="text-black" />
                  </button>

                  {/* Right arrow */}
                  <button
                    onClick={handleNext}
                    className="hidden md:flex absolute right-[-24px] top-1/2 transform -translate-y-1/2 z-30 bg-white p-3 rounded-full items-center justify-center shadow-xl"
                    aria-label="Next example"
                    style={{ backdropFilter: "blur(6px)" }}
                  >
                    <ChevronRight className="text-black" />
                  </button>

                  <div
                    className="w-full md:w-1/3 min-h-[300px] p-6 flex flex-col justify-between bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${examplesWithText[selectedIndex].image})`,
                    }}
                  ></div>

                  <div className="w-full md:w-2/3 p-6 text-white border-t md:border-t-0 md:border-l border-white/20">
                    <div className="flex justify-between items-center gap-3 mb-4">
                      <div className="p-2 bg-indigo-100 text-indigo-600 rounded-full">
                        <Bot size={20} />
                      </div>
                      <h3 className="text-2xl font-semibold">
                        {examplesWithText[selectedIndex].title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={handleCollapse}
                          className="px-4 py-2 text-white rounded-full hover:bg-white/30 transition flex items-center"
                          aria-label="Close"
                        >
                          <X size={16} className="mr-1" />
                        </button>
                      </div>
                    </div>

                    <motion.div
                      key={examplesWithText[selectedIndex].id}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.18 }}
                    >
                      <p className="text-sm leading-relaxed whitespace-pre-line mb-6">
                        {examplesWithText[selectedIndex].details}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {examplesWithText[selectedIndex].tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>

          {/* Carousel (hidden/disabled while expanded) */}
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
              {examplesWithText.map((ex, idx) => (
                <SwiperSlide key={ex.id}>
                  <div
                    data-example-id={ex.id}
                    onClick={(e) => handleExpand(idx, e as any)}
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

        {/* Mobile bottom nav controls for the swiper itself (not modal) */}
        <div className="flex md:hidden justify-center space-x-4 mt-6">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="p-3 bg-white rounded-full shadow disabled:opacity-50"
            aria-label="Carousel previous"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="p-3 bg-white rounded-full shadow disabled:opacity-50"
            aria-label="Carousel next"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AutomationCarousel;
