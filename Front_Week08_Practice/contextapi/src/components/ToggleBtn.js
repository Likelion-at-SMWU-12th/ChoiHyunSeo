import React from "react";
import styled from "styled-components";
import { useTheme } from "../contexts/ThemeContext";

const ToggleBtn = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <ToggleButton onClick={toggleTheme}>
      {theme === "light" ? "light 🌝" : "dark 🌚"}
    </ToggleButton>
  );
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
