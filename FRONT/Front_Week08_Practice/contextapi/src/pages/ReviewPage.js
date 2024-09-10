import React, { useContext } from "react";
import ReviewList from "../components/ReviewList";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { useTheme } from "../contexts/ThemeContext";
import { themeStyle } from "../dict/dict";

const ReviewPage = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <>
      <Wrapper
        bgColor={themeStyle[theme]["bgColor"]}
        textColor={themeStyle[theme]["textColor"]}
      >
        <h1>테마 : {theme}</h1>
        <button onClick={() => navigate("/create")}>작성하기</button>
        <ReviewList />
      </Wrapper>
    </>
  );
};

export default ReviewPage;

const Wrapper = styled.div`
  padding: 50px 100px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
`;
