// window.addEventListener("keydown", (event) => {
//   console.log(event);
//   if (event.code === "ArrowUp") {
//     console.log("UP");
//   } else if (event.code === "ArrowDown") {
//     console.log("DOWN");
//   }
// });

window.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowUp":
      console.log("up");
      break;
    case "ArrowDown":
      console.log("down");
      break;
    case "ArrowLeft":
      console.log("left");
      break;
    case "ArrowRight":
      console.log("right");
  }
});
