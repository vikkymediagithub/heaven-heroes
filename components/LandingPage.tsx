"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-200 via-yellow-100 to-pink-200 flex flex-col items-center justify-center px-6 py-10 text-center relative overflow-hidden">

      {/* MUSIC PLAYER */}
      <audio ref={audioRef} loop>
        <source src="/joyful.mp3" type="audio/mpeg" />
      </audio>

      {/* MUSIC TOGGLE BUTTON */}
      <button
        onClick={toggleMusic}
        className="absolute top-5 right-5 bg-white p-2 rounded-full shadow-lg hover:bg-yellow-200 transition"
      >
        {isPlaying ? <Volume2 className="text-purple-700" /> : <VolumeX className="text-gray-600" />}
      </button>

      {/* ANIMATED CLOUDS */}
      <motion.img
        src="/cloud.png"
        alt="Cloud"
        className="absolute top-10 left-[-100px] w-32 opacity-70"
        animate={{ x: [0, 500] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      />
      <motion.img
        src="/cloud.png"
        alt="Cloud"
        className="absolute bottom-20 right-[-100px] w-24 opacity-50"
        animate={{ x: [0, -500] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      />

      {/* FLOATING BIBLE */}
      <motion.div
        initial={{ y: -30 }}
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <img src="/bible.png" alt="Bible" className="w-32 mx-auto mb-6" />
      </motion.div>

      {/* MASCOT */}
      <motion.img
        src="/angel.png"
        alt="Angel Mascot"
        className="w-20 absolute bottom-10 left-10"
        initial={{ y: 0 }}
        animate={{ y: [-5, 5, -5] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />

      {/* HEADING */}
      <h1 className="text-5xl font-extrabold text-purple-800 mb-4 drop-shadow">
        Heaven Heroes ✨
      </h1>
      <p className="text-lg text-gray-700 max-w-md mx-auto mb-6">
        A fun, godly game for children and parents to grow in Christ together!
      </p>

      {/* BUTTON */}
      <button  onClick={() => router.push("/game")} className="bg-yellow-400 text-purple-800 font-bold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition">
        Start Game
      </button>
    </main>
  );
}


// "use client";

// import { useRouter } from "next/navigation";

// export default function LandingPage() {
//   const router = useRouter();

//   return (
//     <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 to-purple-200 text-center px-4">
//       <h1 className="text-4xl md:text-6xl font-bold text-purple-800 mb-4">
//         BibleFunZone 🎉
//       </h1>
//       <p className="text-lg md:text-xl text-purple-700 mb-6 max-w-xl">
//         A godly and fun game for children and parents to grow in Christ together!
//       </p>
//       <button
//         onClick={() => router.push("/game")}
//         className="px-6 py-3 bg-purple-700 text-white rounded-full shadow-lg hover:bg-purple-900 transition"
//       >
//         Start Game
//       </button>
//     </main>
//   );
// }
