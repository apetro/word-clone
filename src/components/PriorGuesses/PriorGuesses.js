import React from "react";
import Guess from "../Guess";
import { range } from "../../utils.js";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";

function PriorGuesses({ checkedGuesses }) {
  const unusedGuesses = NUM_OF_GUESSES_ALLOWED - checkedGuesses.length;

  const notYetGuessed = [
    { letter: "", status: "" },
    { letter: "", status: "" },
    { letter: "", status: "" },
    { letter: "", status: "" },
    { letter: "", status: "" },
  ];

  return (
    <div className="guess-results">
      {checkedGuesses.map((checkedGuess, index) => {
        return <Guess checkedGuess={checkedGuess} key={index} />;
      })}
      {range(0, unusedGuesses).map((rangeEntry) => {
        return <Guess checkedGuess={notYetGuessed} key={rangeEntry} />;
      })}
    </div>
  );
}

export default PriorGuesses;
