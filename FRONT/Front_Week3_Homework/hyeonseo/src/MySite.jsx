import React from "react";
import styled from "styled-components";

const SiteBorder = styled.img`
  padding: 6px 12px;
  border: 1.8px solid black;
  margin: 5px;
  height: 80px;
  width: 80px;
  border-radius: 20px;
  background-color: ${(props) => props.background || "#F6CECE"};
`;

const MySite = () => {
  return (
    <div>
      <button>d</button>
    </div>
  );
};

export default MySite;
