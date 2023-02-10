import React from "react";
import VisualKey from "../VisualKey";

function VisualKeyboard({ checkedGuesses}) {

  // strategy:
  // build an object with letter keys and status values
  // use that object as the key to what status each VisualKey should have.

  const letterStatusMap = {};
  console.log("Initialized letter status map to:");
  console.log(letterStatusMap);

  // letterStatusMap initially includes all letters, defaulting to a "" status.

  [..."QWERTYUIOPASDFGHJKLZXCVBNM"].map((letter) => {
    letterStatusMap[letter] = "";
  });

  console.log("After seeding all letters, letter status map is ");
  console.log(letterStatusMap);


  console.log("Checked guesses is");
  console.log(checkedGuesses);

  // collect letter statuses in several passes so that correct status overwrites misplaced status.

  checkedGuesses.map((checkedGuess) => {
    checkedGuess.map(({ letter, status }) => {
      if (status === "incorrect") {
        letterStatusMap[letter] = status;
      }
    });
  });

  console.log("After processing incorrect letters, letterStatusMap is");
  console.log(letterStatusMap);

  checkedGuesses.map((checkedGuess) => {
    checkedGuess.map(({ letter, status }) => {
      if (status === "misplaced") {
        letterStatusMap[letter] = status;
      }
    });
  });

  console.log("After processing misplaced letter, letter status map is");
  console.log(letterStatusMap);

  checkedGuesses.map((checkedGuess) => {
    checkedGuess.map(({ letter, status }) => {
      if (status === "correct") {
        letterStatusMap[letter] = status;
      }
    });
  });

  console.log("After processing correct letters, letterStatusMap is");
  console.log(letterStatusMap);

  // okay, letterStatusMap is now an object with letters as keys and known status of those letters as values.

  // generate each row of the visual keybaord
  // rows are arrays of objects with properties letter and status.
  // letter is a single character, the letter ("A")
  // status is "" or a valid status, like "misplaced"

  const rows = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"].map(rowString => {
    return [...rowString].map(letter => {
      const letterWithStatus = {};
      letterWithStatus.letter = letter;
      letterWithStatus.status = letterStatusMap[letter];
      return letterWithStatus;
    })
  })

  return (
    <>
      {rows.map((row) => {
        return (
          <p className="guess" key={row[0].letter}>
            {row.map(({ letter, status }) => {
              return (
                <VisualKey key={letter} status={status}>
                  {letter}
                </VisualKey>
              );
            })}
          </p>
        );
      })}
    </>
  );
}

export default VisualKeyboard;
