import "./App.css";
import Counter from "./Counter";
import Hello from "./Hello";
import Info from "./Info";
function App() {
  return (
    <>
      <Info />
      <Hello name="고양이지대조아" color="blue" />
      <Counter />
    </>
  );
}

export default App;
