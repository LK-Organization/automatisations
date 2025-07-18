import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Loader, Bot } from "lucide-react";

const steps = [
  "Savez-vous ce qu’est l’automatisation ?",
  "Combien de temps perdez-vous chaque jour sur des tâches répétitives ?",
  "Vous est-il déjà arrivé de vous dire : “Un robot pourrait faire ça à ma place” ?",
  "Quel est votre rôle ?",
  "Avez-vous une idée précise de ce que vous aimeriez automatiser ?",
  "Qu’est-ce qui vous intéresse ?",
];

// Typewriter component safe against undefined
const Typewriter: React.FC<{ text: string }> = ({ text }) => {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      const nextChar = text.charAt(i) || "";
      setDisplayed((prev) => prev + nextChar);
      i += 1;
      if (i >= text.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [text]);
  return (
    <span className="font-mono text-gray-800">
      {displayed}
      <span className="inline-block w-1 h-5 bg-gray-800 animate-blink ml-1" />
    </span>
  );
};

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    knowAutomation: "",
    lostTime: "",
    robotThought: "",
    role: "",
    idea: "",
    ideaDetail: "",
    interests: [] as string[],
    contactWhen: "",
    contactEmail: "",
    contactWhats: "",
  });
  const [loading, setLoading] = useState(false);

  const handleNext = () => setStep((s) => Math.min(s + 1, steps.length));
  const handleBack = () => setStep((s) => Math.max(s - 1, 0));

  const progressPercent = Math.min(
    ((step + 1) / (steps.length + 1)) * 100,
    100
  );

  const toggleInterest = (value: string) => {
    setForm((f) => {
      const arr = f.interests.includes(value)
        ? f.interests.filter((i) => i !== value)
        : [...f.interests, value];
      return { ...f, interests: arr };
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    if (form.contactWhen === "rendezvous") {
      window.open("https://calendly.com/kkulig25/30min", "_blank");
    }
    const payload: any = { ...form };
    if (form.contactWhen !== "day") delete payload.contactEmail;
    if (form.contactWhen !== "now") delete payload.contactWhats;

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      alert("Merci ! Nous vous contacterons bientôt.");
      setForm({
        knowAutomation: "",
        lostTime: "",
        robotThought: "",
        role: "",
        idea: "",
        ideaDetail: "",
        interests: [],
        contactWhen: "",
        contactEmail: "",
        contactWhats: "",
      });
      setStep(0);
    } catch {
      alert("Une erreur est survenue.");
    } finally {
      setLoading(false);
    }
  };

  const currentText =
    step < steps.length
      ? steps[step]
      : "Et maintenant ? Quand souhaitez-vous qu’on vous contacter ?";

  return (
    <section className="max-w-xl mx-auto p-8 rounded-3xl shadow-2xl">
      {/* Progress Bar */}
      <div className="w-full mb-6">
        <div className="w-full bg-gray-300 h-2 rounded-full overflow-hidden">
          <motion.div
            className="h-2 bg-primary-600"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      <motion.div
        key={step}
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        exit={{ opacity: 0, translateY: -20 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header: Bot icon + typewriter text */}
        <div className="flex flex-col gap-5 items-center mb-6">
          <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mr-4">
            <Bot size={24} className="text-white" />
          </div>
          <Typewriter text={currentText} />
        </div>

        {/* Step 1: Automation knowledge */}
        {step === 0 && (
          <div className="space-y-4">
            {[
              { value: "oui", label: "Oui, je connais" },
              {
                value: "pasVraiment",
                label: "Pas vraiment, j’aimerais en savoir plus",
              },
            ].map(({ value, label }) => (
              <label key={value} className="flex items-center gap-3">
                <input
                  type="radio"
                  name="knowAutomation"
                  value={value}
                  checked={form.knowAutomation === value}
                  onChange={(e) =>
                    setForm({ ...form, knowAutomation: e.target.value })
                  }
                  className="form-radio h-4 w-4 text-primary-600 focus:ring-primary-500"
                />
                {label}
              </label>
            ))}
            {form.knowAutomation === "pasVraiment" && (
              <p className="p-4 bg-gray-100 rounded-lg text-gray-600">
                L’automatisation, c’est déléguer vos tâches répétitives à un
                système intelligent pour gagner du temps et de l’efficacité.
              </p>
            )}
          </div>
        )}

        {/* Step 2: Lost Time */}
        {step === 1 && (
          <div className="space-y-4">
            {[
              "Zéro",
              "Jusqu’à 8 h !",
              "J’ai une équipe avec plusieurs collaborateurs, beaucoup plus !",
              "Aucune idée",
            ].map((opt) => (
              <label key={opt} className="flex items-center gap-3">
                <input
                  type="radio"
                  name="lostTime"
                  value={opt}
                  checked={form.lostTime === opt}
                  onChange={(e) =>
                    setForm({ ...form, lostTime: e.target.value })
                  }
                  className="form-radio h-4 w-4 text-primary-600 focus:ring-primary-500"
                />
                {opt}
              </label>
            ))}
            {form.lostTime === "Zéro" && (
              <p className="text-green-600 font-medium">
                Votre temps a de la valeur pour vous, félicitations !
              </p>
            )}
          </div>
        )}

        {/* Step 3: Robot thought */}
        {step === 2 && (
          <div className="space-y-4">
            {[
              "Oui, souvent",
              "Non, jamais",
              "Maintenant que vous le dites… oui !",
            ].map((opt) => (
              <label key={opt} className="flex items-center gap-3">
                <input
                  type="radio"
                  name="robotThought"
                  value={opt}
                  checked={form.robotThought === opt}
                  onChange={(e) =>
                    setForm({ ...form, robotThought: e.target.value })
                  }
                  className="form-radio h-4 w-4 text-primary-600 focus:ring-primary-500"
                />
                {opt}
              </label>
            ))}
          </div>
        )}

        {/* Step 4: Role */}
        {step === 3 && (
          <div className="space-y-4">
            {[
              "Gérant / Entrepreneur",
              "Salarié",
              "Freelance",
              "Étudiant",
              "Autre",
            ].map((opt) => (
              <label key={opt} className="flex items-center gap-3">
                <input
                  type="radio"
                  name="role"
                  value={opt}
                  checked={form.role === opt}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                  className="form-radio h-4 w-4 text-primary-600 focus:ring-primary-500"
                />
                {opt}
              </label>
            ))}
          </div>
        )}

        {/* Step 5: Idea */}
        {step === 4 && (
          <div className="space-y-4">
            <label className="flex items-center gap-3">
              <input
                type="radio"
                name="idea"
                value="oui"
                checked={form.idea === "oui"}
                onChange={(e) => setForm({ ...form, idea: e.target.value })}
                className="form-radio h-4 w-4 text-primary-600 focus:ring-primary-500"
              />
              Oui
              <input
                type="text"
                placeholder="Précisez"
                value={form.ideaDetail}
                onChange={(e) =>
                  setForm({ ...form, ideaDetail: e.target.value })
                }
                disabled={form.idea !== "oui"}
                className="ml-2 px-3 py-2 border rounded-lg w-full disabled:opacity-50"
              />
            </label>
            <label className="flex items-center gap-3">
              <input
                type="radio"
                name="idea"
                value="non"
                checked={form.idea === "non"}
                onChange={(e) =>
                  setForm({ ...form, idea: e.target.value, ideaDetail: "" })
                }
                className="form-radio h-4 w-4 text-primary-600 focus:ring-primary-500"
              />
              Non, j’aimerais des exemples
            </label>
          </div>
        )}

        {/* Step 6: Interests */}
        {step === 5 && (
          <div className="space-y-4">
            {[
              "Synchroniser mes outils (ex : Google Sheets + Gmail + WhatsApp)",
              "Automatiser la prise de rendez-vous",
              "Gagner du temps sur la gestion client (CRM, factures, réponses auto)",
              "Ne pas m’occuper des tâches répétitives (copier-coller, tri, suivi)",
              "Je veux qu’on me guider",
            ].map((opt) => (
              <label key={opt} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  value={opt}
                  checked={form.interests.includes(opt)}
                  onChange={() => toggleInterest(opt)}
                  className="form-checkbox h-4 w-4 text-primary-600 focus:ring-primary-500"
                />
                {opt}
              </label>
            ))}
          </div>
        )}

        {/* Final Step: Contact */}
        {step === steps.length && (
          <div className="space-y-4">
            {[
              { value: "now", label: "Dès maintenant (WhatsApp)" },
              { value: "day", label: "Dans la journée (Mail)" },
              { value: "rendezvous", label: "Je préfère prendre rendez-vous" },
            ].map(({ value, label }) => (
              <label key={value} className="flex items-center gap-3">
                <input
                  type="radio"
                  name="contactWhen"
                  value={value}
                  checked={form.contactWhen === value}
                  onChange={(e) =>
                    setForm({ ...form, contactWhen: e.target.value })
                  }
                  className="form-radio h-4 w-4 text-primary-600 focus:ring-primary-500"
                />
                {label}
              </label>
            ))}
            {form.contactWhen === "day" && (
              <input
                type="email"
                placeholder="Votre email"
                value={form.contactEmail}
                onChange={(e) =>
                  setForm({ ...form, contactEmail: e.target.value })
                }
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              />
            )}
            {form.contactWhen === "now" && (
              <input
                type="tel"
                placeholder="Votre numéro WhatsApp"
                value={form.contactWhats}
                onChange={(e) =>
                  setForm({ ...form, contactWhats: e.target.value })
                }
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              />
            )}
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-8">
          {step > 0 && (
            <button
              onClick={handleBack}
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
            >
              Retour
            </button>
          )}
          {step < steps.length ? (
            <button
              onClick={handleNext}
              disabled={
                (step === 0 && !form.knowAutomation) ||
                (step === 1 && !form.lostTime) ||
                (step === 2 && !form.robotThought) ||
                (step === 3 && !form.role) ||
                (step === 4 && !form.idea) ||
                (step === 5 && form.interests.length === 0)
              }
              className="px-6 py-2 bg-primary-600 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition disabled:opacity-50"
            >
              Suivant
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={
                loading ||
                !form.contactWhen ||
                (form.contactWhen === "day" && !form.contactEmail) ||
                (form.contactWhen === "now" && !form.contactWhats)
              }
              className="flex items-center gap-2 px-6 py-2 bg-primary-600 text-white rounded-lg shadow-lg hover:shadow-xl disabled:opacity-50 transition"
            >
              {loading ? <Loader className="animate-spin" /> : "Envoyer"}
            </button>
          )}
        </div>
      </motion.div>

      {/* Blinking cursor animation */}
      <style>{`
        @keyframes blink {
          0%,100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-start infinite;
        }
      `}</style>
    </section>
  );
};

export default MultiStepForm;
