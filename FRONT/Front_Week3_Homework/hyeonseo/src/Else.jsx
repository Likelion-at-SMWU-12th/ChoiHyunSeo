import React from "react";
import styled from "styled-components";
import { StyledICONImg } from "./Secret";

const Else = () => {
  const name5 = "cat";
  const name6 = "dog";
  const name7 = "cat";
  const name8 = "dog";
  const StyledICONImg2 = styled(StyledICONImg)`
    border: 1.8px solid blue;
  `;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ marginRight: "20px" }}>
        <StyledICONImg2 src="./img/cat3.png" background="#A9E2F3" />
        <br />
        {name5 === "cat" ? <>고양이가 맞습니다 </> : <>고양이가 아닙니다 </>}
      </div>

      <div style={{ marginRight: "20px" }}>
        <StyledICONImg2 src="./img/dog1.png" background="#F5F6CE" />
        <br />
        {name6 === "cat" ? <>고양이가 맞습니다 </> : <>고양이가 아닙니다 </>}
      </div>

      <div style={{ marginRight: "20px" }}>
        <StyledICONImg2 src="./img/cat4.png" background="#F5D0A9" />
        <br />
        {name7 === "cat" ? <>고양이가 맞습니다 </> : <>고양이가 아닙니다 </>}
      </div>

      <div>
        <StyledICONImg2 src="./img/dog2.png" />
        <br />
        {name8 === "cat" ? <>고양이가 맞습니다 </> : <>고양이가 아닙니다 </>}
      </div>
    </div>
  );
};

export default Else;
