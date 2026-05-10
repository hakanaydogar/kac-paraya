"use client";

import { useState } from "react";

const questions = [
  {
    text: "500 dolara kalabalık bir meydanda pijamayla koşar mısın?",
    category: "rezillik",
    courage: 75,
    cringe: 80,
    gav: 0,
  },
  {
    text: "1.000 dolara saçını arkadaşlarının seçeceği renge boyatır mısın?",
    category: "cesaret",
    courage: 70,
    cringe: 65,
    gav: 0,
  },
  {
    text: "300 dolara kafede ayağa kalkıp 20 saniye şarkı söyler misin?",
    category: "rezillik",
    courage: 70,
    cringe: 85,
    gav: 0,
  },
  {
    text: "750 dolara Instagram profil fotoğrafını 1 hafta boyunca en kötü fotoğrafın yapar mısın?",
    category: "sosyal_medya",
    courage: 55,
    cringe: 85,
    gav: 0,
  },
  {
    text: "500 dolara eski flörtünün düğününe gidip çeyrek takar mısın?",
    category: "iliski",
    courage: 60,
    cringe: 75,
    gav: 80,
  },
  {
    text: "1.000 dolara eski sevgilinin story’sine yanlışlıkla beğenmiş gibi yorum atar mısın?",
    category: "iliski",
    courage: 65,
    cringe: 90,
    gav: 45,
  },
  {
    text: "2.000 dolara bir gün boyunca dışarıda bornozla gezer misin?",
    category: "rezillik",
    courage: 85,
    cringe: 95,
    gav: 0,
  },
  {
    text: "500 dolara arkadaş grubuna telefonundaki son aramayı ekran görüntüsü olarak atar mısın?",
    category: "sosyal_medya",
    courage: 65,
    cringe: 85,
    gav: 0,
  },
  {
    text: "1.500 dolara sevgilinin eski flörtüyle aynı masada oturup normal davranır mısın?",
    category: "gavatlik",
    courage: 45,
    cringe: 55,
    gav: 85,
  },
  {
    text: "5.000 dolara 1 ay boyunca tuşlu telefon kullanır mısın?",
    category: "para",
    courage: 45,
    cringe: 30,
    gav: 0,
  },
  {
    text: "750 dolara eski sevgilinin annesine bayram mesajı atar mısın?",
    category: "iliski",
    courage: 60,
    cringe: 80,
    gav: 65,
  },
  {
    text: "2.500 dolara düğünde piste çıkıp tek başına halay başı olur musun?",
    category: "rezillik",
    courage: 80,
    cringe: 85,
    gav: 0,
  },
  {
    text: "1.000 dolara telefonundaki son 5 fotoğrafı arkadaş grubuna atar mısın?",
    category: "sosyal_medya",
    courage: 70,
    cringe: 85,
    gav: 0,
  },
  {
    text: "2.000 dolara sevgilin eski sevgilisiyle aynı ortamda oyun oynasa kıskanmaz mısın?",
    category: "gavatlik",
    courage: 45,
    cringe: 60,
    gav: 90,
  },
  {
    text: "300 dolara kafede sipariş verirken garsona rap yapar gibi konuşur musun?",
    category: "rezillik",
    courage: 70,
    cringe: 85,
    gav: 0,
  },
  {
    text: "1.500 dolara eski flörtünün düğününde fotoğrafçıya poz verir misin?",
    category: "iliski",
    courage: 75,
    cringe: 95,
    gav: 70,
  },
  {
    text: "750 dolara arkadaşının senin adına attığı story’yi 24 saat silmeden tutar mısın?",
    category: "sosyal_medya",
    courage: 70,
    cringe: 85,
    gav: 0,
  },
  {
    text: "2.000 dolara sevgilin eski flörtünün olduğu doğum gününe gitmek istese tamam der misin?",
    category: "gavatlik",
    courage: 35,
    cringe: 45,
    gav: 95,
  },
  {
    text: "500 dolara kalabalık bir yerde kendine alkış başlatır mısın?",
    category: "rezillik",
    courage: 85,
    cringe: 95,
    gav: 0,
  },
  {
    text: "3.000 dolara eski sevgilinin düğününde halay çekip video paylaşır mısın?",
    category: "iliski",
    courage: 90,
    cringe: 100,
    gav: 75,
  },
  {
    text: "2.000 dolara bir hafta boyunca sadece arkadaşlarının seçtiği kıyafetleri giyer misin?",
    category: "cesaret",
    courage: 65,
    cringe: 75,
    gav: 0,
  },
  {
    text: "1.000 dolara sevgilin eski flörtünün olduğu grup tatiline katılsa kabul eder misin?",
    category: "gavatlik",
    courage: 35,
    cringe: 45,
    gav: 100,
  },
  {
    text: "5.000 dolara +18 bir iddiada pasif rolü kabul eder misin?",
    category: "plus18",
    courage: 90,
    cringe: 95,
    gav: 60,
  },
  {
    text: "2.000 dolara arkadaş grubunda en son kiminle flörtleştiğini açıklar mısın?",
    category: "plus18",
    courage: 65,
    cringe: 75,
    gav: 20,
  },
  {
    text: "3.000 dolara sevgiline tüm DM geçmişini 5 dakika gösterir misin?",
    category: "plus18",
    courage: 80,
    cringe: 90,
    gav: 30,
  },
  {
    text: "1.500 dolara eski flörtüne ‘seni rüyamda gördüm’ diye mesaj atar mısın?",
    category: "plus18",
    courage: 70,
    cringe: 85,
    gav: 50,
  },
  {
    text: "5.000 dolara bir hafta boyunca arkadaşlarının seçtiği flört tavsiyelerine uyar mısın?",
    category: "plus18",
    courage: 60,
    cringe: 70,
    gav: 40,
  },
  {
    text: "10.000 dolara en yakın arkadaşının seçtiği biriyle kör randevuya çıkar mısın?",
    category: "plus18",
    courage: 65,
    cringe: 60,
    gav: 20,
  },
  {
    text: "2.500 dolara story’ye ‘artık aşka inanıyorum’ yazıp siyah ekran atar mısın?",
    category: "sosyal_medya",
    courage: 45,
    cringe: 75,
    gav: 0,
  },
  {
    text: "1.000 dolara arkadaşlarının önünde eski sevgiline yanlışlıkla arama yapmış gibi yapar mısın?",
    category: "iliski",
    courage: 70,
    cringe: 90,
    gav: 55,
  },
];

