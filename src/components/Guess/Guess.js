import React from "react";

function Guess({ checkedGuess }) {

  return (
    <p className="guess">
      {checkedGuess.map((value, index) => {
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
