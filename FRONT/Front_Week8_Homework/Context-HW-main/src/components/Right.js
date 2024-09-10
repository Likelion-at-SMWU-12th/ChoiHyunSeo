import React from "react";
import MemberList from "./MemberList";
import { usePart } from "./PartContext";
import styled from "styled-components";

const Right = () => {
  const { part } = usePart();

  return (
    <Wrapper>
      <MemberList part={part} />
    </Wrapper>
  );
};

export default Right;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;
