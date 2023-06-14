const btn = document.querySelector("#btn");
const h1 = document.querySelector("h1");

btn.addEventListener("click", () => {
  const newColor = makeRandomColor();
  document.body.style.backgroundColor = newColor;
  h1.innerText = newColor;
});

const makeRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  if (r + g + b <= 300) {
    h1.classList.add("text-white");
  } else {
    h1.classList.remove("text-white");
  }

  return `rgb(${r},${g}, ${b})`;
};
