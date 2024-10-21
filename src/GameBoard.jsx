export default function ({ onSquareClick, board }) {
  return (
    <ol id="game-board">
      {board.map((row, rowIdx) => (
        <li key={rowIdx}>
          <ol>
            {row.map((symbol, colIdx) => (
              <li key={colIdx}>
                <button
                  onClick={() => onSquareClick(rowIdx, colIdx)}
                  disabled={symbol}
                >
                  {symbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
