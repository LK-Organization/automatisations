// src/components/ScrollStack.tsx
import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

interface ScrollStackProps {
  children: React.ReactNode;
  className?: string;
}

export const ScrollStackItem: React.FC<{
  children: React.ReactNode;
  itemClassName?: string;
}> = ({ children, itemClassName }) => {
  return (
    <section
      className={`min-h-screen w-full flex items-center justify-center ${itemClassName}`}
    >
      {children}
    </section>
  );
};

const ScrollStack: React.FC<ScrollStackProps> = ({ children, className }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (!scrollContainerRef.current) return;

    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      wrapper: scrollContainerRef.current,
      content: scrollContainerRef.current,
    });

    lenisRef.current = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className={`w-full overflow-hidden ${className}`}
      style={{ height: "100vh" }}
    >
      <div>{children}</div>
    </div>
  );
};

export default ScrollStack;
