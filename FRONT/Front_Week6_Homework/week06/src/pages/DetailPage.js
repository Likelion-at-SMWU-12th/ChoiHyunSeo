import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const DetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const [editing, setEditing] = useState(false); // 수정 모드 여부를 boolean 값으로 설정

  const getDetail = () => {
    axios
      .get(`http://127.0.0.1:8000/entries/${id}/`)
      .then((response) => {
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
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onEdit = () => {
    setEditing(true); // 수정 모드로 변경
  };

  const onEditSave = () => {
    axios
      .put(`http://127.0.0.1:8000/entries/${id}/`, detail)
      .then((response) => {
        setEditing(false); // 수정 모드 종료
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
            <>
              <AuthorEdit
                value={detail.author}
                onChange={(e) =>
                  setDetail({ ...detail, author: e.target.value })
                }
              />
              <Time>{detail.timestamp}</Time>
              <CommentEdit
                value={detail.comment}
                onChange={(e) =>
                  setDetail({ ...detail, comment: e.target.value })
                }
              />
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
            <>
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
  width: calc(100% - 80px);
  height: fit-content;
  background-color: white;
  border-radius: 20px;
  padding: 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const DetailDiv = styled.div``;
const Author = styled.div`
  font-size: 30px;
  font-weight: 700;
`;
const Time = styled.div`
  color: #c8c8c8;
  font-weight: 600;
  margin-top: 15px;
  font-size: 15px;
`;
const Comment = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin: 50px 0;
`;
const AuthorEdit = styled.input`
  padding: 10px;
  border: 0;
  border-radius: 30px;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  box-shadow: 0 0 10px rgba(128, 128, 128, 0.727);
  &:focus {
    outline: none; /* 포커스 시 outline 제거 */
  }
`;
const CommentEdit = styled.textarea`
  padding: 10px;
  border: 0;
  border-radius: 20px;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  box-shadow: 0 0 10px rgba(128, 128, 128, 0.727);

  &:focus {
    outline: none; /* 포커스 시 outline 제거 */
  }
  text-align: center;
  font-size: 20px;
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
