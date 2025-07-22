import React from "react";
import { Wand2, Settings, Brain } from "lucide-react"; // Icônes de Lucide, tu peux en changer

const PricingSection = () => {
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
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative rounded-2xl p-6 backdrop-blur-md bg-gradient-to-br from-[#1e3a8a]/80 to-[#3830a5] border border-white/10 shadow-xl text-white transition-transform duration-300 transform hover:scale-105 group overflow-hidden"
            >
              {/* Reflet au survol */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-white/10 blur-xl rotate-45" />
              </div>
              <div className="flex flex-col items-start">
                {card.icon}
                <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                <p className="whitespace-pre-line text-sm text-white/90">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
