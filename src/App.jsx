import Player from "./Player";
import GameBoard from "./GameBoard";
import Log from "./Log";
import GameOver from "./GameOver";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combinations";

function App() {
  const [gameTurns, updateGameTurns] = useState([]);

  /*create the game board inside the component to work with it as immutable object by creating a new board each time 
  the component re-render*/
  const gameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  //update game board based on the current turns state
  gameTurns.forEach(
    ({ square: { row, col }, activePlayer }) =>
      (gameBoard[row][col] = activePlayer)
  );

  //determine if there is a winner or a draw
  let winner, draw;
  WINNING_COMBINATIONS.forEach((comb) => {
    const symbols = comb.map((elem) => gameBoard[elem.row][elem.column]);
    if (symbols[0] && symbols[0] === symbols[1] && symbols[0] === symbols[2]) {
      winner = symbols[0];
    }
  });
  draw = !winner && gameTurns.length === 9;

  //square click event listener function
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
        {winner && (
          <GameOver
            finalGameState={<p>{winner} won!</p>}
            onClick={updateGameTurns}
          />
        )}
        {draw && (
          <GameOver finalGameState={<p>Draw!</p>} onClick={updateGameTurns} />
        )}
        <GameBoard onSquareClick={handleSquareClick} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
