"use client";
import { useState } from "react";
import LandingPage from "./LandingPage";

export default function IntroVideo() {
  const [showLanding, setShowLanding] = useState(false);

  if (showLanding) return <LandingPage />;

  return (
    <div className="relative w-full h-screen bg-black flex items-center justify-center">
      <video
        src="/heavens-heroes-intro.mp4" 
        autoPlay
        muted
        loop
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <button
          onClick={() => setShowLanding(true)}
          className="text-2xl md:text-4xl bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold px-8 py-4 rounded-full shadow-xl transition-all"
        >
          🚀 Enter Heaven’s Heroes
        </button>
      </div>
    </div>
  );
}
