import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const DetailPage = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Button txt={"방명록 작성하기"} onBtnClick={() => navigate("/write")} />
      <DetailWrapper>
        <DetailDiv>
          <Author>이예지</Author>
          <Time>2024-06-28T12:34:56Z</Time>
          <Comment>하이</Comment>
          <BtnLine>
            <Button txt={"수정"} fontSize={"30px"} />
            <Button txt={"삭제"} fontSize={"30px"} />
          </BtnLine>
        </DetailDiv>
      </DetailWrapper>
    </Wrapper>
  );
};

export default DetailPage;

const Wrapper = styled.div`
  margin-top: 20px;
`;
const DetailWrapper = styled.div`
  width: calc(100% - 200px);
  height: fit-content;
  background-color: white;
  border-radius: 20px;
  padding: 100px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const DetailDiv = styled.div``;
const Author = styled.div`
  font-size: 50px;
  font-weight: 700;
`;
const Time = styled.div`
  color: #c8c8c8;
  font-weight: 600;
  font-size: 30px;
`;
const Comment = styled.div`
  font-size: 40px;
  font-weight: 700;
  margin: 50px 0;
`;
const BtnLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 20px;
`;
