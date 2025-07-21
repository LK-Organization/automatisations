// src/components/MultiStepForm.tsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Loader, Bot } from "lucide-react";
import { useTranslations } from "../i18n";

interface MultiStepFormProps {
  lang: string;
}

const stepsKeys = [
  "multistep.step1.question",
  "multistep.step2.question",
  "multistep.step3.question",
  "multistep.step4.question",
  "multistep.step5.question",
  "multistep.step6.question",
];
const finalQuestionKey = "multistep.final.question";

const Typewriter: React.FC<{ text: string }> = ({ text }) => {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const iv = setInterval(() => {
      setDisplayed((d) => d + (text.charAt(i) || ""));
      i++;
      if (i >= text.length) clearInterval(iv);
    }, 35);
    return () => clearInterval(iv);
  }, [text]);
  return (
    <span className="font-mono text-gray-800">
      {displayed}
      <span className="inline-block w-1 h-5 bg-gray-800 animate-blink ml-1" />
    </span>
  );
};

const MultiStepForm: React.FC<MultiStepFormProps> = ({ lang }) => {
  const t = useTranslations(lang);
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

  const progress = Math.min(((step + 1) / (stepsKeys.length + 1)) * 100, 100);
  const goNext = () => setStep((s) => Math.min(s + 1, stepsKeys.length));
  const goBack = () => status === "idle" && setStep((s) => Math.max(s - 1, 0));

  const select = (key: keyof typeof form, val: string, needsDetail = false) => {
    setForm((f) => ({ ...f, [key]: val }));
    if (!needsDetail) goNext();
  };
  const toggleInterest = (v: string) =>
    setForm((f) => ({
      ...f,
      interests: f.interests.includes(v)
        ? f.interests.filter((i) => i !== v)
        : [...f.interests, v],
    }));

  const handleSubmit = async () => {
    setLoading(true);
    setStatus("idle");
    const payload = { ...form, lang };
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
      if (form.contactWhen === "now") {
        window.open("https://wa.me/33648091511", "_blank");
      } else if (form.contactWhen === "rendezvous") {
        window.open("https://calendly.com/kkulig25/30min", "_blank");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const questionText =
    step < stepsKeys.length
      ? t(stepsKeys[step])
      : t(finalQuestionKey) +
        (form.contactWhen === "now"
          ? ` (${t("multistep.final.channel.whatsapp")})`
          : form.contactWhen === "day"
            ? ` (${t("multistep.final.channel.email")})`
            : "");

  if (status === "success") {
    return (
      <section className="max-w-xl mx-auto p-8 bg-green-50 rounded-3xl shadow-2xl text-center">
        <Bot size={48} className="text-green-600 mx-auto" />
        <h2 className="text-2xl font-bold text-green-800">
          {t("multistep.success.title")}
        </h2>
        <p className="text-gray-700">{t("multistep.success.message")}</p>
      </section>
    );
  }

  if (status === "error") {
    return (
      <section className="max-w-xl mx-auto p-8 bg-red-50 rounded-3xl shadow-2xl text-center">
        <Bot size={48} className="text-red-600 mx-auto" />
        <h2 className="text-2xl font-bold text-red-800">
          {t("multistep.error.title")}
        </h2>
        <p className="text-gray-700">{t("multistep.error.message")}</p>
        <button
          onClick={() => {
            setStatus("idle");
            setStep(stepsKeys.length);
          }}
          className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          {t("form.labels.retry")}
        </button>
      </section>
    );
  }

  return (
    <section className="max-w-xl mx-auto my-20 p-8 rounded-3xl shadow-2xl">
      <div className="my-6">
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
          <Typewriter text={questionText} />
        </div>

        {/* STEP 0 */}
        {step === 0 && (
          <div className="space-y-4">
            <label className="flex items-center gap-3">
              <input
                type="radio"
                className="form-radio"
                checked={form.knowAutomation === "oui"}
                onChange={() => select("knowAutomation", "oui")}
              />
              {t("multistep.step1.option.known")}
            </label>
            <label className="flex items-center gap-3">
              <input
                type="radio"
                className="form-radio"
                checked={form.knowAutomation === "pasVraiment"}
                onChange={() => select("knowAutomation", "pasVraiment", true)}
              />
              {t("multistep.step1.option.learn")}
            </label>
            {form.knowAutomation === "pasVraiment" && (
              <p className="p-4 bg-gray-100 rounded-lg text-gray-600">
                {t("multistep.step1.info")}
              </p>
            )}
          </div>
        )}

        {/* STEP 1 */}
        {step === 1 && (
          <div className="space-y-4">
            {[
              {
                v: "Zéro",
                key: "multistep.step2.option.zero",
                detail: true,
                infoKey: "multistep.step2.info",
              },
              {
                v: "Jusqu’à 8h !",
                key: "multistep.step2.option.few",
                detail: false,
              },
              {
                v: "J’ai une équipe avec plusieurs collaborateurs, beaucoup plus !",
                key: "multistep.step2.option.team",
                detail: false,
              },
              {
                v: "Aucune idée, mais sûrement trop",
                key: "multistep.step2.option.notsure",
                detail: false,
              },
            ].map((opt) => (
              <div key={opt.key}>
                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    className="form-radio"
                    checked={form.lostTime === opt.v}
                    onChange={() => select("lostTime", opt.v, opt.detail)}
                  />
                  {t(opt.key)}
                </label>
                {opt.detail && form.lostTime === opt.v && (
                  <p className="text-green-600 font-medium">
                    {t(opt.infoKey!)}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="space-y-4">
            {[
              { key: "multistep.step3.option.often", v: "Oui, souvent" },
              { key: "multistep.step3.option.never", v: "Non, jamais" },
              {
                key: "multistep.step3.option.now",
                v: "Maintenant que vous le dites… oui !",
              },
            ].map((o) => (
              <label key={o.key} className="flex items-center gap-3">
                <input
                  type="radio"
                  className="form-radio"
                  checked={form.robotThought === o.v}
                  onChange={() => select("robotThought", o.v)}
                />
                {t(o.key)}
              </label>
            ))}
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="space-y-4">
            {[
              {
                key: "multistep.step4.option.owner",
                v: "Gérant / Entrepreneur",
              },
              { key: "multistep.step4.option.employee", v: "Salarié" },
              { key: "multistep.step4.option.freelance", v: "Freelance" },
              { key: "multistep.step4.option.student", v: "Étudiant" },
              { key: "multistep.step4.option.other", v: "Autre" },
            ].map((o) => (
              <label key={o.key} className="flex items-center gap-3">
                <input
                  type="radio"
                  className="form-radio"
                  checked={form.role === o.v}
                  onChange={() => select("role", o.v)}
                />
                {t(o.key)}
              </label>
            ))}
          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <div className="space-y-4">
            <label className="flex items-center gap-3 w-full">
              <input
                type="radio"
                className="form-radio"
                checked={form.idea === "oui"}
                onChange={() => select("idea", "oui", true)}
              />
              {t("multistep.step5.option.yes")}
              <input
                type="text"
                placeholder={t("form.labels.optional")}
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
              />
              {t("multistep.step5.option.no")}
            </label>
          </div>
        )}

        {/* STEP 5 */}
        {step === 5 && (
          <div className="space-y-4">
            {[
              { key: "multistep.step6.option.sync", v: "sync" },
              { key: "multistep.step6.option.appointments", v: "appointments" },
              { key: "multistep.step6.option.crm", v: "crm" },
              { key: "multistep.step6.option.repetitive", v: "repetitive" },
              { key: "multistep.step6.option.guide", v: "guide" },
            ].map((o) => (
              <label key={o.key} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  checked={form.interests.includes(o.v)}
                  onChange={() => toggleInterest(o.v)}
                />
                {t(o.key)}
              </label>
            ))}
          </div>
        )}

        {/* FINAL STEP */}
        {step === stepsKeys.length && (
          <div className="space-y-4">
            {[
              { v: "now", labelKey: "multistep.final.option.now" },
              { v: "day", labelKey: "multistep.final.option.today" },
              { v: "rendezvous", labelKey: "multistep.final.option.schedule" },
            ].map((o) => (
              <label key={o.v} className="flex items-center gap-3">
                <input
                  type="radio"
                  className="form-radio"
                  checked={form.contactWhen === o.v}
                  onChange={() => select("contactWhen", o.v)}
                />
                {t(o.labelKey)}{" "}
              </label>
            ))}

            {form.contactWhen === "day" && (
              <input
                type="email"
                placeholder={t("multistep.final.channel.email")}
                className="mt-2 w-full px-4 py-3 border rounded-lg"
                value={form.contactEmail}
                onChange={(e) =>
                  setForm((f) => ({ ...f, contactEmail: e.target.value }))
                }
              />
            )}
          </div>
        )}

        {/* NAV */}
        <div className="flex justify-between items-center mt-8">
          {step > 0 && (
            <button
              onClick={goBack}
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              {t("form.labels.back")}
            </button>
          )}
          {step < stepsKeys.length ? (
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
              className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50"
            >
              {t("form.labels.next")}
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={
                loading ||
                !form.contactWhen ||
                (form.contactWhen === "day" && !form.contactEmail)
              }
              className={`px-6 py-2 text-white rounded-lg flex items-center gap-2 disabled:opacity-50 ${
                form.contactWhen === "now"
                  ? "bg-[#24d367] hover:bg-green-700"
                  : form.contactWhen === "rendezvous"
                    ? "bg-[#016bfe] hover:bg-blue-700"
                    : "bg-primary-600 hover:bg-primary-700"
              }`}
            >
              {loading ? (
                <Loader className="animate-spin" />
              ) : (
                <>
                  {form.contactWhen === "now" && (
                    <img
                      src="/whatsapp.svg"
                      alt="WhatsApp"
                      className="w-5 h-5"
                    />
                  )}
                  {form.contactWhen === "rendezvous" && (
                    <img
                      src="/calendly.webp"
                      alt="Calendly"
                      className="w-5 h-5"
                    />
                  )}
                  <span>
                    {form.contactWhen === "now"
                      ? t("form.labels.contact")
                      : form.contactWhen === "rendezvous"
                        ? t("form.labels.meeting")
                        : t("form.labels.send")}
                  </span>
                </>
              )}
            </button>
          )}
        </div>
      </motion.div>

      <style>{`
        @keyframes blink { 0%,100% {opacity:1;} 50% {opacity:0;} }
        .animate-blink { animation: blink 1s step-start infinite; }
      `}</style>
    </section>
  );
};

export default MultiStepForm;
