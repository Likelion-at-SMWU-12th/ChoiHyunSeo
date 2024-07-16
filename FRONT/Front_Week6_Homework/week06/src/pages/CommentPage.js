import React from "react";
import styled from "styled-components";
import Comment from "../components/Comment";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const CommentPage = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Button txt={"방명록 작성하기"} onBtnClick={() => navigate("/write")} />
      <CommentWrapper>
        <Comment />
      </CommentWrapper>
    </Wrapper>
  );
};

export default CommentPage;

const Wrapper = styled.div`
  margin-top: 20px;
`;
const CommentWrapper = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(3, 21vw);
  justify-content: space-between;
  padding: 0 100px 0 0;
`;