export default function Home() {
const [currentQuestion, setCurrentQuestion] = useState(0);
const [usedQuestions, setUsedQuestions] = useState<number[]>([0]);
const [answer, setAnswer] = useState<"yes" | "no" | null>(null);
const [price, setPrice] = useState("");
const [showResult, setShowResult] = useState(false);

  const question = questions[currentQuestion];

function nextQuestion() {
  let availableQuestions = questions
    .map((_, index) => index)
    .filter((index) => !usedQuestions.includes(index));

  if (availableQuestions.length === 0) {
    availableQuestions = questions.map((_, index) => index);
    setUsedQuestions([]);
  }

  const randomIndex =
    availableQuestions[Math.floor(Math.random() * availableQuestions.length)];

  setCurrentQuestion(randomIndex);
  setUsedQuestions((prev) => [...prev, randomIndex]);
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
  onClick={() => {
    setAnswer("yes");
    setPrice("500");
    setShowResult(true);
  }}
  className="bg-green-500 hover:bg-green-400 text-black font-bold py-4 rounded-2xl transition"
>
  Evet
</button>

<button
  onClick={() => {
    setAnswer("no");
  }}
  className="bg-red-500 hover:bg-red-400 text-black font-bold py-4 rounded-2xl transition"
>
  Hayır
</button>
            </div>
          )}

          {answer === "no" && !showResult && (
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
  ? "Verilen parayı kabul ettin. Herkesin bir fiyatı varmış 😂"
  : `500 dolar yetmedi ama sen bunu ${price || "?"} dolara yaparım dedin 😂`}
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