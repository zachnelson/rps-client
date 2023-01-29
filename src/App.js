import "./styles/App.css";
import { useState, useRef, useEffect } from "react";
import Match from "./Match";
import MainMenu from "./MainMenu";
import axios from "axios";

function App() {
  let [name, setName] = useState(null);
  let [matchID, setMatchID] = useState(null);
  let userID = useRef(null);

  //assign user ID
  useEffect(() => {
    if (name !== null) {
      userID.current = genRandomString(12);
      console.log("assigning user id: " + userID.current);
    }
  }, [name]);

  function findMatch() {
    setTimeout(() => {
      let tempMatch = null;
      if (matchID === null) {
        console.log("finding match...");
        axios
          .get(`/game/find`, {
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
          });
      }
    }, 5000);
  }

  function resetSession() {
    setMatchID(null);
  }

  return (
    <>
      {matchID === null ? (
        <MainMenu name={name} setName={setName} findMatch={findMatch} />
      ) : (
        <Match
          userObj={{ name, userID }}
          matchID={matchID}
          resetSession={resetSession}
        />
      )}
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

export default App;
