import "./styles/App.css";
import { useState } from "react";
import Match from "./Match";
import MainMenu from "./MainMenu";

function App() {
  let [idle, setIdle] = useState(true);
  let [userID, setUserID] = useState(null);
  let matchID;

  if (userID == null) setUserID(genRandomString(12));

  function getMatch() {
    //useEffect - get match id
  }

  return (
    <>
      {idle ? (
        <MainMenu setIdle={setIdle} />
      ) : (
        <Match userID={userID} matchID={matchID} setIdle={setIdle} />
      )}
    </>
  );
}

function genRandomString(length) {
  var chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  var charLength = chars.length;
  var result = "";
  for (var i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * charLength));
  }
  return result;
}

export default App;
