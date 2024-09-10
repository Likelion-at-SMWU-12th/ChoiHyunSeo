import React from "react";
import MemberList from "./MemberList";
import { usePart } from "../context/PartContext";
import styled from "styled-components";

const Right = () => {
  const { part } = usePart();

  return (
    <Wrapper>
      <ContentWrapper>
        <MemberList part={part} />
      </ContentWrapper>
    </Wrapper>
  );
};

export default Right;

const Wrapper = styled.div`
  flex: 1;
  height: 100%;
  padding: 20px;
  margin-left: 50px;
  overflow-y: auto;
  background: #ffffff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
