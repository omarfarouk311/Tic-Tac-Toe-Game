export default function ({ finalGameState, onClick }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {finalGameState}
      <p>
        <button onClick={() => onClick([])}>Rematch!</button>
      </p>
    </div>
  );
}
