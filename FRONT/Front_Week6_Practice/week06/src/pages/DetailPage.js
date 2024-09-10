import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const DetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  //   console.log(id);
  const [detail, setDetail] = useState([]);

  const getDetail = () => {
    axios
      .get(`http://127.0.0.1:8000/entries/${id}/`)
      .then((response) => {
        console.log(response);
        setDetail(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getDetail();
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <Button txt={"방명록 작성하기"} onBtnClick={() => navigate("/write")} />
      <DetailWrapper>
        <DetailDiv>
          <Author>{detail.author}</Author>
          <Time>{detail.timestamp}</Time>
          <Comment>{detail.comment}</Comment>
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
