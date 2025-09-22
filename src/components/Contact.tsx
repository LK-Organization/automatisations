import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Loader } from "lucide-react";
import debounce from "lodash/debounce";
import { useTranslations } from "../i18n";

interface ContactProps {
  lang: "fr" | "en";
}

export const Contact: React.FC<ContactProps> = ({ lang }) => {
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
  const hasSubmittedRef = useRef(false);
  const draftSavedRef = useRef(false);
  const formDataRef = useRef(formData);

  // Keep ref updated with current form data
  useEffect(() => {
    formDataRef.current = formData;
  }, [formData]);

  // Load draft from localStorage on component mount
  useEffect(() => {
    const savedDraft = localStorage.getItem("contactFormDraft");
    if (savedDraft) {
      try {
        const draftData = JSON.parse(savedDraft);
        setFormData(draftData);
      } catch (e) {
        console.error("Error parsing saved draft:", e);
      }
    }
  }, []);

  // Save to localStorage with debouncing
  const saveToLocalStorage = useCallback(
    debounce(() => {
      if (hasSubmittedRef.current) return;
      if (
        !formDataRef.current.name &&
        !formDataRef.current.email &&
        !formDataRef.current.message
      )
        return;

      localStorage.setItem(
        "contactFormDraft",
        JSON.stringify(formDataRef.current)
      );
    }, 2000),
    []
  );

  // Save draft to server
  const saveDraftToServer = useCallback(() => {
    if (hasSubmittedRef.current) return;
    if (
      !formDataRef.current.name &&
      !formDataRef.current.email &&
      !formDataRef.current.message
    )
      return;

    const data = { ...formDataRef.current, draft: true };
    const blob = new Blob([JSON.stringify(data)], { type: "application/json" });

    const success = navigator.sendBeacon("/api/save-draft", blob);
    if (success) {
      draftSavedRef.current = true;
      localStorage.removeItem("contactFormDraft");
    } else {
      // Store in localStorage again for retry
      localStorage.setItem("contactFormDraft", JSON.stringify(data));
    }
  }, []);
  useEffect(() => {
    const interval = window.setInterval(() => {
      saveDraftToServer();
    }, 10000); // every 10 seconds

    return () => window.clearInterval(interval);
  }, [saveDraftToServer]);

  // Handle form field changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    saveToLocalStorage();
  };

  // Set up page unload handler
  useEffect(() => {
    const handleBeforeUnload = () => {
      saveToLocalStorage.flush();
      saveDraftToServer();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      saveToLocalStorage.cancel();
    };
  }, [saveToLocalStorage, saveDraftToServer]);

  // Submit form handler
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
        // Clear form and saved draft
        setFormData({ name: "", email: "", message: "" });
        localStorage.removeItem("contactFormDraft");
        hasSubmittedRef.current = true;
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
    <section id="contact" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t("contact.title")}
          </h1>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("contact.emailFormTitle")}
            </h2>

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
            <div className="bg-white rounded-2xl p-8 shadow-lg space-y-6 h-fitjustify-between flex flex-col">
              <h2 className="text-3xl font-bold text-gray-900 ">
                {t("contact.meetingFormTitle")}
              </h2>
              <div className="space-y-7 m-[0]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {t("contact.emailLabel")}
                    </div>
                    <div className="text-gray-600">
                      <a href="mailto:contact@automatisons.fr">
                        contact@automatisons.fr
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href="https://wa.me/33648091511"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="w-12 h-12 bg-[#24d367] rounded-xl flex items-center justify-center">
                      <img width={20} src="/whatsapp.svg" alt="WhatsApp" />
                    </div>{" "}
                  </a>
                  <div>
                    <a
                      href="https://wa.me/33648091511"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="font-semibold text-gray-900">
                        WhatsApp
                      </div>
                      <div className="text-gray-600">+33 6 48 09 15 11</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
