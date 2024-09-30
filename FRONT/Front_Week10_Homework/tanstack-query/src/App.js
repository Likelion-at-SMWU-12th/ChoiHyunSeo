import "./App.css";
import { useQuery } from "@tanstack/react-query";

function App() {
  // getPosts 함수
  // fetch를 통해 데이터를 받아오고, json 형태의 response를 리턴
  async function getPosts() {
    const response = await fetch(`https:jsonplaceholder.typicode.com/posts`);
    return await response.json();
  }
  // useQuery의 반환 객체
  // useQuery가 반환하는 객체를 queryResult로 정의

  // queryKey : 쿼리를 식별하는 고유키 → [“posts”]
  // queryFn : 서버나 API에 요청하는 함수 → getPosts
  const queryResult = useQuery({ queryKey: ["post"], queryFn: getPosts });
  console.log("queryResult", queryResult);
  return <div>tanstack query 실습하기</div>;
}

export default App;
