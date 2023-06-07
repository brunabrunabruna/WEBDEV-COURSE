const banner = document.getElementById("banner");

const links = document.querySelectorAll("a");

for (let link of links) {
  // console.log(link.href);
}

document.querySelector("#mw-toc-heading").innerText = "lolol";

document
  .querySelector("#mw-toc-heading")
  .parentElement.classList.add("purple-bg");

const firstImg = document.querySelector(".square");
const secondImg = firstImg.nextElementSibling;
secondImg.classList.add("new-border");

const h1 = document.querySelector("h1");
const newH2 = document.createElement("h2");
newH2.append("i am a new h2, inserted via js");
h1.insertAdjacentElement("afterend", newH2);

const newParagraphTitle = document.createElement("h2");
newParagraphTitle.innerText = "I am a new paragraph title, created via js";
document.querySelector("#banner").after(newParagraphTitle);

document.querySelector("#History").remove();
