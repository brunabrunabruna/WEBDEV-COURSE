const form = document.querySelector("#form");
const input = document.querySelector("#catName");
const list = document.querySelector("#list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newLi = document.createElement("li");
  newLi.innerText = input.value;
  console.log(newLi);
  list.appendChild(newLi);
  input.value = "";
});

////////////////////////////////////////////

const formTweet = document.querySelector("#formTweet");
const username = document.querySelector("#username");
const tweet = document.querySelector("#tweet");
const tweetsList = document.querySelector("#tweetsList");
formTweet.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTweetGroup = document.createElement("li");
  const newUsername = document.createElement("b");
  newUsername.innerText = `${username.value}      -      ${tweet.value}`;
  //   const newTweet = document.createElement("span" );
  //   newTweet.innerText = tweet.value;
  //   newUsername.append(newTweet);
  newTweetGroup.append(newUsername);

  tweetsList.append(newTweetGroup);
  ////clean forms after submit
  username.value = "";
  tweet.value = "";
  tweetsList.addEventListener("click", (e) => {
    e.target.remove();
    // e.target.nodeName === "b" && e.target.remove();
  });

  //   console.log("submitted");
});

///////////////////////////////////

///STOP PROPAGATION///

const paragraph = document.querySelector("#paragraph");
const button = document.querySelector("#button");

paragraph.addEventListener("click", (e) => {
  paragraph.classList.toggle("hide");
});

button.addEventListener("click", (e) => {
  e.stopPropagation();
  paragraph.style.backgroundColor = makeRandColor();
});

const makeRandColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};
