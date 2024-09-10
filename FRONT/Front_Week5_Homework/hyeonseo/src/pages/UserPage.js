import React, { useState } from "react";
import "./UserPage.css";

const UserPage = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    message: "",
  });
  const [guestbook, setGuestbook] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 새로운 방명록 항목을 생성
    const newEntry = {
      id: Date.now(),
      name: userInfo.name,
      message: userInfo.message,
    };

    setGuestbook([...guestbook, newEntry]);
    setUserInfo({ name: "", message: "" });
  };

  return (
    <div>
      <h2 className="hi1">간단하게 현서에게 한마디!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          이름:
          <input
            className="input_message"
            type="text"
            name="name"
            value={userInfo.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          한마디:
          <input
            type="text"
            name="message"
            className="input_message"
            value={userInfo.message}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <button className="buttonsubmit" type="submit">
          추가하기
        </button>
      </form>
      <Guestbook entries={guestbook} />
    </div>
  );
};

const Guestbook = ({ entries }) => {
  return (
    <div className="show_message">
      <h3 className="hi2">방명록</h3>
      <ul>
        {entries.map((entry) => (
          <li className="cut" key={entry.id}>
            <p>이름: {entry.name}</p>
            <p>한마디: {entry.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPage;
