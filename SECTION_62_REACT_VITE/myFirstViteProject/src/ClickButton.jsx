function onClickFunc() {
  console.log("button clicked!!!");
}

function onMouseHoverFunc() {
  console.log("HOVERED!!!");
}

export default function ClickButton() {
  return (
    <div>
      <p onMouseOver={onMouseHoverFunc}>Hover over me </p>
      <button onClick={onClickFunc}>CLICK</button>
    </div>
  );
}
