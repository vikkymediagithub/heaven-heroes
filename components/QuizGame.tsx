// components/GameScreen.tsx
"use client";
import { useEffect, useState } from "react";

type Verse = {
  text: string;
  testament: "Old" | "New";
};

const verses: Verse[] = [
  { text: "In the beginning God created the heavens and the earth.", testament: "Old" },
  { text: "For God so loved the world, that he gave his only Son...", testament: "New" },
  { text: "The Lord is my shepherd; I shall not want.", testament: "Old" },
  { text: "I can do all things through Christ who strengthens me.", testament: "New" },
  { text: "Honor your father and your mother.", testament: "Old" },
  { text: "Love your enemies and pray for those who persecute you.", testament: "New" },
  { text: "Trust in the Lord with all your heart.", testament: "Old" },
  { text: "Rejoice in the Lord always; again I will say, Rejoice.", testament: "New" },
];

export default function GameScreen() {
  const [currentVerse, setCurrentVerse] = useState<Verse | null>(null);
  const [score, setScore] = useState({ child: 0, parent: 0 });
  const [playerTurn, setPlayerTurn] = useState<"child" | "parent">("child");
  const [feedback, setFeedback] = useState<string>("");

  // Load a new verse
  const getRandomVerse = () => {
    const random = verses[Math.floor(Math.random() * verses.length)];
    setCurrentVerse(random);
    setFeedback("");
  };

  useEffect(() => {
    getRandomVerse();
  }, []);

  const handleAnswer = (choice: "Old" | "New") => {
    if (!currentVerse) return;

    if (choice === currentVerse.testament) {
      setScore((prev) => ({
        ...prev,
        [playerTurn]: prev[playerTurn] + 1,
      }));
      setFeedback("✅ Correct!");
    } else {
      setFeedback("❌ Oops! That's not right.");
    }

    setTimeout(() => {
      setPlayerTurn((prev) => (prev === "child" ? "parent" : "child"));
      getRandomVerse();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-blue-50 to-pink-100 p-6 flex flex-col items-center justify-center text-center">
      <h2 className="text-4xl font-extrabold text-purple-800 mb-4">Bible Quiz Time ✨</h2>

      <p className="text-xl font-medium mb-2">
        Current Turn: <span className="text-blue-700 font-bold capitalize">{playerTurn}</span>
      </p>

      {currentVerse && (
        <div className="bg-white shadow-xl rounded-xl p-6 max-w-xl w-full mt-6">
          <p className="text-2xl font-semibold text-gray-800 mb-6 italic">"{currentVerse.text}"</p>

          <div className="flex gap-6 justify-center">
            <button
              onClick={() => handleAnswer("Old")}
              className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-6 rounded-full shadow-lg text-xl transition"
            >
              📜 Old Testament
            </button>
            <button
              onClick={() => handleAnswer("New")}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg text-xl transition"
            >
              ✝️ New Testament
            </button>
          </div>

          {feedback && (
            <p className="text-lg mt-4 font-bold text-purple-700">{feedback}</p>
          )}
        </div>
      )}

      <div className="flex gap-10 mt-10 text-xl font-bold">
        <div className="text-pink-600">👧 Child: {score.child}</div>
        <div className="text-blue-700">👨 Parent: {score.parent}</div>
      </div>
    </div>
  );
}
