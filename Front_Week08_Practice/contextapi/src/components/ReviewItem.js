import React from "react";
import styled from "styled-components";
import { useTheme } from "../contexts/ThemeContext";
import { themeStyle } from "../dict/dict";

const ReviewItem = ({ title, comment, img }) => {
  const { theme } = useTheme();
  return (
    <ReviewDiv
      bgColor={themeStyle[theme]["bgColor"]}
      textColor={themeStyle[theme]["textColor"]}
    >
      <img src={img} alt="movieimg" />
      <div>
        <div className="title">{title || "제목"}</div>
        <div className="comment">{comment || "리뷰"}</div>
        <div style={{ display: "flex" }} className="btnline">
          <button>수정하기</button>
          <button>삭제하기</button>
        </div>
      </div>
    </ReviewDiv>
  );
};

export default ReviewItem;

const ReviewDiv = styled.div`
  display: flex;
  padding: 30px;
  border: ${(props) => props.borderColor};
  border-radius: 20px;
  gap: 0 20px;
  position: relative;
  margin-bottom: 30px;
  img {
    height: 200px;
  }
  .title {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .comment {
    font-size: 15px;
  }
  .btnline {
    position: absolute;
    right: 30px;
    bottom: 30px;
    gap: 0 10px;
  }
`;
