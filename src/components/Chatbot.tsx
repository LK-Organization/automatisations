// src/components/Chatbot.tsx
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Minimize2,
  Maximize2,
} from "lucide-react";
import { useTranslations } from "../i18n";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatbotProps {
  lang: keyof typeof import("../i18n").ui;
}

const Chatbot: React.FC<ChatbotProps> = ({ lang }) => {
  const t = useTranslations(lang);
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: t("chatbot.welcome"),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  const knowledgeBase = t("chatbot.knowledge") as Record<string, any>;

  const findBestResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    for (const key in knowledgeBase) {
      if (
        knowledgeBase[key].keywords.some((kw: string) => message.includes(kw))
      ) {
        return knowledgeBase[key].response;
      }
    }
    if (["bonjour", "salut", "hello"].some((kw) => message.includes(kw))) {
      return t("chatbot.greeting");
    }
    if (["merci", "thank you"].some((kw) => message.includes(kw))) {
      return t("chatbot.thanks");
    }
    if (["contact", "rendez-vous", "rdv"].some((kw) => message.includes(kw))) {
      return t("chatbot.contact");
    }
    return t("chatbot.default");
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);
    setTimeout(
      () => {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: findBestResponse(inputValue),
          isBot: true,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botResponse]);
        setIsTyping(false);
      },
      1000 + Math.random() * 1000
    );
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString(lang === "en" ? "en-US" : "fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 bg-gradient-to-r from-primary-600 to-accent-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${isOpen ? "hidden" : "block"}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2 }}
      >
        <MessageCircle size={24} />
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-xs font-bold">!</span>
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              height: isMinimized ? "60px" : "600px",
            }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-6 right-6 z-50 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
            style={{ width: "400px", maxWidth: "90vw" }}
          >
            <div className="bg-gradient-to-r from-primary-600 to-accent-500 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">{t("chatbot.title")}</h3>
                  <p className="text-xs opacity-90">{t("chatbot.subtitle")}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                >
                  {isMinimized ? (
                    <Maximize2 size={16} />
                  ) : (
                    <Minimize2 size={16} />
                  )}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                <div className="h-96 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                    >
                      <div
                        className={`flex items-start gap-2 max-w-[80%] ${message.isBot ? "flex-row" : "flex-row-reverse"}`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.isBot ? "bg-gradient-to-r from-primary-600 to-accent-500 text-white" : "bg-gray-200 text-gray-600"}`}
                        >
                          {message.isBot ? (
                            <Bot size={16} />
                          ) : (
                            <User size={16} />
                          )}
                        </div>
                        <div
                          className={`rounded-2xl p-3 ${message.isBot ? "bg-gray-100 text-gray-800" : "bg-gradient-to-r from-primary-600 to-accent-500 text-white"}`}
                        >
                          <p className="text-sm whitespace-pre-line">
                            {message.text}
                          </p>
                          <p
                            className={`text-xs mt-1 opacity-70 ${message.isBot ? "text-gray-500" : "text-white/70"}`}
                          >
                            {formatTime(message.timestamp)}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="flex items-start gap-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full flex items-center justify-center">
                          <Bot size={16} className="text-white" />
                        </div>
                        <div className="bg-gray-100 rounded-2xl p-3">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.1s" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                <div className="p-4 border-t border-gray-200">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder={t("chatbot.input")}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      disabled={isTyping}
                    />
                    <motion.button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim() || isTyping}
                      className="bg-gradient-to-r from-primary-600 to-accent-500 text-white p-2 rounded-full hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Send size={16} />
                    </motion.button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
