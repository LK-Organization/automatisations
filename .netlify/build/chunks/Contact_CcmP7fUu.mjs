import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader, Send, Mail, Phone, MapPin } from 'lucide-react';
import { u as useTranslations } from './Chatbot_DmgyXsBK.mjs';

const Contact = ({ lang }) => {
  const t = useTranslations(lang);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState({
    visible: false,
    message: "",
    isError: false
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (response.ok) {
        setPopup({
          visible: true,
          message: t("contact.success"),
          isError: false
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setPopup({
          visible: true,
          message: t("contact.error") + (result.error || ""),
          isError: true
        });
      }
    } catch (err) {
      setPopup({
        visible: true,
        message: t("contact.error") + err.message,
        isError: true
      });
    } finally {
      setLoading(false);
    }
  };
  const closePopup = () => {
    setPopup({ ...popup, visible: false });
  };
  return /* @__PURE__ */ jsx("section", { id: "contact", className: "py-20 bg-gray-50 overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        viewport: { once: true },
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-4", children: t("contact.title") }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: t("contact.subtitle") })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -50 },
          whileInView: { opacity: 1, x: 0 },
          transition: { duration: 0.8 },
          viewport: { once: true },
          className: "bg-white rounded-2xl p-8 shadow-lg relative",
          children: [
            /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold text-gray-900 mb-4", children: t("contact.emailFormTitle") }),
            /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(
                  "label",
                  {
                    htmlFor: "name",
                    className: "block text-sm font-medium text-gray-700 mb-2",
                    children: t("contact.name")
                  }
                ),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    id: "name",
                    name: "name",
                    value: formData.name,
                    onChange: handleChange,
                    required: true,
                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 transition-colors duration-200"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(
                  "label",
                  {
                    htmlFor: "email",
                    className: "block text-sm font-medium text-gray-700 mb-2",
                    children: t("contact.email")
                  }
                ),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "email",
                    id: "email",
                    name: "email",
                    value: formData.email,
                    onChange: handleChange,
                    required: true,
                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 transition-colors duration-200"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(
                  "label",
                  {
                    htmlFor: "message",
                    className: "block text-sm font-medium text-gray-700 mb-2",
                    children: t("contact.message")
                  }
                ),
                /* @__PURE__ */ jsx(
                  "textarea",
                  {
                    id: "message",
                    name: "message",
                    rows: 5,
                    value: formData.message,
                    onChange: handleChange,
                    required: true,
                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 transition-colors duration-200 resize-none"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs(
                motion.button,
                {
                  type: "submit",
                  disabled: loading,
                  whileHover: { scale: loading ? 1 : 1.05 },
                  whileTap: { scale: loading ? 1 : 0.95 },
                  className: "w-full flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 disabled:opacity-50",
                  children: [
                    loading ? /* @__PURE__ */ jsx(Loader, { size: 20, className: "animate-spin" }) : /* @__PURE__ */ jsx(Send, { size: 20 }),
                    t("contact.send")
                  ]
                }
              )
            ] }),
            popup.visible && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl p-6 max-w-sm text-center", children: [
              /* @__PURE__ */ jsx("p", { className: "mb-4", children: popup.message }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: closePopup,
                  className: "bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700",
                  children: "OK"
                }
              )
            ] }) })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 50 },
          whileInView: { opacity: 1, x: 0 },
          transition: { duration: 0.8 },
          viewport: { once: true },
          className: "space-y-8",
          children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl p-8 shadow-lg space-y-6 h-full justify-between flex flex-col", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold text-gray-900 ", children: t("contact.meetingFormTitle") }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsx(Mail, { size: 20, className: "text-white" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("div", { className: "font-semibold text-gray-900", children: t("contact.emailLabel") }),
                  /* @__PURE__ */ jsx("div", { className: "text-gray-600", children: /* @__PURE__ */ jsx("a", { href: "mailto:contact@Automatisons.fr", children: "contact@Automatisons.fr" }) })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsx(Phone, { size: 20, className: "text-white" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("div", { className: "font-semibold text-gray-900", children: t("contact.phoneLabel") }),
                  /* @__PURE__ */ jsx("div", { className: "text-gray-600", children: /* @__PURE__ */ jsx("a", { href: "tel:+33 6 48 09 15 11", children: "+33 6 48 09 15 11" }) })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsx(MapPin, { size: 20, className: "text-white" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("div", { className: "font-semibold text-gray-900", children: t("contact.addressLabel") }),
                  /* @__PURE__ */ jsx("div", { className: "text-gray-600", children: t("contact.city") })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              motion.a,
              {
                whileHover: { scale: 1.05 },
                whileTap: { scale: 0.95 },
                className: "w-full bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center gap-2",
                href: "https://calendly.com/kkulig25/30min",
                target: "_blank",
                children: t("contact.schedule")
              }
            )
          ] })
        }
      )
    ] })
  ] }) });
};

export { Contact as C };
