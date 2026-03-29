"use client";
import { useState } from "react";
import Pokemon from "./component/Pokemon";
import { typeColors, type PokemonType } from "./data/color";
import "./App.css";

const isPokemonType = (value: string): value is PokemonType =>
  value in typeColors;

function App() {
  const [chooseType, setChooseType] = useState("All types");
  const backgroundColor = isPokemonType(chooseType)
    ? typeColors[chooseType]
    : "#ffffff";
  return (
    <div style={{ backgroundColor: backgroundColor }}>
      <Pokemon chooseType={chooseType} setChooseType={setChooseType} />
    </div>
  );
}

export default App;
