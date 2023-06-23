import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>clicked this many times:{count}</p>
      <button onClick={updateCount}>update count</button>
    </div>
  );
};
export default Counter;
