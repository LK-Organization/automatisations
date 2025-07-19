import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Loader, Bot } from "lucide-react";

const steps = [
  "Savez-vous ce qu’est l’automatisation ?",
  "Quand vous travaillez sur ordinateur ou portable, combien de temps perdez-vous chaque jour sur des tâches répétitives ?",
  "Vous est-il déjà arrivé de vous dire : “Un robot pourrait faire ça à ma place” ?",
  "Quel est votre rôle ?",
  "Avez-vous une idée précise de ce que vous aimeriez automatiser ?",
  "Qu’est-ce qui vous intéresse ?",
];

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
    }, 35);
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
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);
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

  const progress = Math.min(((step + 1) / (steps.length + 1)) * 100, 100);

  const goNext = () => setStep((s) => Math.min(s + 1, steps.length));
  const goBack = () => status === "idle" && setStep((s) => Math.max(s - 1, 0));

  const select = (key: keyof typeof form, val: string, needsDetail = false) => {
    setForm((f) => ({ ...f, [key]: val }));
    if (!needsDetail) goNext();
  };

  const toggleInterest = (v: string) =>
    setForm((f) => {
      const arr = f.interests.includes(v)
        ? f.interests.filter((i) => i !== v)
        : [...f.interests, v];
      return { ...f, interests: arr };
    });

  const handleSubmit = async () => {
    setLoading(true);
    setStatus("idle");
    if (form.contactWhen === "rendezvous")
      window.open("https://calendly.com/kkulig25/30min", "_blank");
    const payload = { ...form };
    if (payload.contactWhen !== "day") delete payload.contactEmail;
    if (payload.contactWhen !== "now") delete payload.contactWhats;
    try {
      const res = await fetch("/api/multistep-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const text =
    step < steps.length
      ? steps[step]
      : "📅 Quand souhaitez-vous qu’on vous contacte ?";

  if (status === "success") {
    return (
      <section className="max-w-xl mx-auto p-8 bg-green-50 rounded-3xl shadow-2xl text-center">
        <Bot size={48} className="text-green-600 mx-auto" />
        <h2 className="text-2xl font-bold text-green-800">Merci !</h2>
        <p className="text-gray-700">Votre formulaire a bien été envoyé.</p>
      </section>
    );
  }

  if (status === "error") {
    return (
      <section className="max-w-xl mx-auto p-8 bg-red-50 rounded-3xl shadow-2xl text-center">
        <Bot size={48} className="text-red-600 mx-auto" />
        <h2 className="text-2xl font-bold text-red-800">Oups…</h2>
        <p className="text-gray-700">Erreur d’envoi. Réessayez.</p>
        <button
          onClick={() => {
            setStatus("idle");
            setStep(steps.length);
          }}
          className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Réessayer
        </button>
      </section>
    );
  }

  return (
    <section className="max-w-xl mx-auto p-8 rounded-3xl shadow-2xl">
      <div className="mb-6">
        <div className="bg-gray-300 h-2 rounded-full">
          <motion.div
            className="h-2 bg-primary-600"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
      <motion.div
        key={step}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col items-center mb-6 gap-3">
          <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
            <Bot size={24} className="text-white" />
          </div>
          <Typewriter text={text} />
        </div>

        {/* ETAPE 1 */}
        {step === 0 && (
          <div className="space-y-4">
            <label className="flex items-center gap-3">
              <input
                type="radio"
                className="form-radio"
                checked={form.knowAutomation === "oui"}
                onChange={() => select("knowAutomation", "oui")}
              />{" "}
              Oui, je connais
            </label>
            <label className="flex items-center gap-3">
              <input
                type="radio"
                className="form-radio"
                checked={form.knowAutomation === "pasVraiment"}
                onChange={() => select("knowAutomation", "pasVraiment", true)}
              />{" "}
              Pas vraiment, j’aimerais en savoir plus
            </label>
            {form.knowAutomation === "pasVraiment" && (
              <p className="p-4 bg-gray-100 rounded-lg text-gray-600">
                L’automatisation, c’est déléguer vos tâches répétitives à un
                système intelligent (ou à un robot) pour gagner du temps et de
                l’efficacité.
              </p>
            )}
          </div>
        )}

        {/* ETAPE 2 */}
        {step === 1 && (
          <div className="space-y-4">
            {[
              {
                v: "Zéro",
                detail: true,
                msg: "Votre temps à de la valeur pour vous, félicitation !",
              },
              { v: "Jusqu’à 8h !", detail: false },
              {
                v: "J’ai une équipe avec plusieurs collaborateurs, beaucoup plus !",
                detail: false,
              },
              { v: "Aucune idée, mais sûrement trop", detail: false },
            ].map((opt) => (
              <div key={opt.v}>
                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    className="form-radio"
                    checked={form.lostTime === opt.v}
                    onChange={() => select("lostTime", opt.v, opt.detail)}
                  />{" "}
                  {opt.v}
                </label>
                {form.lostTime === opt.v && opt.detail && (
                  <p className="text-green-600 font-medium">{opt.msg}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ETAPE 3 */}
        {step === 2 && (
          <div className="space-y-4">
            {[
              "Oui, souvent",
              "Non, jamais",
              "Maintenant que vous le dites… oui !",
            ].map((o) => (
              <label key={o} className="flex items-center gap-3">
                <input
                  type="radio"
                  className="form-radio"
                  checked={form.robotThought === o}
                  onChange={() => select("robotThought", o)}
                />{" "}
                {o}
              </label>
            ))}
          </div>
        )}

        {/* ETAPE 4 */}
        {step === 3 && (
          <div className="space-y-4">
            {[
              "Gérant / Entrepreneur",
              "Salarié",
              "Freelance",
              "Étudiant",
              "Autre",
            ].map((o) => (
              <label key={o} className="flex items-center gap-3">
                <input
                  type="radio"
                  className="form-radio"
                  checked={form.role === o}
                  onChange={() => select("role", o)}
                />{" "}
                {o}
              </label>
            ))}
          </div>
        )}

        {/* ETAPE 5 */}
        {step === 4 && (
          <div className="space-y-4">
            <label className="flex items-center gap-3 w-full">
              <input
                type="radio"
                className="form-radio"
                checked={form.idea === "oui"}
                onChange={() => select("idea", "oui", true)}
              />{" "}
              Oui
              <input
                type="text"
                placeholder="Précisez"
                className="ml-2 px-3 py-2 border rounded-lg w-full"
                value={form.ideaDetail}
                onChange={(e) =>
                  setForm((f) => ({
                    ...f,
                    idea: "oui",
                    ideaDetail: e.target.value,
                  }))
                }
                onFocus={() => setForm((f) => ({ ...f, idea: "oui" }))}
              />
            </label>
            <label className="flex items-center gap-3">
              <input
                type="radio"
                className="form-radio"
                checked={form.idea === "non"}
                onChange={() => select("idea", "non")}
              />{" "}
              Non, j’aimerais des exemples
            </label>
          </div>
        )}

        {/* ETAPE 6 */}
        {step === 5 && (
          <div className="space-y-4">
            {[
              "Synchroniser mes outils (ex : Google Sheets + Gmail + WhatsApp)",
              "Automatiser la prise de rendez-vous",
              "Gagner du temps sur la gestion client (CRM, factures, réponses auto...)",
              "Ne pas m’occuper des tâches répétitives (copier-coller, tri, suivi...)",
              "Je veux qu’on me guide",
            ].map((o) => (
              <label key={o} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  checked={form.interests.includes(o)}
                  onChange={() => toggleInterest(o)}
                />{" "}
                {o}
              </label>
            ))}
          </div>
        )}

        {/* DERNIÈRE ÉTAPE */}
        {step === steps.length && (
          <div className="space-y-4">
            {[
              { v: "now", l: "Dès maintenant (WhatsApp)" },
              { v: "day", l: "Dans la journée (Mail)" },
              { v: "rendezvous", l: "Je préfère prendre rendez-vous" },
            ].map((o) => (
              <label key={o.v} className="flex items-center gap-3">
                <input
                  type="radio"
                  className="form-radio"
                  checked={form.contactWhen === o.v}
                  onChange={() => select("contactWhen", o.v)}
                />{" "}
                {o.l}
              </label>
            ))}
            {form.contactWhen === "day" && (
              <input
                type="email"
                placeholder="Votre email"
                className="mt-2 w-full px-4 py-3 border rounded-lg"
                value={form.contactEmail}
                onChange={(e) =>
                  setForm((f) => ({ ...f, contactEmail: e.target.value }))
                }
              />
            )}
            {form.contactWhen === "now" && (
              <input
                type="tel"
                placeholder="Votre WhatsApp"
                className="mt-2 w-full px-4 py-3 border rounded-lg"
                value={form.contactWhats}
                onChange={(e) =>
                  setForm((f) => ({ ...f, contactWhats: e.target.value }))
                }
              />
            )}
          </div>
        )}

        <div className="flex justify-between items-center mt-8">
          {step > 0 && (
            <button
              onClick={goBack}
              className="px-4 py-2 bg-gray-200 rounded-lg"
            >
              Retour
            </button>
          )}
          {step < steps.length ? (
            <button
              onClick={goNext}
              disabled={
                (step === 0 && !form.knowAutomation) ||
                (step === 1 && !form.lostTime) ||
                (step === 2 && !form.robotThought) ||
                (step === 3 && !form.role) ||
                (step === 4 && !form.idea) ||
                (step === 5 && form.interests.length === 0)
              }
              className="px-6 py-2 bg-primary-600 text-white rounded-lg"
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
              className="px-6 py-2 bg-primary-600 text-white rounded-lg flex items-center gap-2"
            >
              {loading ? <Loader className="animate-spin" /> : "Envoyer"}
            </button>
          )}
        </div>
      </motion.div>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1 } 50% { opacity: 0 } }
        .animate-blink { animation: blink 1s step-start infinite; }
      `}</style>
    </section>
  );
};

export default MultiStepForm;
