import "./App.css";
import React, { useRef, useState } from "react";
import InputSample from "./InputSample";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function App() {
  const [inputs, setInputs] = useState({ username: "", email: "" });

  const { username, email } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const [users, setUsers] = useState([
    { id: 1, username: "sookmyung", email: "sookmyung@example.com" },
    { id: 2, username: "mutsa", email: "likelionsmwu@example.com" },
    { id: 3, username: "hyeonseo", email: "chss0520@sookmyung.com" },
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers(users.concat(user));

    setInputs({
      username: "",
      email: "",
    });
    nextId.current += 1;
  };
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <br />
      <hr />
      <UserList users={users} />
    </>
  );
}

export default App;
