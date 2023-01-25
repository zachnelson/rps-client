import { useState } from "react";

export default function Match({ userID, matchID, setIdle }) {
  let [headerText, setHeaderText] = useState("Make a selection");

  function handSelected(hand) {
    setHeaderText("You chose " + hand);
    //api call -> {matchID, userID, hand}
  }

  return (
    <>
      <button onClick={() => setIdle(true)}>Return to Main Menu</button>
      <div>
        <h1 className="headerText">{headerText}</h1>
      </div>
      <div className="buttonContainer">
        <button className="rpsButton" onClick={() => handSelected("Rock")}>
          Rock
        </button>
        <button className="rpsButton" onClick={() => handSelected("Paper")}>
          Paper
        </button>
        <button className="rpsButton" onClick={() => handSelected("Scissors")}>
          Scissors
        </button>
      </div>
    </>
  );
}
