import React, { useState } from "react";
import {
  Container,
  ToDoInput,
  ToDoInputButton,
  ToDoForm,
  ToDoList,
  ToDoItemContainer,
  ToDoCompleteButton,
} from "./Todo";
import styled from "styled-components";
import { ProName } from "./MySite";

const ProName2 = styled(ProName)`
  margin-bottom: 10px;
`;

const GuestBookInput = styled(ToDoInput)`
  padding: 10px 25px;
  margin-top: 0px;
  margin-right: 10px;
  border-radius: 30px;
  border: 1.2px solid black;
`;

const GuestBookList = styled(ToDoList)``;

const GuestBookItem = styled(ToDoItemContainer)`
  margin-left: 20px;
`;

const GuestBook = () => {
  // 방명록 메시지 목록을 관리 및 입력창 관리
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // 방명록 입력할 때
  const handleToDoSubmit = (event) => {
    event.preventDefault();

    // 공백일 경우네는 추가하지 않음
    if (inputValue.trim() !== "") {
      // 기존 toDos 배열에 새로운 할 일 객체를 추가 -> 상태 업데이트
      setMessages([...messages, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  // 방명록 메시지를 추가
  const addMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, inputValue]);
      setInputValue("");
    }
  };

  // 방명록 메시지를 삭제
  const deleteMessage = (index) => {
    // 콜백 함수 사용 _ 삭제하는 부분은 잘 모르겠어서 우선 인터넷에 있는 코드 사용함
    const updatedMessages = messages.filter((_, i) => i !== index);
    setMessages(updatedMessages);
  };

  return (
    <Container>
      <ProName2>📋 방명록 📋</ProName2>
      {/* 방명록 입력 폼 */}
      <ToDoForm onSubmit={handleToDoSubmit}>
        <GuestBookInput
          type="text"
          placeholder="메시지를 입력하세요"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <ToDoInputButton onClick={addMessage}>Add</ToDoInputButton>
      </ToDoForm>

      {/* 방명록 메시지 목록 */}
      <GuestBookList>
        {messages.map((message, index) => (
          <GuestBookItem key={index}>
            <span>{message}</span>
            <ToDoCompleteButton
              onClick={() => deleteMessage(index)}
              style={{ marginLeft: "20px" }}
            >
              ❌
            </ToDoCompleteButton>
          </GuestBookItem>
        ))}
      </GuestBookList>
    </Container>
  );
};

export default GuestBook;
