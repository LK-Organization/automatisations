import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Wand2, Settings, Brain, CheckCircle } from "lucide-react";

// Spring configuration for smooth 3D effect
const springConfig = {
  damping: 30,
  stiffness: 100,
  mass: 1,
};

function TiltCard({
  children,
  className = "",
  width = "100%",
  height = "auto",
  rotateAmplitude = 14,
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);
  const scale = useSpring(1, springConfig);

  const [lastY, setLastY] = useState(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 0.5,
  });

  function handleMouseMove(e) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    const rotY = (offsetX / (rect.width / 2)) * rotateAmplitude;
    const rotX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    rotateX.set(rotX);
    rotateY.set(rotY);
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
    const velY = offsetY - lastY;
    rotateFigcaption.set(-velY * 0.5);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(1.05);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
    rotateFigcaption.set(0);
  }

  return (
    <figure
      ref={ref}
      className={`relative w-full h-full [perspective:800px] ${className}`}
      style={{ width, height }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative [transform-style:preserve-3d] h-full"
        style={{ rotateX, rotateY, scale }}
      >
        {children}
      </motion.div>
    </figure>
  );
}

export default function PricingSection() {
  const cards = [
    {
      title: "Custom automation development",
      price: "From €400/day",
      icon: <Settings className="w-8 h-8 text-green-400 mb-4" />,
      background: "bg-gradient-to-r from-blue-500 to-blue-600",
      checkbox: "blue-600",
      list: [
        "Satisfaction guaranteed or your money back",
        "Payment after 15 days of use, only if satisfied.",
      ],
    },
    {
      title: "Not sure yet?",
      price: "€0",
      addText: "Try us for free",
      icon: <Wand2 className="w-8 h-8 text-blue-400 mb-4" />,
      description: `There are only 2 winning outcomes: `,
      checkbox: "green-500",
      list: ["It works, you save money.", "It doesn’t work, you pay nothing."],
      background: "bg-gradient-to-r from-green-500 to-green-600",
    },
  ];

  return (
    <section className="py-20  bg-[#ffffff]">
      {/*
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Nos tarifs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <TiltCard
              key={idx}
              className="rounded-2xl h-full"
              width="100%"
              height="100%"
            >
              <div className="flex flex-col justify-between h-full relative rounded-2xl p-6 backdrop-blur-md bg-gradient-to-br from-[#1e3a8a]/80 to-[#3830a5] border border-white/10 shadow-xl text-white transition-transform duration-300 overflow-hidden group">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-white/10 blur-xl rotate-45" />
                </div>
                <div>
                  {card.icon}
                  <h3 className="text-2xl font-semibold mb-3">{card.title}</h3>

                  <p className="text-xl font-semibold mb-3">{card.price}</p>
                  <p className="whitespace-pre-line text-md text-white/90">
                    {card.description}
                  </p>
                  <ul className="mt-4 text-md">
                    {card.list?.map((item, idx) => (
                      <li
                        key={idx}
                        className="mb-2 whitespace-pre-line text-md text-white/90"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>*/}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Nos tarifs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <TiltCard
              key={idx}
              className="rounded-2xl h-full"
              width="100%"
              height="100%"
            >
              <div
                key={idx}
                className="flex flex-col justify-between h-full shadow-xl rounded-2xl"
              >
                <div className={`${card.background} p-6 rounded-2xl`}>
                  <h3 className="text-2xl text-center text-white font-semibold mb-3">
                    {card.title}
                  </h3>

                  <p className="text-4xl font-semibold  text-center text-white">
                    {card.price}
                  </p>
                  <p className="text-2xl text-center text-white/90 font-semibold ">
                    {card.addText}
                  </p>
                </div>
                <div className="p-6 flex flex-col justify-center h-full">
                  <p className="whitespace-pre-line text-md ">
                    {card.description}
                  </p>
                  <ul className="mt-4 text-md">
                    {card.list?.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 mb-2 whitespace-pre-line text-md "
                      >
                        <CheckCircle
                          size={20}
                          className={`text-${card.checkbox} flex-shrink-0`}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
