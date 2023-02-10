import React from "react";

// status may be: "correct", "misplaced", "incorrect", "unknown"
function VisualKey({children, status}) {

  return (
    <span className={`key ${status}`}>
      {children}
    </span>
  );
}

export default VisualKey
