import { useState } from "react";
import { v4 as uuid } from "uuid";
const randomEmoji = () => {
  const choices = ["❤︎", "☻", "☃︎", "☁︎", "☽"];
  return choices[Math.floor(Math.random() * choices.length)];
};
export default function EmojiClicker() {
  const [emojis, setEmojis] = useState([{ id: uuid(), emoji: randomEmoji() }]);

  const addEmoji = () => {
    setEmojis((oldEmojis) => [
      ...oldEmojis,
      { id: uuid(), emoji: randomEmoji() },
    ]);
  };

  const deleteEmoji = (id) => {
    setEmojis((prevEmojis) => {
      return prevEmojis.filter((e) => e.id !== id);
    });
  };

  //makes all displayed emojis a heart. Function calls setEmojis(useState function which react gives to us, so we can modify the state of certain value), which is called with a map function, to edit all the items in the array. the map function firstly copies the previous emojis array, and right after modifies the emoji object key ( to a heart).
  const makeAllHearts = () => {
    setEmojis((prevEmojis) => {
      return prevEmojis.map((e) => {
        return { ...prevEmojis, emoji: "🩵" };
      });
    });
  };

  return (
    <div>
      {emojis.map((e) => (
        <span
          onClick={() => deleteEmoji(e.id)}
          key={e.id}
          style={{ fontSize: "4rem" }}
        >
          {e.emoji}
        </span>
      ))}
      <button onClick={addEmoji}>add emoji</button>
      <button onClick={makeAllHearts}>make them hearts</button>
      {/* {console.log(uuid())} */}
    </div>
  );
}
