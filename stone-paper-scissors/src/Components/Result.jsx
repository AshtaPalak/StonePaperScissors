import React, { useContext } from "react";
import "./Result.css";
import { GameContext } from "../AppContextProvider";

const Result = () => {
  const { move, pcMove, win, playAgain, setPlayAgain, setGameOver } =
    useContext(GameContext);
  function play() {
    setPlayAgain(!playAgain);
  }
  return (
    <div className="result">
      <div className="you-picked">
        {move === "scissor" && <h1>✌️</h1>}
        {move === "stone" && <h1>✊</h1>}
        {move === "paper" && <h1>✋</h1>}
      </div>
      <div className="announcement">
        {win === 1 && <h2>YOU WIN</h2>}
        {win === 0 && <h2>YOU LOST</h2>}
        {win === 2 && <h2>MATCH DRAW</h2>}
        <h3>AGAINST PC</h3>
        <button onClick={play}>PLAY AGAIN</button>
      </div>
      <div className="pc-picked">
        {pcMove === "scissor" && <h1>✌️</h1>}
        {pcMove === "stone" && <h1>✊</h1>}
        {pcMove === "paper" && <h1>✋</h1>}
      </div>
    </div>
  );
};

export default Result;
