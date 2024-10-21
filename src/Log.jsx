export default function ({ turns }) {
  return (
    <ol id="log">
      {turns.map(({ square: { row, col }, activePlayer }) => (
        <li key={`${row}${col}`} className="highlighted">
          {activePlayer} Selected {row} {col}
        </li>
      ))}
    </ol>
  );
}
