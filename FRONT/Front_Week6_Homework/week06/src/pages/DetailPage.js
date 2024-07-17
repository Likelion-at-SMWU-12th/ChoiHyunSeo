import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const DetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const [editing, setEditing] = useState(false); // 수정 모드 상태 저장
  const [pictures, setPictures] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 사진 선택 시 처리 함수
  const handlePictureChange = (event) => {
    const files = Array.from(event.target.files);
    const newPictures = files.map((file) => URL.createObjectURL(file));
    setPictures(newPictures);
    setCurrentIndex(0); // 처음 사진으로 초기화
  };

  // 이전 사진 보기 처리 함수
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : pictures.length - 1
    );
  };

  // 다음 사진 보기 처리 함수
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < pictures.length - 1 ? prevIndex + 1 : 0
    );
  };

  // 방명록 데이터 가져오기
  const getDetail = () => {
    axios
      .get(`http://127.0.0.1:8000/entries/${id}/`)
      .then((response) => {
        setDetail(response.data);
        // 기존 사진 정보를 불러와서 설정
        if (response.data.pictures) {
          const existingPictures = response.data.pictures.map(
            (pictureUrl) => `${axios.defaults.baseURL}${pictureUrl}`
          );
          setPictures(existingPictures);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 삭제 처리 함수
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

  // 수정 모드로 전환 처리 함수
  const onEdit = () => {
    setEditing(true); // 수정 모드로 변경
  };

  // 수정 내용 저장 처리 함수
  const onEditSave = () => {
    axios
      .put(`http://127.0.0.1:8000/entries/${id}/`, detail)
      .then((response) => {
        setEditing(false); // 수정 모드 종료
        navigate();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 홈으로 돌아가기 처리 함수
  const goHome = () => {
    navigate("/");
  };

  // 페이지 로드 시 한 번만 방명록 데이터 가져오기
  useEffect(() => {
    getDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Wrapper>
      <Button txt={"방명록 작성하기"} onBtnClick={() => navigate("/write")} />
      <DetailWrapper>
        <DetailDiv>
          {editing ? (
            <>
              {/* 작성자 정보 수정 */}
              <AuthorEdit
                value={detail.author}
                onChange={(e) =>
                  setDetail({ ...detail, author: e.target.value })
                }
              />
              {/* 시간 출력 */}
              <Time>{detail.timestamp}</Time>
              {/* 사진 추가 및 미리보기 */}
              <Container>
                {pictures.length > 0 && (
                  <ImagePreview>
                    <SlideButton left onClick={handlePrev}>
                      ‹
                    </SlideButton>
                    <Image src={pictures[currentIndex]} alt="Selected" />
                    <SlideButton onClick={handleNext}>›</SlideButton>
                  </ImagePreview>
                )}
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handlePictureChange}
                />
              </Container>
              {/* 내용 수정 */}
              <CommentEdit
                rows="10"
                value={detail.comment}
                onChange={(e) =>
                  setDetail({ ...detail, comment: e.target.value })
                }
              />
              <BtnLine>
                <Button
                  txt={"수정 저장하기"}
                  fontSize={"20px"}
                  onBtnClick={onEditSave}
                />
                <Button txt={"삭제"} fontSize={"20px"} onBtnClick={onDelete} />{" "}
                <Button
                  txt={"돌아가기"}
                  fontSize={"20px"}
                  onBtnClick={goHome}
                />
              </BtnLine>
            </>
          ) : (
            <>
              <Author>{detail.author}</Author>
              <Time>{detail.timestamp}</Time>
              <Comment>{detail.comment}</Comment>
              <BtnLine>
                <Button txt={"수정"} fontSize={"20px"} onBtnClick={onEdit} />
                <Button txt={"삭제"} fontSize={"20px"} onBtnClick={onDelete} />
                <Button
                  txt={"돌아가기"}
                  fontSize={"20px"}
                  onBtnClick={goHome}
                />
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
    outline: none;
  }
`;

const CommentEdit = styled.textarea`
  padding: 10px;
  border: 0;
  border-radius: 20px;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin: 50px 0;
  resize: vertical;
  height: auto;
  &:focus {
    outline: none;
  }
`;

const BtnLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const ImagePreview = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  max-width: 600px;
  max-height: 400px;
  margin-bottom: 20px;
  position: relative;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const SlideButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  ${(props) => (props.left ? "left: 10px;" : "right: 10px;")}
`;
