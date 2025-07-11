import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, CheckCircle } from "lucide-react";
import { useTranslations } from "../i18n";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  lang: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({ lang }) => {
  const t = useTranslations(lang);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    { question: t("faq.q1.question"), answer: t("faq.q1.answer") },
    { question: t("faq.q2.question"), answer: t("faq.q2.answer") },
    { question: t("faq.q3.question"), answer: t("faq.q3.answer") },
    { question: t("faq.q4.question"), answer: t("faq.q4.answer") },
    { question: t("faq.q5.question"), answer: t("faq.q5.answer") },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const renderAnswer = (answer: string) => {
    const lines = answer.split("\n").filter(Boolean);
    const blocks: (string | string[])[] = [];
    let currentList: string[] = [];
    let currentParagraph: string[] = [];

    lines.forEach((line) => {
      const isBullet = line.trim().startsWith("-");
      if (isBullet) {
        if (currentParagraph.length > 0) {
          blocks.push(currentParagraph.join(" "));
          currentParagraph = [];
        }
        currentList.push(line.replace(/^-/, "").trim());
      } else {
        if (currentList.length > 0) {
          blocks.push([...currentList]);
          currentList = [];
        }
        currentParagraph.push(line.trim());
      }
    });

    if (currentParagraph.length > 0) blocks.push(currentParagraph.join(" "));
    if (currentList.length > 0) blocks.push([...currentList]);

    return (
      <div className="space-y-4 mt-2">
        {blocks.map((block, idx) =>
          Array.isArray(block) ? (
            <ul key={idx} className="space-y-2">
              {block.map((item, j) => (
                <li key={j} className="flex items-start gap-2">
                  <CheckCircle
                    size={20}
                    className="text-primary-600 flex-shrink-0 mt-1"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p key={idx}>{block}</p>
          )
        )}
      </div>
    );
  };

  return (
    <section className="pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t("faq.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("faq.subtitle")}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="border border-gray-200 rounded-xl">
                <button
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  className="w-full flex justify-between items-center px-6 py-4 text-left bg-white hover:bg-gray-50 transition focus:outline-none"
                >
                  <span className="font-medium text-gray-900 text-lg">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex-shrink-0"
                  >
                    {isOpen ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </motion.div>
                </button>

                <div
                  className={`px-6 pb-6 bg-gray-50 overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
                    isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {isOpen && renderAnswer(faq.answer)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
