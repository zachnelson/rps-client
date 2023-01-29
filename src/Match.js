import { useEffect, useState } from "react";
import axios from "axios";

export default function Match({ userObj, matchID, resetSession }) {
  let [headerText, setHeaderText] = useState("Make a selection");
  let { name, userID } = userObj;

  function handSelected(hand) {
    setHeaderText("You chose " + hand);
  }

  function playHand(hand) {
    setTimeout(() => {
      console.log("playing hand: " + hand + " " + userID.current);
      axios
        .get(`/game/play-hand`, {
          params: {
            userId: userID.current,
            hand: hand,
          },
        })
        .then((res) => {
          if (res.data.winnerId !== "") {
            if (res.data.winnerId === userID.current) setHeaderText("Winner!");
            else setHeaderText("Loser!");
          } else playHand(hand);
        });
    }, 5000);
  }

  return (
    <>
      <button
        onClick={() => {
          resetSession();
        }}
      >
        Return to Main Menu
      </button>
      <div>
        <h1 className="headerText">{headerText}</h1>
      </div>
      <div className="buttonContainer">
        <button
          disabled={headerText !== "Make a selection"}
          className="rpsButton"
          onClick={() => {
            handSelected("Rock");
            playHand("rock");
          }}
        >
          Rock👊
        </button>
        <button
          disabled={headerText !== "Make a selection"}
          className="rpsButton"
          onClick={() => {
            handSelected("Paper");
            playHand("paper");
          }}
        >
          Paper✋
        </button>
        <button
          disabled={headerText !== "Make a selection"}
          className="rpsButton"
          onClick={() => {
            handSelected("Scissors");
            playHand("scissors");
          }}
        >
          Scissors✌
        </button>
      </div>
    </>
  );
}
