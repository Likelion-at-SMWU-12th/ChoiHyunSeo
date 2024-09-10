import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 6px 12px;
  border: 3px solid orange;
  border-raduis: 8px;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.5;
  margin: 5px;
  color: ${(props) => props.color || "red"};
  background-color: ${(props) => props.background || "lightgray"};
`;

const LikeButton = () => {
  return (
    <div>
      <StyledButton>좋아좋아😻</StyledButton>;
      <StyledButton color="purple" background="lightblue">
        좋아좋아😻
      </StyledButton>
    </div>
  );
};

export default LikeButton;
export { StyledButton };
