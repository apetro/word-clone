import React from "react";
import VisualKey from "../VisualKey";

function VisualKeyboard() {
  const topRow = [..."QWERTYUIOP"];
  const middleRow = [..."ASDFGHJKL"];
  const bottomRow = [..."ZXCVBNM"];
  const rows = [topRow, middleRow, bottomRow];

  return (
    <>
      {rows.map((row) => {
        return (
          <p className="guess" key={row[0]}>
            {row.map((letter) => {
              return <VisualKey key={letter}>{letter}</VisualKey>;
            })}
          </p>
        );
      })}
    </>
  );
}

export default VisualKeyboard;
