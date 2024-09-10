import React from "react";
import styled from "styled-components";
import { usePart } from "../context/PartContext";

const Left = () => {
  const { part, setPart } = usePart();
  return (
    <Wrapper>
      <ButtonContainer>
        <button onClick={() => setPart("")}>전체</button>
        <button onClick={() => setPart("프론트엔드")}>프론트엔드</button>
        <button onClick={() => setPart("백엔드")}>백엔드</button>
        <button onClick={() => setPart("기획/디자인")}>기획/디자인</button>
      </ButtonContainer>
    </Wrapper>
  );
};

export default Left;

const Wrapper = styled.div`
  margin-left: 100px;
  width: 300px;
  height: 100%;
  border-right: 1.5px solid #e6e6e6;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;

  button {
    display: block;
    padding: 15px 25px;
    margin: 10px;
    font-size: 18px;
    font-weight: 600;
    border-radius: 50px;
    width: 150px;
    background-color: white;
    border: 2px solid #ee7521;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease,
      box-shadow 0.3s ease;

    &:hover {
      color: white;
      background-color: #ee7521;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      transform: scale(1.2);
    }
  }
`;
