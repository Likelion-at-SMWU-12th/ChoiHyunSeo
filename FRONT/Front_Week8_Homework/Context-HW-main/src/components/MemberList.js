import React from "react";
import { styled } from "styled-components";
import member from "../sookmut";

const MemberList = ({ part }) => {
  const memberlist = part
    ? member.filter((member) => member.part === part)
    : member;

  return (
    <List>
      {memberlist.map((mem) => (
        <Item>
          <div className="name">🦁 {mem.name}</div>
          <div className={mem.role === "아기사자" ? "baby" : "adult"}>
            {mem.role}
          </div>
        </Item>
      ))}
    </List>
  );
};

export default MemberList;

const List = styled.div`
  width: 100%;
  padding: 50px 100px;
`;
const Item = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: 500;
  gap: 0 10px;
  margin-bottom: 10px;
  align-items: center;
  .baby {
    width: 60px;
    color: white;
    background-color: #ee7521;
    font-size: 15px;
    font-weight: 700;
    padding: 10px 15px;
    border-radius: 30px;
    text-align: center;
  }
  .adult {
    width: 60px;
    background-color: #ffe5c5;
    font-size: 15px;
    font-weight: 700;
    padding: 10px 15px;
    border-radius: 30px;
    text-align: center;
  }
`;
