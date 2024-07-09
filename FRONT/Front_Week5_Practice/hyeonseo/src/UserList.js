import React from "react";

const User = ({ user }) => {
  return (
    <div>
      <b>{user.username}</b>
      <span>({user.email})</span>
    </div>
  );
};

const UserList = () => {
  const users = [
    { id: 1, username: "sookmyung", email: "sookmyung@example.com" },
    { id: 2, username: "mutsa", email: "likelionsmwu@example.com" },
    { id: 3, username: "hyeonseo", email: "chss0520@sookmyung.com" },
  ];

  return (
    <div>
      <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} />
    </div>
  );
};

export default UserList;
