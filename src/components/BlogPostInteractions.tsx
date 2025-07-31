// File: src/components/BlogPostInteractions.jsx
import React, { useState, useEffect } from "react";
import { ArrowUp, Copy, Check, Heart, Bookmark, Share2 } from "lucide-react";

export default function BlogPostInteractions() {
  const [scrollY, setScrollY] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyCode = async () => {
    const snippet = `const fibonacci = (n) => {\n  if (n <= 1) return n;\n  return fibonacci(n - 1) + fibonacci(n - 2);\n};`;
    await navigator.clipboard.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const progress = Math.min(
    (scrollY / (document.body.scrollHeight - window.innerHeight)) * 100,
    100
  );

  return (
    <>
      {/* Progress bar */}
      <div className="fixed inset-x-0 top-0 z-50">
        <div
          className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Copy-snippet for code blocks */}
      <div id="copy-code-button" className="hidden">
        <button
          onClick={handleCopyCode}
          className="flex items-center space-x-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm text-gray-300"
        >
          {copied ? (
            <Check className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
          <span>{copied ? "Copied!" : "Copy"}</span>
        </button>
      </div>
      {/* Scroll to top */}
      {scrollY > 200 && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 z-40"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}
