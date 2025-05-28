// 'use client';

// import React, { useState } from 'react';
// import { verses } from '@/data/verses';

// const TOTAL_ROUNDS = 5;

// const GamePage: React.FC = () => {
//   const [round, setRound] = useState(0);
//   const [currentVerse, setCurrentVerse] = useState(() =>
//     verses[Math.floor(Math.random() * verses.length)]
//   );

//   const [childScore, setChildScore] = useState(0);
//   const [parentScore, setParentScore] = useState(0);

//   const [childChoice, setChildChoice] = useState<string | null>(null);
//   const [parentChoice, setParentChoice] = useState<string | null>(null);

//   const [gameOver, setGameOver] = useState(false);

//   const handleChoice = (player: 'child' | 'parent', choice: string) => {
//     if (player === 'child') setChildChoice(choice);
//     else setParentChoice(choice);
//   };

//   const nextRound = () => {
//     if (childChoice === currentVerse.testament) setChildScore((s) => s + 1);
//     if (parentChoice === currentVerse.testament) setParentScore((s) => s + 1);

//     if (round + 1 === TOTAL_ROUNDS) {
//       setGameOver(true);
//     } else {
//       setRound((r) => r + 1);
//       setCurrentVerse(verses[Math.floor(Math.random() * verses.length)]);
//       setChildChoice(null);
//       setParentChoice(null);
//     }
//   };

//   const winner =
//     childScore > parentScore
//       ? 'child'
//       : parentScore > childScore
//       ? 'parent'
//       : 'draw';

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-pink-100 flex flex-col items-center justify-center px-4 py-8 text-center">
//       <h1 className="text-3xl md:text-5xl font-bold text-pink-700 mb-6">🎮 Bible Game: Kids vs Parents</h1>

//       {gameOver ? (
//         <div className="bg-white p-6 rounded-xl shadow-md text-xl">
//           <p className="mb-4">
//             {winner === 'draw'
//               ? "It's a tie! Well done both! 🎉"
//               : winner === 'child'
//               ? '🎉 Children win! Great job!'
//               : '👏 Parents win! Well played!'}
//           </p>
//           <audio autoPlay controls className="mx-auto mt-4">
//             <source
//               src={
//                 winner === 'child'
//                   ? '/kids-win.mp3'
//                   : winner === 'parent'
//                   ? '/parents-win.mp3'
//                   : '/draw.mp3'
//               }
//               type="audio/mpeg"
//             />
//             Your browser does not support audio.
//           </audio>
//         </div>
//       ) : (
//         <>
//           <div className="bg-white p-6 rounded-xl shadow-lg mb-6 max-w-xl">
//             <p className="text-lg text-gray-700 italic">"{currentVerse.text}"</p>
//           </div>

//           <div className="flex flex-col md:flex-row justify-center gap-8 mb-6">
//             <div>
//               <h2 className="text-xl font-semibold mb-2 text-purple-600">👧 Child</h2>
//               <div className="flex gap-4">
//                 <button
//                   className={`py-2 px-4 rounded-lg ${
//                     childChoice === 'Old'
//                       ? 'bg-blue-500 text-white'
//                       : 'bg-white border border-blue-500 text-blue-500'
//                   }`}
//                   onClick={() => handleChoice('child', 'Old')}
//                 >
//                   Old
//                 </button>
//                 <button
//                   className={`py-2 px-4 rounded-lg ${
//                     childChoice === 'New'
//                       ? 'bg-blue-500 text-white'
//                       : 'bg-white border border-blue-500 text-blue-500'
//                   }`}
//                   onClick={() => handleChoice('child', 'New')}
//                 >
//                   New
//                 </button>
//               </div>
//             </div>

//             <div>
//               <h2 className="text-xl font-semibold mb-2 text-green-600">🧔 Parent</h2>
//               <div className="flex gap-4">
//                 <button
//                   className={`py-2 px-4 rounded-lg ${
//                     parentChoice === 'Old'
//                       ? 'bg-green-500 text-white'
//                       : 'bg-white border border-green-500 text-green-500'
//                   }`}
//                   onClick={() => handleChoice('parent', 'Old')}
//                 >
//                   Old
//                 </button>
//                 <button
//                   className={`py-2 px-4 rounded-lg ${
//                     parentChoice === 'New'
//                       ? 'bg-green-500 text-white'
//                       : 'bg-white border border-green-500 text-green-500'
//                   }`}
//                   onClick={() => handleChoice('parent', 'New')}
//                 >
//                   New
//                 </button>
//               </div>
//             </div>
//           </div>

//           <button
//             disabled={!childChoice || !parentChoice}
//             onClick={nextRound}
//             className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg text-lg shadow disabled:opacity-50"
//           >
//             Next ➡️
//           </button>

//           <p className="mt-4 text-sm text-gray-600">Round {round + 1} of {TOTAL_ROUNDS}</p>
//         </>
//       )}
//     </div>
//   );
// };

// export default GamePage;

// app/game/page.tsx
"use client";
import GameScreen from "@/components/GameScreen";

export default function GamePage() {
  return <GameScreen />;
}

