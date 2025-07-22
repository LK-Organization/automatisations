import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Wand2, Settings, Brain } from "lucide-react";

// Spring configuration for smooth 3D effect
const springConfig = {
  damping: 30,
  stiffness: 100,
  mass: 1,
};

function TiltCard({ children, className = "", width = "100%", height = "auto", rotateAmplitude = 14 }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);
  const scale = useSpring(1, springConfig);

  const [lastY, setLastY] = useState(0);
  const rotateFigcaption = useSpring(0, { stiffness: 350, damping: 30, mass: 0.5 });

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
      title: "1ʳᵉ automatisation OFFERTE",
      icon: <Wand2 className="w-8 h-8 text-blue-400 mb-4" />,
      description: `Testez-nous gratuitement.

Vous perdez du temps à classer vos e-mails, extraire des infos de factures ou copier-coller des données ?
Nous automatisons l’une de vos tâches simples, gratuitement.
Une preuve concrète qu’avec l’automatisation, on peut vraiment vous faire gagner du temps dès maintenant.`,
    },
    {
      title: "Automatisation sur mesure – Tarif : 500 €/jour",
      icon: <Settings className="w-8 h-8 text-green-400 mb-4" />,
      description: `Vous passez 4 heures par semaine à gérer des tâches répétitives ?
À 20 € de l’heure, cela représente 80 € par semaine, soit plus de 4 000 € par an.

Vous obtenez un retour sur investissement en quelques semaines.`,
    },
    {
      title: "Automatisation Complexe – Sur devis",
      icon: <Brain className="w-8 h-8 text-purple-400 mb-4" />,
      description: `Des besoins plus complexes ? On y répond sur-mesure.
Vous avez un processus spécifique, une tâche sensible ou un enchaînement d’étapes à optimiser ?
Nous concevons une solution personnalisée, adaptée à vos outils, votre équipe et vos priorités.
Automatisation sur-mesure, résultats concrets.`,
    },
  ];

  return (
    <section className="py-20 px-4 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Nos offres d'automatisation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <TiltCard key={idx} className="rounded-2xl h-full" width="100%" height="100%">
              <div className="flex flex-col justify-between h-full relative rounded-2xl p-6 backdrop-blur-md bg-gradient-to-br from-[#1e3a8a]/80 to-[#3830a5] border border-white/10 shadow-xl text-white transition-transform duration-300 overflow-hidden group">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-white/10 blur-xl rotate-45" />
                </div>
                <div>
                  {card.icon}
                  <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                  <p className="whitespace-pre-line text-sm text-white/90">
                    {card.description}
                  </p>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
