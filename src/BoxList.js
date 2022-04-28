import Box from "./Box";
import BoxForm from "./BoxForm";
import React , { useState } from "react";
import { v4 as uuid } from 'uuid';

function BoxList(){

    const [boxes, setBoxes] = useState([]);

    function renderItems() {
        const style = {"width":box.width,
         "height":box.height,
          "background-color":box.color};

        return (
              boxes.map(box => <Box key={box.id} id={box.id} style={style} removeBox={removeBox}/>)
        );
      }
     
    
      /** Add new box object. */
      function addBox(box) {
        let newBox = { ...box, id: uuid() };
        setBoxes(boxes => [...boxes, newBox]);
      }

      function removeBox(evt){
        evt.preventDefault();
        const boxId = evt.target.id;

        setBoxes(boxes => boxes.filter(box => box.id !== boxId));
      }
    
      return (
        <div className="BoxList">
          <BoxForm addBox={addBox} />
          {renderItems()}
        </div>
      );

}

export default BoxList;