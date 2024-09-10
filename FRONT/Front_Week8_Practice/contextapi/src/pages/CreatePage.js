import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { useTheme } from "../contexts/ThemeContext";
import { themeStyle } from "../dict/dict";

const CreatePage = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <Wrapper
      bgColor={themeStyle[theme]["bgColor"]}
      textColor={themeStyle[theme]["textColor"]}
    >
      <h1>리뷰 작성</h1>
      <h3>영화 포스터 이미지 선택</h3>
      <input type="file" />
      <h3>영화 제목</h3>
      <input type="text" />
      <h3>영화 리뷰</h3>
      <textarea />
      <div>
        <button onClick={() => navigate("/")}>작성 완료</button>
      </div>
    </Wrapper>
  );
};

export default CreatePage;

const Wrapper = styled.div`
  height: 100vh;
  padding: 50px 100px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
  input {
    border: none;
    outline: none;
    border-radius: 10px;
    padding: 20px;
    background-color: #ebebeb;
  }
  textarea {
    border: none;
    outline: none;
    border-radius: 10px;
    padding: 20px;
    height: 100px;
    width: 500px;
    background-color: #ebebeb;
  }
  button {
    margin-top: 30px;
  }
`;
