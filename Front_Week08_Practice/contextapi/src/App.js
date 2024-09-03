import { Route, Routes } from "react-router";
import ReviewPage from "./pages/ReviewPage";
import CreatePage from "./pages/CreatePage";
import ToggleBtn from "./components/ToggleBtn";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ReviewPage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
      <ToggleBtn />
    </>
  );
}

export default App;
