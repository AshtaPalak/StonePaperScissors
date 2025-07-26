import React, { createContext, useState } from "react";
export const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [move, setMove] = useState("");
  const [showRule, setShowRule] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(0);
  const [score, setScore] = useState(0);
  const [pcMove, setPcMove] = useState("");
  const [pcScore, setPcScore] = useState(0);
  const [playAgain, setPlayAgain] = useState(true);
  const [tries, setTries] = useState(5);
  return (
    <GameContext.Provider
      value={{
        move,
        setMove,
        showRule,
        setShowRule,
        gameOver,
        setGameOver,
        win,
        setWin,
        pcMove,
        setPcMove,
        pcScore,
        setPcScore,
        playAgain,
        setPlayAgain,
        score,
        setScore,
        tries,
        setTries,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
