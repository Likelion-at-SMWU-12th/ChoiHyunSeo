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

  &:hover {
    background-color: #045fb4;
    color: white;
  }
`;

const ToDoCompleteButton = styled.button`
  padding: 5px 8px;
  margin-right: 10px;
  border-radius: 30px;
  border: 1.2px solid black;

  &:hover {
    background-color: #045fb4;
    color: white;
    border: 1.2px solid white;
  }
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
  const [toDos, setToDos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleToDoSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim() !== "") {
      setToDos([...toDos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const completeToDo = (index) => {
    const updatedToDos = toDos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setToDos(updatedToDos);
  };

  const ToDoItem = ({ children, completed, onComplete }) => {
    return (
      <ToDoItemContainer completed={completed}>
        <span className={completed ? "completed" : ""}>{children}</span>
        <ToDoCompleteButton onClick={onComplete}>✅</ToDoCompleteButton>
      </ToDoItemContainer>
    );
  };

  return (
    <div>
      <Container>
        <ProName2>What we need to do today!</ProName2>
        <ToDoForm onSubmit={handleToDoSubmit}>
          <ToDoInput
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter your todo"
          />
          <ToDoInputButton type="submit">Add</ToDoInputButton>
        </ToDoForm>

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
