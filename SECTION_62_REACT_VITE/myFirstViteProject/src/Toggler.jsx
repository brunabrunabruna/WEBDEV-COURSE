import { useState } from "react";
import "./Toggler.css";
export default function Toggler() {
  const [isHappy, setIsHappy] = useState(true);
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 2);
  const toggleIsHappy = () => setIsHappy(!isHappy);
  return (
    <div>
      <p className="Toggler" onClick={toggleIsHappy}>
        {isHappy ? "😊" : "😓"}
      </p>
      <p>{count}</p>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}
