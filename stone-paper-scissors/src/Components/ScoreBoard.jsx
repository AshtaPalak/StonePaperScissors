import React, { useContext } from "react";
import "./ScoreBoard.css";
import { GameContext } from "../AppContextProvider";

const ScoreBoard = () => {
  const { score, pcScore } = useContext(GameContext);

  return (
    <div className="score-board">
      <div className="title">
        <h2>ROCK</h2>
        <h2>PAPER</h2>
        <h2>SCISSORS</h2>
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <div className="your-score">
          <h4>YOUR SCORE</h4>
          <h1>{score}</h1>
        </div>
        <div className="computer-score">
          <h4>COMPUTER SCORE</h4>
          <h1>{pcScore}</h1>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
