import React from "react";
import { motion } from "framer-motion";
import LogoX from "./LogoX";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { useTranslations } from "../i18n";

interface FooterProps {
  lang: string;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = useTranslations(lang);
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=61577856784226",
      label: "Facebook",
    },
    { icon: LogoX, href: "https://x.com/Automatisonsfr", label: "X" },
    {
      icon: Youtube,
      href: "https://www.youtube.com/channel/UCbhcq1KZSTbgCqz2aUNXaTA",
      label: "YouTube",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/automatisons.fr/",
      label: "Instagram",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <div className="flex items-center mb-4">
              <img
                src="/logo-automatisation.png"
                alt="Automatisons Agency Logo"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 leading-relaxed">
              {t("footer.description")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h4 className="text-lg font-semibold mb-4">
              {t("footer.navigationTitle")}
            </h4>
            <ul className="space-y-2">
              {[
                { key: "nav.home", href: "/" },
                { key: "nav.solutions", href: "/solutions" },
                { key: "nav.contact", href: "/contact" },
              ].map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h4 className="text-lg font-semibold mb-4">
              {t("footer.followUs")}
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                  aria-label={social.label}
                  target="_blank"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="flex justify-between items-center flex-row border-t border-gray-800 mt-8 pt-8 text-center flex-wrap gap-4">
          <p className="text-gray-400">
            © {currentYear} Automatisons Agency. {t("footer.rights")}
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href={t("footer.legalLink")}
              className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
            >
              {t("footer.legal")}
            </a>
            <a
              href={t("footer.termsLink")}
              className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
            >
              {t("footer.terms")}
            </a>
            <a
              href={t("footer.usageLink")}
              className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
            >
              {t("footer.usage")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
