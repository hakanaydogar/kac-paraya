"use client";

import { useState } from "react";

const questions = [
  {
    text: "500 dolara tanga giyip Galata Köprüsü’nde koşar mısın?",
    category: "Rezillik Testi",
    courage: 85,
    cringe: 95,
    gav: 5,
  },
  {
    text: "Eski flörtünün düğününe gidip çeyrek takar mısın?",
    category: "İlişki Sınırı",
    courage: 55,
    cringe: 70,
    gav: 80,
  },
  {
    text: "Kız arkadaşın Mervelerde ders çalışabilir dese izin verir misin?",
    category: "Gavatlık Ligi",
    courage: 20,
    cringe: 30,
    gav: 90,
  },
  {
    text: "Kalabalık bir kafede ayağa kalkıp 30 saniye şarkı söyler misin?",
    category: "Cesaret Testi",
    courage: 75,
    cringe: 80,
    gav: 0,
  },
  {
    text: "1.000 dolara saçını pembeye boyatır mısın?",
    category: "Kaç Paraya?",
    courage: 65,
    cringe: 60,
    gav: 0,
  },
];

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState<"yes" | "no" | null>(null);
  const [price, setPrice] = useState("");
  const [showResult, setShowResult] = useState(false);

  const question = questions[currentQuestion];

  function nextQuestion() {
    setCurrentQuestion((prev) => (prev + 1) % questions.length);
    setAnswer(null);
    setPrice("");
    setShowResult(false);
  }

  function getProfileName() {
    if (answer === "no") return "Prensip sahibi";
    const numericPrice = Number(price);

    if (!price) return "Kararsız";
    if (numericPrice <= 500) return "Ucuz ama cesur";
    if (numericPrice <= 2000) return "Pazarlıkçı karakter";
    return "Pahalı ama yapılır";
  }

  return (
    <main className="min-h-screen bg-[#0b0b12] text-white flex items-center justify-center p-5">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <p className="text-sm text-purple-300 mb-2">KAÇ PARAYA?</p>
          <h1 className="text-4xl font-black tracking-tight">
            Herkesin bir fiyatı vardır.
          </h1>
          <p className="text-gray-400 mt-3">
            Cevap ver, puanını gör, arkadaşlarına gönder.
          </p>
        </div>

        <div className="bg-white/10 border border-white/10 rounded-3xl p-6 shadow-2xl backdrop-blur">
          <div className="flex justify-between items-center mb-5">
            <span className="bg-purple-500/20 text-purple-200 text-xs px-3 py-1 rounded-full">
              {question.category}
            </span>
            <span className="text-xs text-gray-400">
              Soru {currentQuestion + 1}/{questions.length}
            </span>
          </div>

          <h2 className="text-2xl font-bold leading-snug mb-8">
            {question.text}
          </h2>

          {!answer && (
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setAnswer("yes")}
                className="bg-green-500 hover:bg-green-400 text-black font-bold py-4 rounded-2xl transition"
              >
                Evet
              </button>
              <button
                onClick={() => {
                  setAnswer("no");
                  setShowResult(true);
                }}
                className="bg-red-500 hover:bg-red-400 text-black font-bold py-4 rounded-2xl transition"
              >
                Hayır
              </button>
            </div>
          )}

          {answer === "yes" && !showResult && (
            <div className="space-y-4">
              <p className="text-gray-300">Kaç dolara yaparsın?</p>

              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="number"
                placeholder="Örn: 500"
                className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-purple-400"
              />

              <button
                onClick={() => setShowResult(true)}
                className="w-full bg-purple-500 hover:bg-purple-400 text-white font-bold py-4 rounded-2xl transition"
              >
                Analizimi göster
              </button>
            </div>
          )}

          {showResult && (
            <div className="mt-6 space-y-5">
              <div className="bg-black/30 rounded-2xl p-5">
                <p className="text-gray-400 text-sm mb-1">Profilin</p>
                <p className="text-2xl font-black">{getProfileName()}</p>
              </div>

              <div className="space-y-3">
                <Score label="Cesaret Puanı" value={answer === "yes" ? question.courage : 10} />
                <Score label="Rezillik Toleransı" value={answer === "yes" ? question.cringe : 5} />
                <Score label="Gavatlık Puanı" value={answer === "yes" ? question.gav : 0} />
              </div>

              <div className="bg-purple-500/20 border border-purple-400/20 rounded-2xl p-4">
                <p className="text-sm text-purple-100">
                  {answer === "yes"
                    ? `Sen bunu ${price || "?"} dolara yaparım dedin. Bu sonuç story’ye atılabilir 😂`
                    : "Hayır dedin. Bazı şeyler parayla olmuyormuş 😂"}
                </p>
              </div>

              <button
                onClick={nextQuestion}
                className="w-full bg-white text-black font-bold py-4 rounded-2xl transition hover:bg-gray-200"
              >
                Yeni soru
              </button>
            </div>
          )}
        </div>

        <p className="text-center text-xs text-gray-500 mt-6">
          Demo v1 — Google giriş ve leaderboard sonra eklenecek.
        </p>
      </div>
    </main>
  );
}

function Score({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-300">{label}</span>
        <span className="font-bold">{value}/100</span>
      </div>
      <div className="h-3 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-purple-500 rounded-full"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}