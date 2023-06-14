// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector("form");
const ul = document.querySelector("#list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const product = document.querySelector("#product").value;
  const quantity = document.querySelector("#qty").value;
  const li = document.createElement("li");

  li.innerText = ` ${product}   ${quantity}`;
  ul.appendChild(li);
  console.log("");
  form.reset(li.innerText);
});
