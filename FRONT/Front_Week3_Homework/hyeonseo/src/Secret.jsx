import React from "react";
import styled from "styled-components";

const StyledICONImg = styled.img`
  padding: 6px 12px;
  border: 1.8px solid black;
  margin: 5px;
  height: 80px;
  width: 80px;
  border-radius: 20px;
  background-color: ${(props) => props.background || "#F6CECE"};
`;

const Secret = () => {
  const name1 = "cat";
  const name2 = "ham";
  const name3 = "cat";
  const name4 = "ham";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ marginRight: "20px" }}>
        <StyledICONImg src="./img/cat1.png" />
        <br />
        {name1 === "cat" ? <>고양이가 맞습니다 </> : <>고양이가 아닙니다 </>}
      </div>
      <div style={{ marginRight: "20px" }}>
        <StyledICONImg src="./img/ham1.png" background="#F5D0A9" />
        <br />
        {name2 === "cat" ? <>고양이가 맞습니다 </> : <>고양이가 아닙니다 </>}
      </div>
      <div style={{ marginRight: "20px" }}>
        <StyledICONImg src="./img/cat2.png" background="#F5F6CE" />
        <br />
        {name3 === "cat" ? <>고양이가 맞습니다 </> : <>고양이가 아닙니다 </>}
      </div>
      <div>
        <StyledICONImg src="./img/ham2.png" background="#A9E2F3" />
        <br />
        {name4 === "cat" ? <>고양이가 맞습니다 </> : <>고양이가 아닙니다 </>}
      </div>
    </div>
  );
};

export default Secret;
export { StyledICONImg };
