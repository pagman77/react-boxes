import Box from "./Box";
import BoxForm from "./BoxForm";
import React, { useState } from "react";
import { v4 as uuid } from 'uuid';


/** Cmponent holding a form to add a new box */
function BoxList() {

  const [boxes, setBoxes] = useState([]);

  /** Add new box object. */
  function addBox(box) {
    let newBox = { ...box, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);
  }
  /** Remove a box from list of boxes */
  function removeBox(id) {

    setBoxes(boxes.filter(box => box.id !== id));
  }

  /**  Render a list of Boxes based on the state of boxes.*/
  function renderItemsJSX() {

    return (
      boxes.map(box =>
        <Box key={box.id}
          style={{
            "width": `${box.width}px`,
            "height": `${box.height}px`,
            "backgroundColor": box.color
          }} removeBox={() => removeBox(box.id)} />)
    );
  }
  return (
    <div className="BoxList">
      <BoxForm addBox={addBox} />
      {renderItemsJSX()}
    </div>
  );

}

export default BoxList;