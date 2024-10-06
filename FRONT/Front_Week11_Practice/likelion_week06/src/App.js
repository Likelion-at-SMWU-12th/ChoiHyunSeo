import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Redirection from "./Redirection";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/oauth2" element={<Redirection />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
