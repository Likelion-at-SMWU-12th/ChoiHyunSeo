import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Comment = () => {
  const navigate = useNavigate();
  const [commnets, setCommnets] = useState([]);
  const getCommnet = () => {
    axios
      // 메소드를 입력해주어야 함
      .get("http://127.0.0.1:8000/entries/")
      // 오류 없이 응답이 잘 도착했을 경우
      .then((response) => {
        console.log(response.data);
        setCommnets(response.data.reverse());
      })
      // 에러가 발생했을 경우
      .catch((error) => {
        console.log(error);
      });
  };

  // 최초 렌더링 시, 한 번만 getComment 함수를 진행함
  useEffect(() => {
    getCommnet();
  }, []);

  return (
    <>
      {/* 방명록 배열을 저장한 commnets를 map으로 보여주기 */}
      {commnets.map((comment) => (
        // navigate를 사용하면 로컬에서 넘어가는 것
        <CommentBox
          key={comment.id}
          onClick={() => navigate(`/comment/${comment.id}`)}
        >
          <Author>{comment.author}</Author>
          <Time>{comment.timestamp}</Time>
          <CommentTxt>{comment.comment}</CommentTxt>
          <ImagePreview>{comment.picture}</ImagePreview>
        </CommentBox>
      ))}
    </>
  );
};

export default Comment;

const CommentBox = styled.div`
  transition: background-color 0.3s ease;
  width: 100%;
  height: 100px;
  margin-bottom: 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  padding: 50px;
  background-color: white;
  &:hover {
    cursor: pointer;
    color: #f0873e;
    box-shadow: 0 0 10px rgba(238, 110, 67, 0.727);
    background-color: #fef5f0;
    > span {
      color: #ffcca8;
    }
  }
`;
const Author = styled.div`
  font-size: 30px;
  font-weight: 700;
`;
const Time = styled.span`
  font-size: 15px;
  color: #c8c8c8;
  font-weight: 600;
  margin-top: 5px;
`;
const CommentTxt = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-top: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;

const ImagePreview = styled.img`
  width: 100px;
  text-align: center;
`;
