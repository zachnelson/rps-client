import { useEffect, useState } from "react";
import axios from "axios";

export default function Match({ userObj, matchID, resetSession }) {
  let [headerText, setHeaderText] = useState("Make a selection");
  let [hand, setHand] = useState(null);
  let { name, userID } = userObj;

  function handSelected(hand) {
    setHeaderText("You chose " + hand);
    setHand(hand);
  }

  useEffect(() => {
    // async function fetchData(){
    //   const result = await axios(
    //     '/game/find',
    //   );
    //   console.log(result.data)
    // }
    // fetchData();
    if (setHeaderText !== "Make a selection") {
      axios
        .post(`/game/find`, { id: userID.current, hand: hand })
        .then((res) => {
          console.log(res);
          console.log(res.data);
        });
    }
  }, [setHeaderText]);

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
        <button className="rpsButton" onClick={() => handSelected("Rock")}>
          Rock👊
        </button>
        <button className="rpsButton" onClick={() => handSelected("Paper")}>
          Paper✋
        </button>
        <button className="rpsButton" onClick={() => handSelected("Scissors")}>
          Scissors✌
        </button>
      </div>
    </>
  );
}
