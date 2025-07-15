import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, CheckCircle } from "lucide-react";
import { useTranslations } from "../i18n";

interface FAQItem {
  question: string;
  answer: string;
}

interface AccordionItemProps {
  item: FAQItem;
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
}

function AccordionItem({
  item,
  isExpanded,
  onToggle,
  index,
}: AccordionItemProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [item.answer]);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 ease-out hover:shadow-md hover:border-gray-200">
      <button
        onClick={onToggle}
        className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex justify-between items-start gap-4 focus:outline-none transition-colors duration-200 hover:bg-gray-50"
        aria-expanded={isExpanded}
        aria-controls={`faq-content-${index}`}
      >
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 leading-tight">
          {item.question}
        </h3>
        <ChevronDown
          color="#2563eb"
          className={`h-5 w-5 text-gray-400 transition-all duration-300 ease-out flex-shrink-0 mt-0.5 ${
            isExpanded ? "rotate-180 text-blue-600" : "hover:text-gray-600"
          }`}
        />
      </button>

      <div
        id={`faq-content-${index}`}
        style={{
          height: isExpanded ? `${contentHeight}px` : "0px",
        }}
        className="transition-all duration-500 ease-out overflow-hidden"
      >
        <div ref={contentRef} className="px-4 sm:px-6 pb-4 sm:pb-6">
          <div className="border-t border-gray-100 pt-4">
            <div className="text-sm sm:text-base text-gray-700 leading-relaxed space-y-2">
              {item.answer.split("\n").map((line, idx) => {
                if (line.trim().startsWith("-")) {
                  return (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-1 text-[#2563eb] flex-shrink-0" />
                      <span>{line.replace(/^- /, "")}</span>
                    </div>
                  );
                } else {
                  return <p key={idx}>{line}</p>;
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface FAQAccordionProps {
  lang?: string;
}

export default function FAQAccordion({ lang = "en" }: FAQAccordionProps) {
  const t = useTranslations(lang);
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    { question: t("faq.q1.question"), answer: t("faq.q1.answer") },
    { question: t("faq.q2.question"), answer: t("faq.q2.answer") },
    { question: t("faq.q3.question"), answer: t("faq.q3.answer") },
    { question: t("faq.q4.question"), answer: t("faq.q4.answer") },
    { question: t("faq.q5.question"), answer: t("faq.q5.answer") },
  ];

  const toggleItem = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <div className="min-h-screen py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl lg:max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight">
            {t("faq.title")}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            {t("faq.subtitle")}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 sm:space-y-4 lg:space-y-6">
          {faqs.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              isExpanded={expandedItem === index}
              onToggle={() => toggleItem(index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
