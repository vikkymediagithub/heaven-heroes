"use client";
import { useRouter } from "next/navigation";
import { Sparkles } from "lucide-react";

export default function LandingPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-pink-200 flex flex-col items-center text-center px-4 py-10">
      <h1 className="text-5xl font-extrabold text-purple-800 mb-4">
        👼 Heaven's Heroes
      </h1>
      <p className="text-xl max-w-2xl text-purple-700 mb-6">
        Where godly children become heroes of faith! Play, learn, and grow closer to Jesus with every activity.
      </p>

      {/* Hero mascot */}
      <img
        src="/angel.png"
        alt="Mascot"
        className="w-40 md:w-56 mb-8 animate-bounce"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl">
        <button
          onClick={() => router.push("/game")}
          className="bg-purple-600 hover:bg-purple-700 text-white text-lg font-bold py-3 px-6 rounded-full shadow-lg transition"
        >
          🎮 Start Game
        </button>

        <button
          onClick={() => router.push("/verses")}
          className="bg-yellow-500 hover:bg-yellow-600 text-white text-lg font-bold py-3 px-6 rounded-full shadow-lg transition"
        >
          📖 Memory Verses
        </button>

        <button
          onClick={() => router.push("/quiz")}
          className="bg-green-500 hover:bg-green-600 text-white text-lg font-bold py-3 px-6 rounded-full shadow-lg transition"
        >
          🧩 Bible Quiz
        </button>

        <button
          onClick={() => router.push("/scoreboard")}
          className="bg-blue-500 hover:bg-blue-600 text-white text-lg font-bold py-3 px-6 rounded-full shadow-lg transition"
        >
          🏆 Scoreboard
        </button>
      </div>

      <p className="mt-10 text-purple-800 font-semibold flex items-center gap-2">
        <Sparkles className="w-5 h-5" />
        Let the light of Heaven shine through you!
      </p>
    </main>
  );
}

