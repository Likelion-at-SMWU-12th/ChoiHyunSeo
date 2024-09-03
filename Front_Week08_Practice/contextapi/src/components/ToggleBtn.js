import React from "react";
import styled from "styled-components";

const ToggleBtn = () => {
  return <ToggleButton>light 🌝</ToggleButton>;
};

export default ToggleBtn;

const ToggleButton = styled.button`
  position: fixed;
  bottom: 50px;
  right: 50px;
  padding: 20px 40px;
  font-size: 20px;
  border-radius: 50px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
  border: ${(props) => props.borderColor};
`;
