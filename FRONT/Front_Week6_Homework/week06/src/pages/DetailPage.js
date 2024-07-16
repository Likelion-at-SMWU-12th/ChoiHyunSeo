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
  // 수정 기능 판별? 수정 상태를 담고 있을 state
  const [editing, setEditing] = useState(false);

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

  const onDelete = () => {
    axios
      .delete(`http://127.0.0.1:8000/entries/${id}/`)
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onEdit = () => {
    // 수정 모드로 인식하기
    setEditing(true);
    console.log("수정 모드 on");
  };

  const onEditSave = () => {
    axios
      .put(`http://127.0.0.1:8000/entries/${id}/`, detail)
      .then((response) => {
        console.log(response);
        setEditing(false);
        console.log("수정 모드 off");
        navigate("/");
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
          {editing ? (
            // 수정 모드일 경우 (input/areatext로 변경)
            <>
              {" "}
              <AuthorEdit placeholder={detail.author}></AuthorEdit>
              <Time>{detail.timestamp}</Time>
              <CommentEdit placeholder={detail.comment}></CommentEdit>
              <BtnLine>
                <Button
                  txt={"수정 저장하기"}
                  fontSize={"30px"}
                  onBtnClick={onEditSave}
                />
                <Button txt={"삭제"} fontSize={"30px"} onBtnClick={onDelete} />
              </BtnLine>
            </>
          ) : (
            // 수정 모드가 아닌 경우 (원래 정보 출력)
            <>
              {" "}
              <Author>{detail.author}</Author>
              <Time>{detail.timestamp}</Time>
              <Comment>{detail.comment}</Comment>
              <BtnLine>
                <Button txt={"수정"} fontSize={"30px"} onBtnClick={onEdit} />
                <Button txt={"삭제"} fontSize={"30px"} onBtnClick={onDelete} />
              </BtnLine>
            </>
          )}
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
const AuthorEdit = styled.input`
  text-align: center;
  font-size: 50px;
  font-weight: 700;
`;

const CommentEdit = styled.textarea`
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  margin: 50px 0;
  resize: vertical;
`;
const BtnLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 20px;
`;
