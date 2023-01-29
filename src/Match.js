import { useEffect, useState } from "react";
import axios from "axios";

export default function Match({ userObj, matchID, setIdle }) {
  let [headerText, setHeaderText] = useState("Make a selection");
  let { name, userID } = userObj;

  //console.log(name + " " + userID.current);

  function handSelected(hand) {
    setHeaderText("You chose " + hand);
  }

  useEffect(() => {
    // async function fetchData(){
    //   const result = await axios(
    //     '/game/find',
    //   );
    //   console.log(result.data)
    // }
    // fetchData();
    axios.post(`/game/find`).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  }, [setHeaderText]);

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
