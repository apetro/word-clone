import React from "react";
import Guess from "../Guess";
import {range} from "../../utils.js"
import {NUM_OF_GUESSES_ALLOWED} from "../../constants.js"

function PriorGuesses({guesses, correctAnswer}) {

  const unusedGuesses =  NUM_OF_GUESSES_ALLOWED - guesses.length;

  return (
    <div className="guess-results">
      {guesses.map((guess) => {
        return (
          <Guess guess={guess} key={guess} correctAnswer={correctAnswer} />
        );
      })}
      {range(0, unusedGuesses).map( rangeEntry => {
        return (<Guess guess="" key={rangeEntry} />)
      })}


      </div>
  );
}

export default PriorGuesses;
