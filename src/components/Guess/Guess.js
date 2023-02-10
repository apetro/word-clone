import React from "react";
import {range} from "../../utils.js"
import {checkGuess} from "../../game-helpers.js"

function Guess({ guess, correctAnswer }) {
  if (!guess || guess === "") {
    return (
      <p className="guess">
        {range(0, 5).map((rangeItem) => {
          return (
            <span className="cell" key={rangeItem}>
            </span>
          );
        })}
      </p>
    );
  }

  const guessResult = checkGuess(guess, correctAnswer);

  return (
    <p className="guess">
      {[...guessResult].map((value, index) => {
        return (
          <span className={`cell ${value.status}`} key={index}>
            {value.letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
