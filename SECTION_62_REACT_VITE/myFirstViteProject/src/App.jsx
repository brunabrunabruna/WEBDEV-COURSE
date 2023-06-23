import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Greeter from "./Greeter";
import DoubleDice from "./DoubleDice";
import ColorList from "./ColorList";
import Slots from "./Slots";
import ShoppingList from "./ShoppingList";
import NewShoppingList from "./NewShoppingList";
import ClickButton from "./ClickButton";
import Form from "./Form";
import Clicker from "./Clicker";
import Counter from "./Counter";
import Toggler from "./toggler";

function App() {
  return (
    <>
      {/*   
  <Greeter person="Bruna" sides={20}/>
  <Greeter person="Bruna" sides={10}/>
  <Greeter person="Bruna" /> */}

      {/* <DoubleDice color="blue" fontSize="48px"/>
  <DoubleDice />
  <DoubleDice />

<ColorList colors={["aqua", "pink", "orange", "olive"]} />
<ColorList colors={["blue", "red", "green"]} /> 


['🍣', '🍥', '🍡 ' ]
*/}

      <Toggler />
      <Clicker buttonText={"pls click me"} message={"hello!"} />
      <Form />

      <ClickButton />

      <Slots slotsAmount={4} figuresArray={["🍣", "🍥", "🍡 ", "🩵"]} />

      <ShoppingList items={data} />

      <NewShoppingList items={newData} />

      <Counter />
    </>
  );
}

const data = [
  { id: 1, product: "eggs", quantity: "12", purchased: false },
  { id: 2, product: "milk", quantity: "1", purchased: true },
  { id: 3, product: "water", quantity: "3", purchased: true },
];

const newData = [
  { key: 1, product: "fruit", quantity: 2, purchased: false },
  { key: 2, product: "pasta", quantity: 1332, purchased: true },
  { key: 3, product: "sauce", quantity: 1, purchased: false },
];

export default App;
