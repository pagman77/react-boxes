import React, { useState } from "react";


/**Renders BoxForm componant. */
function BoxForm({ addBox }) {

  const initalState = {
    height: "",
    width: "",
    color: ""
  };

  const [BoxForm, setBoxFormData] = useState(initalState);

  /** Handle button submit, call addBox on parent and reset form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(BoxForm);
    setBoxFormData(initalState);
  }

  /** Update state of BoxForm when user inputs data */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setBoxFormData(currData => ({ ...currData, [name]: value }));
  }

  return (
    <form>
      <label htmlFor="height">Height</label>
      <input onChange={handleChange} id="height" name="height" value={BoxForm.height} />
      <label htmlFor="width">Width</label>
      <input onChange={handleChange} id="width" name="width" value={BoxForm.width} />
      <label htmlFor="color">Color</label>
      <input onChange={handleChange} id="color" name="color" value={BoxForm.color} />
      <button onClick={handleSubmit}>Add Box!</button>
    </form>
  );
}

export default BoxForm;