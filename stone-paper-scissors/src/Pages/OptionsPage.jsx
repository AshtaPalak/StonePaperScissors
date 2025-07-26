import React, { useContext, useState } from "react";
import ScoreBoard from "../Components/ScoreBoard";
import Options from "../Components/Options";
import Rules from "../Components/Rules";
import GameProvider, { GameContext } from "../AppContextProvider";
import Result from "../Components/Result";

const OptionsPage = () => {
  const { showRule, setShowRule, gameOver, setGameOver, playAgain } =
    useContext(GameContext);
  function showRules() {
    if (!showRule) setShowRule(true);
    else setShowRule(false);
  }
  return (
    <div>
      <ScoreBoard />
      {playAgain && <Options />}

      {!playAgain && <Result />}
      {showRule && <Rules />}
      <button
        style={{
          backgroundColor: "white",
          color: "greenyellow",
          height: "30px",
          width: "50px",
          border: "none",
          borderRadius: "14px",
          margin: "10px",
        }}
        onClick={showRules}
      >
        Rules
      </button>
    </div>
  );
};

export default OptionsPage;
