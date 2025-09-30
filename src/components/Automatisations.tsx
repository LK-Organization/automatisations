"use client";
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
    id: "commandes",
    image: "/automatisation1.png",
    tags: ["AI", "WooCommerce"],
    imageClass:
      "h-auto md:h-[200px] md:w-full w-[300px] object-cover object-top",
    imgPosition: "bottom",
  },
  {
    id: "sms",
    image: "/automatisations2.png",
    tags: ["WooCommerce", "Twilio", "Google Sheets"],
    imageClass:
      "h-auto md:h-[200px] md:w-full w-[300px] object-cover object-right",
    imgPosition: "top",
  },
  {
    id: "exports",
    image: "/automatisation3.png",
    tags: ["WooCommerce", "Google Sheets"],
    imageClass:
      "h-auto md:h-[210px] md:w-full w-[300px] object-cover object-center",
    imgPosition: "top",
  },
  {
    id: "factures",
    image: "/automatisation4.png",
    tags: ["OCR", "Google Sheets"],
    imageClass:
      "h-auto md:h-[200px] md:w-full w-[300px] object-cover object-top",
    imgPosition: "bottom",
  },
  {
    id: "mail",
    image: "/mail-generation.webp",
    tags: ["NLP", "API REST", "SMTP"],
    imageClass:
      "h-auto md:h-[200px] md:w-full w-[300px] object-cover object-center",
    imgPosition: "top",
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

  // Keep track of the maximum slide height so every slide can match it
  const [maxSlideHeight, setMaxSlideHeight] = useState<number | null>(null);

  // Build examples with translated text
  const examplesWithText = exampleIds.map((ex) => ({
    ...ex,
    title: t(`automatisations.${ex.id}.title` as any),
    /*objective: t(`automatisations.${ex.id}.objective` as any),*/
    subtitle: t(`automatisations.${ex.id}.subtitle` as any),
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
  }, [isExpanded, selectedIndex]);

  const handleExpand = (
    index: number,
    event: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>
  ) => {
    setSelectedIndex(index);
    setIsExpanded(true);
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
    const threshold = 50;
    if (delta > threshold) {
      handlePrev();
    } else if (delta < -threshold) {
      handleNext();
    }
    touchStartX.current = null;
    touchCurrentX.current = null;
  };

  // When switching selectedIndex, update originSlide
  useEffect(() => {
    if (selectedIndex === null) return;
    const id = examplesWithText[selectedIndex].id;
    const slideEl = containerRef.current?.querySelector<HTMLElement>(
      `[data-example-id="${id}"]`
    );
    if (slideEl) setOriginSlide(slideEl);
  }, [selectedIndex]);

  // === Measure all slide heights and set the max so every slide matches it ===
  useEffect(() => {
    if (!containerRef.current) return;
    if (isExpanded) return;

    const measure = () => {
      const slides = Array.from(
        containerRef.current!.querySelectorAll<HTMLElement>("[data-example-id]")
      );
      if (slides.length === 0) return;
      const heights = slides.map((s) =>
        Math.ceil(s.getBoundingClientRect().height)
      );
      const max = Math.max(...heights);
      setMaxSlideHeight(max);
    };

    const ro = new ResizeObserver(() => measure());
    const slides = Array.from(
      containerRef.current.querySelectorAll<HTMLElement>("[data-example-id]")
    );
    slides.forEach((s) => ro.observe(s));

    window.addEventListener("resize", measure);
    const imgs = Array.from(
      containerRef.current.querySelectorAll<HTMLImageElement>("img")
    );
    const onImgLoad = () => measure();
    imgs.forEach((img) => img.addEventListener("load", onImgLoad));

    measure();

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
      imgs.forEach((img) => img.removeEventListener("load", onImgLoad));
    };
  }, [isExpanded, examplesWithText]);

  // --- helper to render details ---
  const renderDetails = (id: string) => {
    const sections: JSX.Element[] = [];
    let i = 1;

    while (true) {
      const key = `automatisations.${id}.details.${i}`;
      const text = t(key as any);
      if (!text || text.startsWith("automatisations.")) break;

      let heading = "";
      if (i === 1) heading = lang === "fr" ? "Réalisation" : "Realization";
      if (i === 2) heading = lang === "fr" ? "Fiabilité" : "Reliability";
      if (i === 3) heading = lang === "fr" ? "Gain" : "Gain";

      // Vérifier s’il existe des sous-listes
      const listItems: string[] = [];
      let j = 1;
      while (true) {
        const listKey = `automatisations.${id}.details.${i}.list.${j}`;
        const listText = t(listKey as any);
        if (!listText || listText.startsWith("automatisations.")) break;
        listItems.push(listText);
        j++;
      }

      const endKey = `automatisations.${id}.details.${i}.end`;
      const endText = t(endKey as any);

      sections.push(
        <div key={i} className="mb-6">
          {heading && (
            <h4 className="text-lg font-semibold mb-2 text-black md:text-white">
              {heading}
            </h4>
          )}
          <p className="text-sm leading-relaxed whitespace-pre-line">{text}</p>

          {listItems.length > 0 && (
            <ul className="list-disc list-inside text-sm text-black-200 md:text-gray-200 my-2">
              {listItems.map((li, idx) => (
                <li key={idx}>{li}</li>
              ))}
            </ul>
          )}

          {endText && (
            <p className="text-sm leading-relaxed whitespace-pre-line mt-2">
              {endText}
            </p>
          )}
        </div>
      );

      i++;
    }

    return sections;
  };

  return (
    <section className="py-16" id="automatisations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900">
            {t("automations.title")}
          </h2>
        </div>

        <div className="relative" ref={containerRef}>
          <AnimatePresence initial={false}>
            {isExpanded &&
              selectedIndex !== null &&
              (isMobile ? (
                // Mobile modal
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
                    <button
                      onClick={handleCollapse}
                      className="absolute top-4 right-4"
                      aria-label="Close"
                    >
                      <X size={24} className="text-gray-700" />
                    </button>
                  </div>

                  <div className="mb-6">
                    <img
                      src={examplesWithText[selectedIndex].image}
                      alt={examplesWithText[selectedIndex].title}
                      className="w-full h-auto rounded-lg mb-4 object-cover"
                    />

                    {/* Render dynamic details */}
                    {renderDetails(examplesWithText[selectedIndex].id)}

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

                  <div className="fixed bottom-6 left-0 right-0 flex justify-between px-6">
                    <button
                      onClick={handlePrev}
                      className="p-3 bg-white rounded-full shadow"
                      aria-label="Previous example"
                    >
                      <ChevronLeft />
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-3 bg-white rounded-full shadow"
                      aria-label="Next example"
                    >
                      <ChevronRight />
                    </button>
                  </div>
                </motion.div>
              ) : (
                // Desktop expanded
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
                  <button
                    onClick={handlePrev}
                    className="hidden md:flex absolute left-[-24px] top-1/2 -translate-y-1/2 z-30 bg-white p-3 rounded-full shadow-xl"
                    aria-label="Previous example"
                  >
                    <ChevronLeft className="text-black" />
                  </button>

                  <button
                    onClick={handleNext}
                    className="hidden md:flex absolute right-[-24px] top-1/2 -translate-y-1/2 z-30 bg-white p-3 rounded-full shadow-xl"
                    aria-label="Next example"
                  >
                    <ChevronRight className="text-black" />
                  </button>

                  <div
                    className="w-full md:w-1/2 min-h-[300px] p-6 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${examplesWithText[selectedIndex].image})`,
                    }}
                  ></div>

                  <div className="w-full md:w-1/2 p-6 text-white border-t md:border-t-0 md:border-l border-white/20">
                    <div className="flex justify-between items-center gap-3 mb-4">
                      <div className="p-2 bg-indigo-100 text-indigo-600 rounded-full">
                        <Bot size={20} />
                      </div>
                      <h3 className="text-2xl font-semibold">
                        {examplesWithText[selectedIndex].title}
                      </h3>
                      <button
                        onClick={handleCollapse}
                        className="px-4 py-2 text-white rounded-full hover:bg-white/30 transition flex items-center"
                        aria-label="Close"
                      >
                        <X size={16} className="mr-1" />
                      </button>
                    </div>

                    <motion.div
                      key={examplesWithText[selectedIndex].id}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.18 }}
                    >
                      {/* Render dynamic details */}
                      {renderDetails(examplesWithText[selectedIndex].id)}

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
              {examplesWithText.map((ex, idx) => (
                <SwiperSlide key={ex.id}>
                  <div
                    data-example-id={ex.id}
                    onClick={(e) => handleExpand(idx, e as any)}
                    style={
                      maxSlideHeight
                        ? { height: `${maxSlideHeight}px` }
                        : undefined
                    }
                    className="cursor-pointer flex flex-col justify-between bg-gradient-to-br from-blue-800 to-[#2563eb] rounded-2xl shadow-lg overflow-hidden relative"
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
                      <p className="text-gray-200 mb-4 text-sm">
                        {/*{ex.objective}*/}
                      </p>
                      <div className="w-fit p-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition">
                        <ChevronRight className="h-5 w-5" />
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

        {/* Mobile bottom nav controls */}
        <div className="flex md:hidden justify-center space-x-4 mt-6">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="p-3 bg-white rounded-full shadow"
            aria-label="Carousel previous"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="p-3 bg-white rounded-full shadow"
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
