import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const WritePage = () => {
  const navigate = useNavigate();
  const [author, setAuthor] = useState("");
  const [comment, setComment] = useState("");
  const [pictures, setPictures] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePictureChange = (event) => {
    const files = Array.from(event.target.files);
    const newPictures = files.map((file) => URL.createObjectURL(file));
    setPictures(newPictures);
    setCurrentIndex(0); // 처음 사진으로 초기화
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : pictures.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < pictures.length - 1 ? prevIndex + 1 : 0
    );
  };

  const onChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const onChangeComment = (e) => {
    setComment(e.target.value);
  };

  const postComment = () => {
    axios
      .post("http://127.0.0.1:8000/entries/", {
        author: author,
        comment: comment,
      })
      .then((response) => {
        console.log(response);
        alert("작성이 완료되었습니다.");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert("작성에 실패했습니다");
      });
  };

  return (
    <Wrapper>
      <InputTitle>이름</InputTitle>
      <StyledInput
        placeholder="이름을 입력해주세요."
        value={author}
        onChange={onChangeAuthor}
      />{" "}
      <InputTitle>사진</InputTitle>
      <Container>
        <Label htmlFor="fileInput">사진 선택</Label>
        {pictures.length > 0 && (
          <ImagePreview>
            <SlideButton left onClick={handlePrev}>
              ‹
            </SlideButton>
            <Image src={pictures[currentIndex]} alt="Selected" />
            <SlideButton onClick={handleNext}>›</SlideButton>
          </ImagePreview>
        )}
        <FileInput
          type="file"
          accept="image/*"
          multiple
          id="fileInput"
          onChange={handlePictureChange}
        />
      </Container>
      <InputTitle>내용</InputTitle>
      <StyledTxtarea
        placeholder="방명록 내용을 입력해주세요."
        value={comment}
        onChange={onChangeComment}
      />
      <BtnDiv>
        <Button txt={"작성하기"} onBtnClick={postComment} />
      </BtnDiv>
    </Wrapper>
  );
};

export default WritePage;

const Wrapper = styled.div`
  margin-top: 50px;
`;

const InputTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  background-color: white;
  padding: 10px 30px;
  border-radius: 15px;
  width: 300px;
  height: 50px;
  font-size: 18px;
  font-weight: 700;
  margin: 10px 0 30px 0;
  &::placeholder {
    color: #acacac;
    font-weight: 700;
  }
`;

const StyledTxtarea = styled.textarea`
  border: none;
  outline: none;
  width: calc(100% - 60px);
  height: 200px;
  background-color: white;
  padding: 30px;
  border-radius: 15px;
  font-size: 18px;
  font-weight: 700;
  margin-top: 10px;
  resize: none;
  &::placeholder {
    color: #acacac;
    font-weight: 700;
  }
`;

const BtnDiv = styled.div`
  margin-top: 50px;
  display: flex;
  > Button {
    margin-left: auto;
  }
`;

const Container = styled.div`
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 40px;
`;

const ImagePreview = styled.div`
  border-radius: 30px;
  display: flex;
  overflow: hidden;
  width: calc(100% - 60px);
  max-width: 600px;
  max-height: 400px;
  margin-top: 31px;
  margin-bottom: 20px;
  position: relative;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const SlideButton = styled.button`
  font-size: 30px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  ${(props) => (props.left ? "left: 10px;" : "right: 10px;")}
  &:hover {
    background-color: #f0873e;
  }
`;

const FileInput = styled.input`
  display: none;
`;

const Label = styled.label`
  font-weight: 700;
  font-size: 20px;
  border-radius: 30px;
  padding: 15px 40px;
  border: none;
  background-color: #2a2a2a;
  color: white;
  cursor: pointer;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: #f0873e;
  }
`;
