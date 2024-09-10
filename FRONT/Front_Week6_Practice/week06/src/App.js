import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import CommentPage from "./pages/CommentPage";
import WritePage from "./pages/WritePage";
import DetailPage from "./pages/DetailPage";

function App() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Title onClick={() => navigate("/")}>숙멋 프론트의 방명록 🦁</Title>
      {/* 핵심은 이 부분!!! */}
      <Routes>
        <Route path="/" element={<CommentPage />} />
        <Route path="/write" element={<WritePage />} />
        {/* 고유한 방명록들을 구별하기 위해 id값으로 경로를 다르게 해 줌  - DOM에서 지원함 */}
        <Route path="/comment/:id" element={<DetailPage />} />
      </Routes>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  padding: 80px 100px;
  width: calc(100vw - 200px);
  background-color: #f0f0f0;
  min-height: 100vh;
`;
const Title = styled.div`
  font-size: 50px;
  font-weight: bolder;
  cursor: pointer;
`;
