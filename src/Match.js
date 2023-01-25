import { useState } from "react";

export default function Match({ matchID, setIdle }) {
  let [hand, setHand] = useState("");
  console.log(hand);
  return (
    <>
      <button onClick={() => setIdle(true)}>Return to Main Menu</button>
      <div>
        <button onClick={(e) => setHand(e.target.value)}>Rock</button>
        <button onClick={(e) => setHand(e.target.value)}>Paper</button>
        <button onClick={(e) => setHand(e.target.value)}>Scissors</button>
      </div>
    </>
  );
}
