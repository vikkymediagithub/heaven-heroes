"use client";
import { useState } from "react";
import Image from "next/image";

const GameScreen = () => {
  const [role, setRole] = useState<"child" | "parent" | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-pink-100 to-blue-200 flex flex-col items-center justify-center px-4 py-10 relative overflow-hidden">
      {/* Cloud images in background */}
      <Image
        src="/cloud.png"
        alt="cloud"
        width={100}
        height={60}
        className="absolute top-10 left-5 opacity-50 animate-float"
      />
      <Image
        src="/cloud.png"
        alt="cloud"
        width={120}
        height={70}
        className="absolute top-20 right-10 opacity-50 animate-float-slow"
      />

      {/* Mascot */}
      <div className="mb-4 animate-bounce">
        <Image
          src="/angel.png"
          alt="Angel Mascot"
          width={120}
          height={120}
        />
      </div>

      <h2 className="text-5xl font-extrabold text-purple-800 mb-4 drop-shadow-lg">
        Heaven Heroes Quiz 👼
      </h2>
      <p className="text-xl font-medium text-gray-800 mb-6">
        Who is playing today?
      </p>

      <div className="flex flex-col sm:flex-row gap-6 mb-10">
        <button
          onClick={() => setRole("child")}
          className={`transition-all px-8 py-5 rounded-2xl border-4 text-2xl font-bold w-[260px] ${
            role === "child"
              ? "border-pink-600 bg-pink-200 scale-105 shadow-lg"
              : "border-pink-400 bg-white hover:bg-pink-100"
          }`}
        >
          👧 I'm a Child
        </button>

        <button
          onClick={() => setRole("parent")}
          className={`transition-all px-8 py-5 rounded-2xl border-4 text-2xl font-bold w-[260px] ${
            role === "parent"
              ? "border-blue-600 bg-blue-200 scale-105 shadow-lg"
              : "border-blue-400 bg-white hover:bg-blue-100"
          }`}
        >
          👨 I'm a Parent
        </button>
      </div>

      {role && (
        <button
          onClick={() => alert("Quiz will start now!")}
          className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full text-xl font-bold shadow-xl transition-all"
        >
          🚀 Start Quiz as {role === "child" ? "Child 👧" : "Parent 👨"}
        </button>
      )}
    </div>
  );
};

export default GameScreen;
