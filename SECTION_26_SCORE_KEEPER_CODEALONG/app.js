const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const scorePlayer1 = document.querySelector("#score-player1");
const scorePlayer2 = document.querySelector("#score-player2");
const reset = document.querySelector("#reset");
//
const maxScoreDropdown = document.querySelector("#max-score");
let maxScoreSelected = parseInt(
  maxScoreDropdown.options[maxScoreDropdown.selectedIndex].text
);

const resetFunc = () => {
  initScorePlayer1 = 0;
  initScorePlayer2 = 0;

  scorePlayer1.innerText = 0;
  scorePlayer2.innerText = 0;

  player1.removeAttribute("disabled");
  player2.removeAttribute("disabled");

  scorePlayer1.classList.remove("winner", "loser");
  scorePlayer2.classList.remove("winner", "loser");
};

maxScoreDropdown.addEventListener("change", function () {
  maxScoreSelected = parseInt(this.value);
  resetFunc();
});

let initScorePlayer1 = 0;
player1.addEventListener("click", (e) => {
  initScorePlayer1++;
  scorePlayer1.innerText = initScorePlayer1;
  if (initScorePlayer1 === maxScoreSelected) {
    console.log("winner");
    // scorePlayer1.style.color = "green";
    // scorePlayer2.style.color = "red";

    scorePlayer1.classList.add("winner");
    scorePlayer2.classList.add("loser");

    player1.setAttribute("disabled", true);
    player2.setAttribute("disabled", true);
  }
});

let initScorePlayer2 = 0;
player2.addEventListener("click", (e) => {
  initScorePlayer2++;
  scorePlayer2.innerText = initScorePlayer2;

  console.log(
    `Init scorre player 2: ${initScorePlayer2}, Current: ${maxScoreSelected}`
  );
  if (initScorePlayer2 === maxScoreSelected) {
    console.log("win");
    // scorePlayer1.style.color = "red";
    // scorePlayer2.style.color = "green";

    scorePlayer2.classList.add("winner");
    scorePlayer1.classList.add("loser");

    player1.setAttribute("disabled", true);
    player2.setAttribute("disabled", true);
  }
});

reset.addEventListener("click", resetFunc);
