import { useState } from "react";
import "./ColorBoxUnit.css";

const randomColor = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

const ColorBoxUnit = ({ colorsArray }) => {
  const [color, setColor] = useState(randomColor(colorsArray));

  const updateColor = () => {
    setColor(randomColor(colorsArray));
  };

  return (
    <div
      className="ColorBoxUnit"
      onClick={updateColor}
      style={{ backgroundColor: color }}
    ></div>
  );
};

export default ColorBoxUnit;
