import React from "react";
import VisualKey from "../VisualKey"

function VisualKeyboard() {
  const topRow = [..."QWERTYUIOP"];
  const middleRow = [..."ASDFGHJKL"];
  const bottomRow = [..."ZXCVBNM"];
  const rows = [topRow, middleRow, bottomRow];


  return (
    <p className="guess">

      {topRow.map(letter =>{ return (<VisualKey key={letter}>{letter}</VisualKey>)})}

    </p>
  );
}

export default VisualKeyboard;
