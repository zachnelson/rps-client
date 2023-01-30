import "./styles/App.css";
import { useState, useRef } from "react";
import Match from "./Match";
import MainMenu from "./MainMenu";

function App() {
  let [name, setName] = useState(null);
  let [matchID, setMatchID] = useState(null);
  let userID = useRef(null);

  function resetSession() {
    setMatchID(null);
  }

  return (
    <>
      {matchID === null ? (
        <MainMenu
          name={name}
          setName={setName}
          matchID={matchID}
          userID={userID}
          setMatchID={setMatchID}
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

export default App;
