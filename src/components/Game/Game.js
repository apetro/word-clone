import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessBox from "../GuessBox";
import PriorGuesses from "../PriorGuesses";
import EndGameBanner from "../EndGameBanner";
import VisualKeyboard from "../VisualKeyboard";
import {NUM_OF_GUESSES_ALLOWED } from "../../constants.js"
import {checkGuess} from "../../game-helpers.js"

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);
  const [checkedGuesses, setCheckedGuesses] = React.useState([]);

  function won() {
    return guesses.includes(answer);
  }

  function lost() {
    return ((guesses.length >= NUM_OF_GUESSES_ALLOWED) && !won());
  }

  function gameOver() {
    return won() || lost();
  }

  function addGuess(guess) {
    if (guesses.includes(guess)) {
      return;
    }
    if (guesses.length > 5) {
      return;
    }

    setGuesses([...guesses, guess]);
    setCheckedGuesses([...checkedGuesses, checkGuess(guess, answer)]);
  }

  function restart(){
    setGuesses([]);
    setCheckedGuesses([]);
    setAnswer(sample(WORDS));
  }

  return (
    <>
      <PriorGuesses checkedGuesses={checkedGuesses}/>
      <GuessBox addGuess={addGuess} gameOver={gameOver()}/>
      <VisualKeyboard checkedGuesses={checkedGuesses}/>
      {gameOver() && (<EndGameBanner won={won()} attempts={guesses.length} correctAnswer={answer} restartFn={restart}/>)}
    </>
  );
}

export default Game;
