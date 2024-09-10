import React from "react";
import styled from "styled-components";
import { StyledButton } from "./LikeButton";

const FunnyButton = () => {
  const StyledButton2 = styled(StyledButton)`
    border: 3px solid green;
  `;

  return <StyledButton2>웃김</StyledButton2>;
};

export default FunnyButton;
