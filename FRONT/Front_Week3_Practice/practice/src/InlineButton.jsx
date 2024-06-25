import React from "react";

const InlineButton = () => {
  const btnStyle = {
    color: "black",
    background: "pink",
    border: "1px solid pink",
    borderRadius: "15rem",
    padding: "15px",
    fontSize: "20px",
  };
  return (
    <div>
      <button style={btnStyle}>Inline Button</button>
    </div>
  );
};

export default InlineButton;
