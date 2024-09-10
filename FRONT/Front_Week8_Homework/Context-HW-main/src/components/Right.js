import React from "react";
import { styled } from "styled-components";
import MemberList from "./MemberList";
import { usePart } from "../context/PartContext";

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
