const player1 = {
  display: document.querySelector("#score-player1"),
  button: document.querySelector("#player1"),
  score: 0,
};

const player2 = {
  display: document.querySelector("#score-player2"),
  button: document.querySelector("#player2"),
  score: 0,
};

// const player1 = document.querySelector("#player1");
// const player2 = document.querySelector("#player2");
// const scorePlayer1 = document.querySelector("#score-player1");
// const scorePlayer2 = document.querySelector("#score-player2");
const reset = document.querySelector("#reset");
//
const maxScoreDropdown = document.querySelector("#max-score");
let maxScoreSelected = parseInt(
  maxScoreDropdown.options[maxScoreDropdown.selectedIndex].text
);

const resetFunc = () => {
  player1.score = 0;
  player2.score = 0;

  player1.display.innerText = "0";
  player2.display.innerText = "0";

  player1.button.removeAttribute("disabled");
  player2.button.removeAttribute("disabled");

  player1.display.classList.remove("winner", "loser");
  player2.display.classList.remove("winner", "loser");
};

const whoWins = (player, opponent) => {
  player.score++;
  player.display.innerText = player.score;
  if (player.score === maxScoreSelected) {
    console.log("winner");

    player.display.classList.add("winner");
    opponent.display.classList.add("loser");

    player.button.setAttribute("disabled", true);
    opponent.button.setAttribute("disabled", true);
  }
};

maxScoreDropdown.addEventListener("change", function () {
  maxScoreSelected = parseInt(this.value);
  resetFunc();
});

player1.button.addEventListener("click", () => {
  whoWins(player1, player2);
});

player2.button.addEventListener("click", () => {
  whoWins(player2, player1);
});

reset.addEventListener("click", resetFunc);
