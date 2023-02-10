import React from "react";

function GuessBox({addGuess, gameOver}) {
  const [guess, setGuess] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        addGuess(guess);
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
        minLength={5}
        maxLength={5}
        disabled={gameOver}
      />
      <button>Guess</button>
    </form>
  );
}

export default GuessBox;
