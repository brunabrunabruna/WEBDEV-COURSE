// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector("#container");

for (let i = 1; i < 1012; i++) {
  //DIV GROUP
  const newDiv = document.createElement("div");

  newDiv.classList.add("card");
  // IMGS
  const newImg = document.createElement("img");

  newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
  newImg.classList.add("img-style");
  //DESCIPTION
  const newDescription = document.createElement("span");

  newDescription.innerText = `Pokemon n. ${i}`;

  newDiv.appendChild(newImg);
  newDiv.appendChild(newDescription);
  container.appendChild(newDiv);
}
