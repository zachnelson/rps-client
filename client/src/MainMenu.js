export default function MainMenu({ setIdle }) {
  return (
    <>
      <div>
        <h1>Rock, Paper, Scissors</h1>
        <button onClick={() => setIdle(false)}>Find match</button>
      </div>
    </>
  );
}
