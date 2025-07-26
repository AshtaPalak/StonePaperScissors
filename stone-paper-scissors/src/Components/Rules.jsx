import React, { useContext } from "react";
import "./Rules.css";
import { GameContext } from "../AppContextProvider";

const Rules = () => {
  const { showRule, setShowRule } = useContext(GameContext);
  function close() {
    setShowRule(false);
  }
  const RuleList = [
    "Rock beats scissors, scissors beat paper, and paper beats rock.",
    "Agree ahead of time whether you’ll count off “rock, paper, scissors, shoot” or just “rock, paper, scissors.”",
    "Use rock, paper, scissors to settle minor decisions or simply play to pass the time",
  ];
  return (
    <div className="rules">
      <button onClick={close} className="close">
        ❌
      </button>
      <h2>Game Rules</h2>
      <div>
        {RuleList.map((item) => {
          return (
            <din className="rule">
              <h3>✔️{item}</h3>
            </din>
          );
        })}
      </div>
    </div>
  );
};

export default Rules;
