import React from "react";

const Button = ({ handleChange, text }) => {
  return (
    <div>
      <button
        style={{ marginTop: "30px", width: "160px", fontSize: "18px" }}
        onClick={handleChange}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
