import React, { useState } from "react";
import styled from "styled-components";
// import { Container } from "./MySite";

const Container = styled.div`
  padding: 40px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #045fb4;
  border-radius: 40px;
  margin-bottom: 40px;
  background: #e1ecfe;
`;

const ProfilePicture = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 5px;
  border: 2px solid #879df7;
`;

const ProName = styled.p`
  font-size: 23px;
  background: white;
  margin-bottom: 3px;
  color: #045fb4;
  border: 2px dashed #045fb4;
  padding: 8px 25px;
  border-radius: 30px;
`;

const ProSub = styled.p`
  font-size: 18px;
  margin-bottom: 0px;
`;

const ToDoForm = styled.form`
  margin-bottom: 20px;
`;

const ToDoInput = styled.input`
  padding: 10px;
  margin-right: 10px;
`;

const ToDoList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ToDoItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  &.completed span {
    text-decoration: line-through;
  }

  button {
    margin-left: 10px;
  }
`;

const MySite = () => {
  return (
    <Container>
      <ProfilePicture src="img/profile.png" alt="Profile" />
      <ProName>한해의 절반을 보내며...</ProName>
      <ProSub>^^아 둥근해 미친거 또 떳네^^</ProSub>
    </Container>
  );
};

export default MySite;
export { Container };
