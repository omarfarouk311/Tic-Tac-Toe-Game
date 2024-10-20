const gameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function ({ onSquareClick, turns }) {
  if (turns.length) {
    const {
      square: { row, col },
      activePlayer,
    } = turns[0];
    gameBoard[row][col] = activePlayer;
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIdx) => (
        <li key={rowIdx}>
          <ol>
            {row.map((symbol, colIdx) => (
              <li key={colIdx}>
                <button onClick={() => onSquareClick(rowIdx, colIdx)}>
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
