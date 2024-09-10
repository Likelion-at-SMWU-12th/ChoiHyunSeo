import React from "react";
import Content from "./components/Content";
import { PartProvider } from "./context/PartContext";
import { styled } from "styled-components";

function App() {
  return (
    <PartProvider>
      <Wrapper>
        <div className="title">
          숙명여대 멋쟁이사자처럼 <span>파트</span> 구성원
        </div>
        <Content />
      </Wrapper>
    </PartProvider>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  .title {
    text-align: center;
    padding: 50px 0;
    font-size: 30px;
    font-weight: 700;
    span {
      color: #ee7521;
    }
  }
`;
