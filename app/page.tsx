// "use client";
// import { useState } from "react";
// import LandingPage from "@/components/LandingPage";
// import GameScreen from "@/components/GameScreen";

// export default function Home() {
//   const [startGame, setStartGame] = useState(false);

//   return (
//     <>
//       {startGame ? (
//         <GameScreen />
//       ) : (
//         <LandingPage onStart={() => setStartGame(true)} />
//       )}
//     </>
//   );
// }



// import LandingPage from "@/components/LandingPage";

// export default function Home() {
//   return <LandingPage />;
// }



import IntroVideo from "@/components/IntroVideo";

export default function HomePage() {
  return <IntroVideo />;
}
