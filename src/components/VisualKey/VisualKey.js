import React from "react";

// status may be: "correct", "misplaced", "incorrect", "unknown"
function VisualKey({children, status}) {

  return (
    <span className={`cell ${status}`}>
      {children}
    </span>
  );
}

export default VisualKey
