import React from "react";
import VisualKey from "../VisualKey"

function VisualKeyboard() {
  const topRow = [..."QWERTYUIOP"];
  const middleRow = [..."ASDFGHJKL"];
  const bottomRow = [..."ZXCVBNM"];
  const rows = [topRow, middleRow, bottomRow];


  return (
    <p className="guess">
      {rows.map(row => { return

      // row.map(letter =>{ return (<VisualKey>{letter}</VisualKey>)})
      (<p key={row}>Row</p>)

      })}

    </p>
  );
}

export default VisualKeyboard;
