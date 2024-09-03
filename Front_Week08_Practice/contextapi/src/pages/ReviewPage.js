import React from "react";
import ReviewList from "../components/ReviewList";
import { useNavigate } from "react-router";
import styled from "styled-components";

const ReviewPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Wrapper>
        <h1>테마 : light</h1>

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
