import { useRef, useState } from "react";
import axios from "axios";
export default function MainMenu({
  name,
  setName,
  matchID,
  setMatchID,
  userID,
}) {
  let [matchText, setMatchText] = useState("Find match");
  let tempName = useRef(null);

  if (name !== null && userID.current == null) {
    userID.current = genRandomString(12);
    console.log("assigning user id: " + userID.current);
  }

  function findMatch() {
    setTimeout(() => {
      let tempMatch = null;
      if (matchID === null) {
        console.log("finding match...");
        axios
          .get(`/game/match/find`, {
            params: {
              userId: userID.current,
            },
          })
          .then((res) => {
            let response = res.data.matchId;
            console.log("matchId: " + response);
            if (response !== "") {
              tempMatch = response;
              setMatchID(response);
            }
            if (tempMatch === null) findMatch();
          })
          .catch(function (error) {
            console.log("Caught error: " + error.message);
          });
      }
    }, 5000);
  }

  return (
    <>
      <div>
        <h1 className="headerText">Rock, Paper, Scissors</h1>
        <div className="center">
          {name === null ? (
            <div>
              Type in your name...
              <br></br>
              <br></br>
              <input onChange={(e) => (tempName = e.target.value)} />
              <button onClick={() => setName(tempName)}>Enter</button>
            </div>
          ) : (
            <div>Hello, {name}</div>
          )}
          <br></br>
        </div>
        <div className="buttonContainer">
          <button
            className="center"
            disabled={matchText === "Finding match..."}
            onClick={() => {
              setMatchText("Finding match...");
              findMatch();
            }}
          >
            {matchText}
          </button>
        </div>
      </div>
    </>
  );
}

function genRandomString(length) {
  var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var charLength = chars.length;
  var result = "";
  for (var i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * charLength));
  }
  return result;
}
