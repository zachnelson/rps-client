import { useState } from "react";
import axios from "axios";

export default function Match({ userObj, matchID, resetSession }) {
  let [headerText, setHeaderText] = useState("Make a selection");
  let { name, userID } = userObj;

  function handSelected(hand) {
    setHeaderText("You chose " + hand);
    playHand(hand.toLowerCase());
  }

  function playHand(hand) {
    setTimeout(() => {
      console.log("playing hand: " + hand + " " + userID.current);
      axios
        .get(`/game/match/play`, {
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
        })
        .catch(function (error) {
          console.log("Caught error: " + error.message);
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
          }}
        >
          Rock👊
        </button>
        <button
          disabled={headerText !== "Make a selection"}
          className="rpsButton"
          onClick={() => {
            handSelected("Paper");
          }}
        >
          Paper✋
        </button>
        <button
          disabled={headerText !== "Make a selection"}
          className="rpsButton"
          onClick={() => {
            handSelected("Scissors");
          }}
        >
          Scissors✌
        </button>
      </div>
    </>
  );
}
