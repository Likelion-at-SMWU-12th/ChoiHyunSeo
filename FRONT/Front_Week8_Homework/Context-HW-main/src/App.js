import React from "react";
import Content from "./components/Content";
import { PartProvider } from "./context/PartContext";
import { styled, keyframes } from "styled-components";

function App() {
  return (
    <PartProvider>
      <Wrapper>
        <div className="title">
          숙명여대 멋쟁이사자처럼 <BlinkingText>파트</BlinkingText> 구성원
        </div>
        <Content />
      </Wrapper>
    </PartProvider>
  );
}

export default App;

const blinking = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  .title {
    text-align: center;
    padding: 50px 0;
    font-size: 30px;
    font-weight: 700;
  }
`;

const BlinkingText = styled.span`
  color: #ee7521;
  animation: ${blinking} 1s infinite;
`;
