import React from "react";

function EndGameBanner({ won, attempts, correctAnswer, restartFn }) {

  return (
    <>
      {won && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong>
            <span> Got it in </span>
            <strong>{attempts} guesses</strong>.
          </p>
          <button onClick={restartFn}>Restart</button>
        </div>
      )}
      {!won && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{correctAnswer}</strong>.
          </p>
          <button onClick={restartFn}>Restart</button>
        </div>
      )}
    </>
  );
}

export default EndGameBanner;
