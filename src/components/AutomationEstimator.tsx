import React, { useState } from "react";

export default function AutomationEstimator() {
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [peopleCount, setPeopleCount] = useState(1);
  const [hourlyCost, setHourlyCost] = useState(30);
  const [automationCost, setAutomationCost] = useState(1000);

  const monthlyHoursSaved = hoursPerWeek * peopleCount * 4;
  const yearlyHoursSaved = hoursPerWeek * peopleCount * 52;
  const monthlySavings = monthlyHoursSaved * hourlyCost;
  const yearlySavings = yearlyHoursSaved * hourlyCost;
  const breakEvenMonths =
    monthlySavings > 0 ? (automationCost / monthlySavings).toFixed(1) : "-";

  return (
    <div className="max-w-xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-accent-500 text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-bot"
            >
              <path d="M12 8V4H8"></path>
              <rect width="16" height="12" x="4" y="8" rx="2"></rect>
              <path d="M2 14h2"></path>
              <path d="M20 14h2"></path>
              <path d="M15 13v2"></path>
              <path d="M9 13v2"></path>
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-lg">
              Calculateur d'économies par automatisation
            </h3>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 space-y-6 bg-white">
        <div>
          <label className="block text-sm font-medium mb-2">
            Heures hebdo répétitives ({hoursPerWeek}h)
          </label>
          <input
            type="range"
            min="0"
            max="40"
            step="1"
            value={hoursPerWeek}
            onChange={(e) => setHoursPerWeek(parseFloat(e.target.value) || 0)}
            className="w-full accent-primary-600"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Nombre de personnes
          </label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
            value={peopleCount}
            onChange={(e) => setPeopleCount(parseInt(e.target.value) || 0)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Coût horaire moyen (€)
          </label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
            value={hourlyCost}
            onChange={(e) => setHourlyCost(parseFloat(e.target.value) || 0)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Coût de l’automatisation (€)
          </label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
            value={automationCost}
            onChange={(e) => setAutomationCost(parseFloat(e.target.value) || 0)}
          />
        </div>

        <hr className="my-6" />

        <div className="space-y-3 bg-[#f3f4f6] p-5 text-gray-800 rounded-2xl p-3">
          <div>
            <span className="font-medium">Coût de l’automatisation :</span>{" "}
            {automationCost.toLocaleString()} €
          </div>
          <div>
            <span className="font-medium">Temps économisé :</span>
            <div className="text-sm ml-2">
              - Sur un mois : {monthlyHoursSaved.toLocaleString()} h<br />- Sur
              un an : {yearlyHoursSaved.toLocaleString()} h
            </div>
          </div>
          <div>
            <span className="font-medium">Économie réalisée :</span>
            <div className="text-sm ml-2">
              - Sur un mois : {monthlySavings.toLocaleString()} €<br />- Sur un
              an : {yearlySavings.toLocaleString()} €
            </div>
          </div>
          <div>
            <span className="font-medium">Rentable à partir de :</span>{" "}
            {breakEvenMonths} mois
          </div>
        </div>
      </div>
    </div>
  );
}
