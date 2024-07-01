import React, { useState } from "react";
import { Container, ProName } from "./MySite";
import styled from "styled-components";

const ToDoForm = styled.form`
  margin-bottom: 0px;
`;

const ToDoInput = styled.input`
  padding: 10px 25px;
  margin-top: 20px;
  margin-right: 10px;
  border-radius: 30px;
  border: 1.2px solid black;
`;

const ToDoInputButton = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  margin-right: 10px;
  border-radius: 30px;
  border: 1.2px solid black;

  /* 호버 시 스타일 */
    &:hover {
      background-color: #045fb4;
      color: white;
`;

const ToDoCompleteButton = styled.button`
  padding: 5px 8px;
  margin-right: 10px;
  border-radius: 30px;
  border: 1.2px solid black;

  /* 호버 시 스타일 */
    &:hover {
      background-color: #045fb4;
      color: white;
      border: 1.2px solid white;
`;

const ToDoList = styled.ul`
  list-style: none;
  margin-bottom: 0px;
  padding: 0;
`;

const ToDoItemContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 18px;
  color: #045fb4;

  span {
    flex-grow: 1;
    text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  }
`;

const ProName2 = styled(ProName)`
  font-size: 23px;
  margin-top: 0px;
  margin-bottom: 0px;
  padding: 8px 50px;
  background: #045fb4;
  color: white;
  border: 2px solid white;
`;

const Todo = () => {
  // toDos 배열과 inputValue 선언
  const [toDos, setToDos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // 할 일 입력할 때
  const handleToDoSubmit = (event) => {
    event.preventDefault();

    // 공백일 경우네는 추가하지 않음
    if (inputValue.trim() !== "") {
      // 기존 toDos 배열에 새로운 할 일 객체를 추가 -> 상태 업데이트
      setToDos([...toDos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const completeToDo = (index) => {
    // toDos 배열을 map 메서드를 사용하여 새로운 배열로 변환
    const updatedToDos = toDos.map((todo, i) =>
      // 현재 인덱스와 매개변수로 받은 인덱스가 일치하는 경우
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    // 변환된 배열을 setToDos를 통해 상태로 업데이트
    setToDos(updatedToDos);
  };

  const ToDoItem = ({ children, completed, onComplete }) => {
    return (
      <ToDoItemContainer completed={completed}>
        <span className={completed ? "completed" : ""}>{children}</span>
        {/* styled-components를 사용할 때는 margin-left 속성을 직접 적용할 수 있습니다 */}
        <ToDoCompleteButton onClick={onComplete} style={{ marginLeft: "20px" }}>
          ✅
        </ToDoCompleteButton>
      </ToDoItemContainer>
    );
  };

  return (
    <div>
      <Container>
        <ProName2>What we need to do today!</ProName2>
        {/* 투두 추가 기능 */}
        <ToDoForm onSubmit={handleToDoSubmit}>
          <ToDoInput
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter your todo"
          />
          <ToDoInputButton type="submit">Add</ToDoInputButton>
        </ToDoForm>

        {/* 투두 리스트 기능 */}
        <ToDoList>
          {toDos.map((todo, index) => (
            <ToDoItem
              key={index}
              completed={todo.completed}
              onComplete={() => completeToDo(index)}
            >
              {todo.text}
            </ToDoItem>
          ))}
        </ToDoList>
      </Container>
    </div>
  );
};
export default Todo;
export {
  Container,
  ToDoInput,
  ToDoInputButton,
  ToDoForm,
  ToDoList,
  ToDoItemContainer,
  ToDoCompleteButton,
};
