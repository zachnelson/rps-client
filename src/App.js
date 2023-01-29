import "./styles/App.css";
import { useState, useRef, useEffect } from "react";
import Match from "./Match";
import MainMenu from "./MainMenu";

function App() {
  let [idle, setIdle] = useState(true);
  let [name, setName] = useState(null);
  let userID = useRef(null);
  let matchID;

  useEffect(() => {
    userID.current = genRandomString(12);
  }, [name]);

  function getMatch() {
    //useEffect - get match id
  }

  return (
    <>
      {idle ? (
        <MainMenu name={name} setName={setName} setIdle={setIdle} />
      ) : (
        <Match userObj={{ name, userID }} matchID={matchID} setIdle={setIdle} />
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
