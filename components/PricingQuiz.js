"use client";

import { useState } from "react";

const questions = [
  {
    key: "q1",
    question: "How often do you think about breathing?",
    options: [
      "Never — I just do it automatically",
      "Occasionally — mostly during yoga",
      "Constantly — I have a breathing journal",
      "I have a personal breathing coach",
    ],
  },
  {
    key: "q2",
    question: "How would you describe your current air situation?",
    options: [
      "Basic — just whatever is outside",
      "Upgrading — I bought a plant once",
      "Premium — I only breathe near mountains",
      "Corporate — my team needs air too",
    ],
  },
  {
    key: "q3",
    question: "How many nostrils do you primarily use?",
    options: [
      "Just the one — I have a system",
      "Both — I'm not a monster",
      "Alternating — for optimal airflow",
      "All of them — I am an enterprise customer",
    ],
  },
];

const planColors = {
  "Casual Breather": "from-sky-400 to-sky-600",
  "Power Inhaler": "from-sky-500 to-violet-500",
  "Enterprise Lung": "from-violet-500 to-violet-700",
};

export default function PricingQuiz({ onRecommend }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  function handleAnswer(key, value) {
    const updated = { ...answers, [key]: value };
    setAnswers(updated);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      submitQuiz(updated);
    }
  }

  async function submitQuiz(finalAnswers) {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers: finalAnswers }),
      });
      const data = await res.json();
      if (data.error) {
        setError(data.error);
      } else {
        setResult(data);
        if (onRecommend) onRecommend(data.plan);
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function reset() {
    setStep(0);
    setAnswers({});
    setResult(null);
    setError("");
    setLoading(false);
    if (onRecommend) onRecommend(null);
  }

  const current = questions[step];

  return (
    <section className="bg-sky-50 py-24 px-6" id="quiz">
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-xs uppercase tracking-widest text-sky-500 font-bold mb-2">
          AI-Powered
        </div>
        <h2 className="font-serif font-black text-4xl md:text-5xl mb-4">Not Sure Which Plan?</h2>
        <p className="text-slate-500 text-lg mb-12">
          Answer 3 questions and our AI will recommend the right Breezy tier for your unique
          breathing personality.
        </p>

        <div className="bg-white rounded-2xl shadow-lg p-10">
          {/* Quiz steps */}
          {!loading && !result && !error && (
            <>
              <div className="flex justify-center gap-2 mb-8">
                {questions.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i <= step ? "bg-sky-500 w-8" : "bg-slate-200 w-4"
                    }`}
                  />
                ))}
              </div>
              <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-3">
                Question {step + 1} of {questions.length}
              </p>
              <h3 className="font-serif font-bold text-2xl mb-8">{current.question}</h3>
              <div className="flex flex-col gap-3">
                {current.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleAnswer(current.key, option)}
                    className="w-full text-left px-6 py-4 rounded-xl border border-slate-200 text-slate-700 text-sm font-medium hover:border-sky-400 hover:bg-sky-50 hover:text-sky-600 transition-all"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Loading */}
          {loading && (
            <div className="py-12 flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-full border-4 border-sky-200 border-t-sky-500 animate-spin" />
              <p className="text-slate-500 text-sm">Consulting our Air Sommeliers...</p>
            </div>
          )}

          {/* Result */}
          {result && !loading && (
            <div className="py-4">
              <div className="text-4xl mb-4">🎉</div>
              <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-2">
                Your Perfect Plan
              </p>
              <h3
                className={`font-serif font-black text-3xl mb-4 bg-gradient-to-br ${planColors[result.plan]} bg-clip-text text-transparent`}
              >
                {result.plan}
              </h3>
              <p className="text-slate-600 text-sm leading-7 mb-8">{result.reason}</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="#pricing"
                  className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:-translate-y-0.5 shadow-lg shadow-sky-500/30 text-sm"
                >
                  See My Plan →
                </a>
                <button
                  onClick={reset}
                  className="bg-white text-slate-600 font-semibold px-8 py-3.5 rounded-full border border-slate-200 hover:border-sky-300 hover:bg-sky-50 transition-all text-sm"
                >
                  Retake Quiz
                </button>
              </div>
            </div>
          )}

          {/* Error */}
          {error && !loading && (
            <div className="py-8">
              <p className="text-slate-500 mb-6">{error}</p>
              <button
                onClick={reset}
                className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3.5 rounded-full transition-all text-sm"
              >
                Try Again
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
