import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Loader } from "lucide-react";
import { useTranslations } from "../i18n";

interface ContactProps {
  lang: string;
}

const Contact: React.FC<ContactProps> = ({ lang }) => {
  const t = useTranslations(lang);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState({
    visible: false,
    message: "",
    isError: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (response.ok) {
        setPopup({
          visible: true,
          message: t("contact.success"),
          isError: false,
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setPopup({
          visible: true,
          message: t("contact.error") + (result.error || ""),
          isError: true,
        });
      }
    } catch (err) {
      setPopup({
        visible: true,
        message: t("contact.error") + (err as Error).message,
        isError: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const closePopup = () => {
    setPopup({ ...popup, visible: false });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Email Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg relative"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {t("contact.emailFormTitle")}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t("contact.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 transition-colors duration-200"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t("contact.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 transition-colors duration-200"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t("contact.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 transition-colors duration-200 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.05 }}
                whileTap={{ scale: loading ? 1 : 0.95 }}
                className="w-full flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 disabled:opacity-50"
              >
                {loading ? (
                  <Loader size={20} className="animate-spin" />
                ) : (
                  <Send size={20} />
                )}
                {t("contact.send")}
              </motion.button>
            </form>

            {/* Popup Modal */}
            {popup.visible && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white rounded-xl p-6 max-w-sm text-center">
                  <p className="mb-4">{popup.message}</p>
                  <button
                    onClick={closePopup}
                    className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700"
                  >
                    OK
                  </button>
                </div>
              </div>
            )}
          </motion.div>

          {/* Static Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg space-y-6 h-full justify-between flex flex-col">
              <h3 className="text-3xl font-bold text-gray-900 ">
                {t("contact.meetingFormTitle")}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {t("contact.emailLabel")}
                    </div>
                    <div className="text-gray-600">
                      <a href="mailto:contact@Automatisons.fr">
                        contact@Automatisons.fr
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {t("contact.phoneLabel")}
                    </div>
                    <div className="text-gray-600">
                      <a href="tel:+33 6 48 09 15 11">+33 6 48 09 15 11</a>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {t("contact.addressLabel")}
                    </div>
                    <div className="text-gray-600">{t("contact.city")}</div>
                  </div>
                </div>
              </div>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center gap-2"
                href="https://calendly.com/kkulig25/30min"
                target="_blank"
              >
                {t("contact.schedule")}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
