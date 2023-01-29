import "./styles/App.css";
import { useState, useRef, useEffect } from "react";
import Match from "./Match";
import MainMenu from "./MainMenu";
import axios from "axios";

function App() {
  let [matchSearch, setMatchSearch] = useState(false);
  let [name, setName] = useState(null);
  let [matchID, setmatchID] = useState(null);
  let userID = useRef(null);

  //assign user ID
  useEffect(() => {
    if (name !== null) {
      userID.current = genRandomString(12);
      console.log("assigning user id: " + userID.current);
    }
  }, [name]);

  //find match
  useEffect(() => {
    if (matchSearch !== false) {
      console.log("finding match...");
      axios.post(`/game/find`, { id: userID.current }).then((res) => {
        console.log(res);
        console.log(res.data);
        //TODO: assign match id here
      });
    }
  }, [matchSearch]);

  function resetSession() {
    setMatchSearch(false);
    setmatchID(null);
  }

  return (
    <>
      {!matchSearch ? (
        <MainMenu
          name={name}
          setName={setName}
          setMatchSearch={setMatchSearch}
        />
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
