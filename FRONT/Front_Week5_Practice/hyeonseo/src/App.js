import "./App.css";
import InputSample from "./InputSample";
import UserList from "./UserList";

function App() {
  const users = [
    { id: 1, username: "sookmyung", email: "sookmyung@example.com" },
    { id: 2, username: "mutsa", email: "likelionsmwu@example.com" },
    { id: 3, username: "hyeonseo", email: "chss0520@sookmyung.com" },
  ];
  return (
    <>
      <InputSample />;
      <br />
      <hr />
      {/* <UserList /> */}
      <UserList users={users} />
    </>
  );
}

export default App;
