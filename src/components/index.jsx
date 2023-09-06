import React, { useState } from "react";

function InputField() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    console.log(`Submitted: ${text}`);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>You typed: {text}</p>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default InputField;
