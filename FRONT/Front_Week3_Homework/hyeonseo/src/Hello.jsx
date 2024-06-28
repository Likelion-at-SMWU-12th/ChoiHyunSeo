// input창에 이름을 입력했을 때, 존재하는 이름인지 확인하기 위하여 useState 추가
import React, { useState } from "react";

const Hello = ({ setShowOtherComponent }) => {
  const [name, setName] = useState("");

  // 입력 필드의 값이 변경될 때에 호출되어 상태를 업데이트
  const handleChange = (e) => {
    const inputName = e.target.value;
    setName(inputName);

    if (inputName === "고양이지대조아") {
      setShowOtherComponent(true);
    } else {
      setShowOtherComponent(false);
    }
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
            <br />
            <h1>Welcome to the {name}'s Board!</h1>
          </>
        ) : (
          <>If you don't like cats, you can't enter!!</>
        )}
      </>
    </div>
  );
};

export default Hello;
