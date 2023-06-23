import { useState } from "react";

export default function ScoreKeeper({ players, maxScore }) {
  const initScores = new Array(players).fill(0);
  const [scores, setScore] = useState(initScores);

  const addOne = (index) => {
    setScore((prevScores) => {
      return prevScores.map((score, i) => {
        if (index === i) {
          return score + 1;
        }
        return score;
      });
    });
  };

  return (
    <div>
      <ul>
        {scores.map((score, index) => (
          <li key={index}>
            Player {index + 1} : {score}
            <button
              onClick={() => {
                test();
                addOne(index);
              }}
            >
              +1
            </button>
            {score === maxScore && "WINNER"}
          </li>
        ))}
      </ul>
    </div>
  );
}
