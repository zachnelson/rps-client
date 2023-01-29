import { useRef } from "react";
export default function MainMenu({ name, setName, setIdle }) {
  let tempName = useRef(null);

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
            disabled={name === null}
            onClick={() => setIdle(false)}
          >
            Find match
          </button>
        </div>
      </div>
    </>
  );
}
