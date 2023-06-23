import ColorBoxUnit from "./ColorBoxUnit";
import "./ColorBoxGrid.css";

const ColorBoxGrid = ({ colorsArray }) => {
  const boxes = [];
  for (let i = 0; i < 25; i++) {
    boxes.push(<ColorBoxUnit colorsArray={colorsArray} />);
  }

  return <div className="ColorBoxGrid">{boxes}</div>;
};

export default ColorBoxGrid;
