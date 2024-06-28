// input창에 이름을 입력했을 때, 존재하는 이름인지 확인하기 위하여 useState 추가
import React, { useState } from "react";

const Hello = () => {
  const [name, setName] = useState("");

  // 입력 필드의 값이 변경될 때에 호출되어 상태를 업데이트
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const containerStyle = {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  };

  const inputStyle = {
    margin: "20px",
    fontSize: "20px",
    color: "white",
    background: "#0B2161",
    border: "0px",
    padding: "10px",
    borderRadius: "30px",
    textAlign: "center",
    boxShadow: "0 1px 10px #045fb4",
  };

  const pStyle1 = {
    fontSize: "20px",
    color: "black",
    borderRadius: "30px",
  };

  const pStyle2 = {
    fontSize: "20px",
    color: "black",
    borderRadius: "30px",
  };

  return (
    <div style={containerStyle}>
      <input
        style={inputStyle}
        type="text"
        value={name}
        placeholder="암호명을 입력하세요"
        onChange={handleChange}
      ></input>
      <br />
      <>
        {name === "고양이지대조아" ? (
          <>
            <p style={pStyle2}>조지냥! 야옹이의 페이지입니다!</p>
          </>
        ) : (
          <>고양이를 좋아하지 않는다면 출입할 수 없습니다!!</>
        )}
      </>
    </div>
  );
};

export default Hello;
