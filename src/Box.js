import React from "react";

/** Render Box componant, inherits removeBox from parent element. */
function Box({ style, removeBox}) {

  return (
    <div>
      <div style={style}></div>
      <button onClick={removeBox}>Remove The Box</button>
    </div>
  );
}

export default Box;