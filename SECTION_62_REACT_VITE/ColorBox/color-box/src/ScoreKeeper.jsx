import { useState } from "react";

export default function ScoreKeeper() {
  const [score, setScore] = useState({ p1Score: 0, p2Score: 0 });

  const updatePlayer1 = () => {
    setScore((oldScores) => {
      return { ...oldScores, p1Score: oldScores.p1Score + 1 };
    });
  };
  const updatePlayer2 = () => {
    setScore((oldScores) => {
      return { ...oldScores, p2Score: oldScores.p2Score + 1 };
    });
  };

  return (
    <div>
      <p>player 1 score {score.p1Score}</p>
      <p>player 2 score {score.p2Score}</p>
      <button onClick={updatePlayer1}>+1 player 1</button>
      <button onClick={updatePlayer2}>+1 player 2</button>
    </div>
  );
}
