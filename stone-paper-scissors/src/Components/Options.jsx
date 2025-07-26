import React, { useContext } from "react";
import "./Options.css";
import GameProvider, { GameContext } from "../AppContextProvider";

const Options = () => {
  const {
    move,
    setMove,
    win,
    setWin,
    gameOver,
    setGameOver,
    score,
    setScore,
    pcMove,
    setPcMove,
    pcScore,
    setPcScore,
    setPlayAgain,
  } = useContext(GameContext);

  function checkWin(currMove) {
    let w;
    const moves = ["stone", "paper", "scissor"];
    let pc = Math.floor(Math.random() * 3);
    const random = moves[pc];
    setPcMove(random);
    console.log("pc move is ", random);
    console.log("your move", currMove);
    if (pcMove === move) {
      setWin(2); //draw
      w = 2;
      setPlayAgain(false);
      return;
    } else if (pcMove === "paper" && currMove === "scissor") {
      setWin(1);
      w = 1;
      let s = score + 1;
      setScore(s);
    } else if (pcMove === "stone" && currMove === "paper") {
      setWin(1);
      w = 1;
      let s = score + 1;
      setScore(s);
    } else if (pcMove === "scissor" && currMove === "stone") {
      setWin(1);
      w = 1;
      let s = score + 1;
      setScore(s);
    } else {
      setWin(0);
      w = 0;
      let s = pcScore + 1;
      setPcScore(s);
    }
    console.log("win is ", w);

    setPlayAgain(false);
    //setGameOver(true);
    return;
  }
  function setStone() {
    setMove("stone");

    checkWin("stone");
  }
  function setPaper() {
    setMove("paper");

    checkWin("paper");
  }
  function setScissor() {
    setMove("scissor");
    checkWin("scissor");
  }

  return (
    <div>
      <div className="options">
        <div style={{ display: "flex", gap: "50px" }}>
          <button onClick={setStone} className="stone">
            ✊
          </button>
          <button onClick={setPaper} className="paper">
            ✋
          </button>
        </div>

        <button onClick={setScissor} className="scissor">
          ✌️
        </button>
      </div>
    </div>
  );
};

export default Options;
