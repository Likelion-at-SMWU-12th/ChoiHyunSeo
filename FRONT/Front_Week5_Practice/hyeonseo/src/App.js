import React, { useCallback, useRef, useState } from "react";
// import InputSample from "./InputSample";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function App() {
  const [inputs, setInputs] = useState({ username: "", email: "" });

  const { username, email } = inputs;

  const onChange = useCallback(
    (e) => {
      const { value, name } = e.target;
      setInputs({ ...inputs, [name]: value });
    },
    [inputs]
  );

  // const onChange = (e) => {
  //   const { value, name } = e.target;
  //   setInputs({ ...inputs, [name]: value });
  // };
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "sookmyung",
      email: "sookmyung@example.com",
      active: true,
    },
    {
      id: 2,
      username: "mutsa",
      email: "likelionsmwu@example.com",
      active: false,
    },
    {
      id: 3,
      username: "hyeonseo",
      email: "chss0520@sookmyung.com",
      active: false,
    },
  ]);

  const nextId = useRef(4);

  const onCreate = useCallback(() => {
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
    // 추가할 때마다 다음 배열에 추가함
    nextId.current += 1;
  }, [username, email]);

  const onRemove = useCallback(
    (id) => {
      setUsers(users.filter((user) => user.id !== id));
    },
    [users]
  );

  // 활성화가 되었는지, 아닌지 알아보기 위한 함수
  const onToggle = useCallback(
    (id) => {
      setUsers(
        users.map((user) =>
          user.id === id ? { ...user, active: !user.active } : user
        )
      );
    },
    [users]
  );

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
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default App;
