import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Die from "./Die";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>lucky N game</h1>

      <Die val={2} />
    </>
  );
}

export default App;
