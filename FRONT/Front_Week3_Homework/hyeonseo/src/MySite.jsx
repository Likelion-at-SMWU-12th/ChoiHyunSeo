import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 40px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2.5px solid #045fb4;
  border-radius: 40px;
  margin-bottom: 40px;
  background: #e1ecfe;
`;

const ProfilePicture = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 3px solid #879df7;
`;

const ProName = styled.p`
  font-size: 23px;
  background: white;
  margin-bottom: 30px;
  margin-top: 0px;
  color: #045fb4;
  border: 2px dashed #045fb4;
  padding: 8px 25px;
  border-radius: 30px;
`;

const ProSub = styled.p`
  font-size: 18px;
  margin: 0px;
`;

const MySite = () => {
  return (
    <Container>
      {/* 프로필 설정 */}
      <ProName>☁️ 프로필 ☁️</ProName>
      <ProfilePicture src="img/profile.png" alt="Profile" />
      <h2>Skkr 중독자</h2>
      <ProSub>^^ 아 둥근해 미친거 또 떳네 ^^</ProSub>
    </Container>
  );
};

export default MySite;
export { Container, ProName, ProSub };
