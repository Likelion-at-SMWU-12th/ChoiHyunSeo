import "./App.css";
import { useQuery } from "@tanstack/react-query";

function App() {
  async function getPosts() {
    const response = await fetch(`https:jsonplaceholder.typicode.com/posts`);
    return await response.json();
  }
  const queryResult = useQuery({ queryKey: ["post"], queryFn: getPosts });
  console.log("queryResult", queryResult);
  return <div>tanstack query 실습하기</div>;
}

export default App;
