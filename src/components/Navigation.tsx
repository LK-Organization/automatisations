import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, languages } from "../i18n";

interface NavigationProps {
  lang: "fr" | "en";
  isHomePage?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({
  lang,
  isHomePage = false,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const t = useTranslations(lang);

  const NAV_HEIGHT = 80; // px — matches tailwind h-20 (5rem) used for the navbar height

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.includes("#")) {
      e.preventDefault();
      setIsMenuOpen(false);

      const id = href.split("#")[1];
      // normalize pathname (remove trailing slash)
      const path = window.location.pathname.replace(/\/$/, "");

      if (path === "" || path === "/" || path === "/en") {
        // Already on homepage (FR or EN)
        setTimeout(() => {
          const target = document.getElementById(id);
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        }, 400); // wait for menu animation
      } else {
        // On another page → redirect with anchor
        window.location.href = href;
      }
    } else {
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { key: "nav.home", href: lang === "en" ? "/en" : "/" },
    {
      key: "nav.solutions",
      href: lang === "en" ? "/en/solutions" : "/solutions",
    },
    { key: "nav.contact", href: lang === "en" ? "/en/#contact" : "/#contact" },
  ];

  // Determine language switch target and label
  const [switchTo, setSwitchTo] = useState("");
  const [switchLabel, setSwitchLabel] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentPath = window.location.pathname;
      const isEnglish = currentPath.startsWith("/en");

      const newPath = isEnglish
        ? currentPath.replace(/^\/en/, "") || "/"
        : "/en" + currentPath;

      setSwitchTo(newPath);
      setSwitchLabel(isEnglish ? languages.fr : languages.en);
    }
  }, []);

  // control navbar show/hide based on scroll direction
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 10) {
        // Always visible at very top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
        setIsMenuOpen(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar, { passive: true });
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  // pointer/touch move to reveal navbar when pointer/touch is inside NAV_HEIGHT
  useEffect(() => {
    const onPointerMove = (e: PointerEvent) => {
      if (e.clientY <= NAV_HEIGHT) {
        setIsVisible(true);
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches && e.touches[0] && e.touches[0].clientY <= NAV_HEIGHT) {
        setIsVisible(true);
      }
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("touchstart", onTouchStart, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("touchstart", onTouchStart);
    };
  }, [NAV_HEIGHT]);

  const getBackgroundStyle = () => {
    if (isHomePage) {
      return "bg-black/20 backdrop-blur-md border-b border-white/10";
    }
    return "bg-black/95 backdrop-blur-md border-b border-gray-800";
  };

  return (
    <>
      {/* Hover strip: same height as navbar (h-20 / 80px). Only rendered when nav is hidden */}
      {!isVisible && (
        <div
          style={{ height: NAV_HEIGHT, zIndex: 9999 }}
          className="fixed top-0 left-0 right-0"
          onMouseEnter={() => setIsVisible(true)}
          onTouchStart={() => setIsVisible(true)}
          aria-hidden
        />
      )}

      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className={getBackgroundStyle()}>
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <div className="flex-shrink-0">
                <a
                  href={lang === "en" ? "/en/" : "/"}
                  className="flex items-center"
                >
                  <img
                    src="/logo-color-horizental.svg"
                    alt="Automatisons Agence IA Logo"
                    className="h-8 md:h-10 w-auto"
                  />
                </a>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-8">
                <div>
                  {navItems.map((item) => {
                    const href =
                      item.href === "/"
                        ? "/"
                        : item.href.includes("#")
                          ? item.href
                          : `${item.href}/`;

                    return (
                      <a
                        key={item.key}
                        href={href}
                        className="text-white/90 hover:text-white px-4 py-2 text-base font-medium transition-all duration-200 hover:scale-105"
                      >
                        {t(item.key)}
                      </a>
                    );
                  })}
                </div>
              </div>
              {/* Language Switcher Desktop */}
              <a
                href={switchTo}
                className="hidden md:flex text-white  transition-colors duration-200 items-center justify-center gap-2"
              >
                <img
                  src={switchLabel}
                  alt=""
                  className="saturate-50 rounded-full"
                  width={25}
                />
              </a>
              {/* Mobile menu button and Language Switcher */}
              <div className="md:hidden flex items-center space-x-4">
                <button
                  onClick={toggleMenu}
                  className="text-white/90 hover:text-white focus:outline-none p-2 transition-all duration-200"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className={`md:hidden ${isHomePage ? "bg-black/30" : "bg-black/90"} backdrop-blur-md border-t ${
                  isHomePage ? "border-white/10" : "border-gray-800"
                }`}
              >
                <div className="flex flex-col gap-4 px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navItems.map((item) => {
                    const href =
                      item.href === "/"
                        ? "/"
                        : item.href.includes("#")
                          ? item.href
                          : `${item.href}/`;

                    return (
                      <a
                        key={item.key}
                        href={href}
                        className="text-white/90 hover:text-white block px-3 py-2 text-base font-medium transition-all duration-200"
                        onClick={(e) => handleClick(e, href)}
                      >
                        {t(item.key)}
                      </a>
                    );
                  })}

                  <a
                    href={switchTo}
                    className="  px-8 py-2 items-center justify-center gap-2 "
                  >
                    <img src={switchLabel} alt="" width={30} />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
};

export default Navigation;
