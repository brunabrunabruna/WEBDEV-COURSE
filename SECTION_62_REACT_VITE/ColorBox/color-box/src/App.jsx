import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ColorBoxUnit from "./ColorBoxUnit";
import ColorBoxGrid from "./ColorBoxGrid";
import ScoreKeeper from "./ScoreKeeper";
import EmojiClicker from "./EmojiClicker";

function App() {
  return (
    <>
      <div>
        <EmojiClicker />
        <ScoreKeeper />
        <h1>color box</h1>
        <ColorBoxGrid colorsArray={["red", "orange", "yellow"]} />
      </div>
    </>
  );
}

export default App;
