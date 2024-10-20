export default function ({ turns }) {
  return (
    <ol id="log">
      {turns.map(({ square: { row, col }, activePlayer }) => (
        <li key={`${row}${col}`}>
          {activePlayer} Selected {row} {col}
        </li>
      ))}
    </ol>
  );
}
