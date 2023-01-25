import "./styles/App.css";
import { useState } from "react";
import Match from "./Match";
import MainMenu from "./MainMenu";

function App() {
  let [idle, setIdle] = useState(true);
  let matchID;

  function getMatch() {
    //useEffect - get match id
  }

  return (
    <>
      {idle ? (
        <MainMenu setIdle={setIdle} />
      ) : (
        <Match matchID={matchID} setIdle={setIdle} />
      )}
    </>
  );
}

export default App;
