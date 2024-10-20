import Player from "./Player";
import GameBoard from "./GameBoard";
import { useState } from "react";

function App() {
  const [gameTurns, updateGameTurns] = useState([]);

  function handleSquareClick(rowIdx, colIdx) {
    updateGameTurns((prevGameTurns) => {
      let currentPlayer = "X";
      if (prevGameTurns.length && prevGameTurns[0].activePlayer === "X") {
        currentPlayer = "O";
      }

      const updatedTurns = [
        {
          activePlayer: currentPlayer,
          square: { row: rowIdx, col: colIdx },
        },
        ...prevGameTurns,
      ];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={"Player 1"}
            symbol={"X"}
            isActive={
              gameTurns.length ? gameTurns[0].activePlayer === "O" : true
            }
          />
          <Player
            initialName={"Player 2"}
            symbol={"O"}
            isActive={
              gameTurns.length ? gameTurns[0].activePlayer === "X" : false
            }
          />
        </ol>
        <GameBoard onSquareClick={handleSquareClick} turns={gameTurns} />
      </div>
    </main>
  );
}

export default App;
