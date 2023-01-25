export default function MainMenu({ setIdle }) {
  return (
    <>
      <div>
        <h1 className="headerText">Rock, Paper, Scissors</h1>
        <div className="buttonContainer">
          <button className="bigButton" onClick={() => setIdle(false)}>
            Find match
          </button>
        </div>
      </div>
    </>
  );
}
