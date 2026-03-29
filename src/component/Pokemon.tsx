"use client";
import style from "./Pokemon.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

import {
  typeColorsLighter,
  typeColorsMedium,
  type PokemonType,
} from "../data/color";

interface PokemonProps {
  chooseType: string;
  setChooseType: React.Dispatch<React.SetStateAction<string>>;
}

interface PokemonListItem {
  name: string;
  url: string;
}

interface PokemonListResponse {
  results: PokemonListItem[];
}

interface PokemonAbility {
  ability: {
    name: string;
  };
}

interface PokemonMove {
  move: {
    name: string;
  };
}

interface PokemonTypeSlot {
  type: {
    name: PokemonType;
  };
}

interface PokemonData {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: PokemonTypeSlot[];
  weight: number;
  height: number;
  abilities: PokemonAbility[];
  moves: PokemonMove[];
}

const isPokemonType = (value: string): value is PokemonType =>
  value in typeColorsLighter;

export default function Pokemon({ chooseType, setChooseType }: PokemonProps) {
  const [pokemon, setPokemon] = useState<PokemonData[]>([]);
  const [search, setSearch] = useState("");
  const backgroundColorLight = isPokemonType(chooseType)
    ? typeColorsLighter[chooseType]
    : "#ffffff";
  const backgroundColorMedium = isPokemonType(chooseType)
    ? typeColorsMedium[chooseType]
    : "#ffffff";
  const pokemontype = [
    "All types",
    ...Array.from(
      new Set(pokemon.flatMap((p) => p.types.map((t) => t.type.name))),
    ),
  ];
  const filterPokemon = pokemon
    .filter((byName) =>
      byName.name.toLowerCase().includes(search.toLowerCase()),
    )
    .filter(
      (type) =>
        chooseType === "All types" ||
        type.types.some((t) => t.type.name === chooseType),
    );

  useEffect(() => {
    axios
      .get<PokemonListResponse>("https://pokeapi.co/api/v2/pokemon?limit=120")
      .then((res) => {
        const url = res.data.results.map((p) => axios.get<PokemonData>(p.url));
        return Promise.all(url);
      })
      .then((response) => {
        const data = response.map((r) => r.data);
        setPokemon(data);
      });
  }, []);
  return (
    <section
      className={style.section}
      style={{ backgroundColor: backgroundColorMedium }}
    ><h1  className={style.title}>PokeApi</h1>
     
      <input
        className={style.input}
        type="text"
        placeholder="Search Pokemon by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select
        value={chooseType}
        className={style.dropdown}
        aria-label="Filter by pokemon type"
        onChange={(e) => setChooseType(e.target.value)}
      >
        {pokemontype.map((t) => (
          <option className={style.buttons} key={t} value={t}>
            {t}
          </option>
        ))}
      </select>

      <section className={style.pokemonContainer}>
        {filterPokemon.map((p) => (
          <div
            className={style.pokemonCard}
            key={p.id}
            style={{ backgroundColor: backgroundColorLight }}
          >
            <div className={style.pokemonInfo}>
              <div className={style.pokemonImage}>
                <img src={p.sprites.front_default} alt={p.name} />
              </div>

              <div className={style.pokemonDetails}>
                <h2>{p.name}</h2>
                <h3>{p.types.map((t) => t.type.name).join(", ")}</h3>
                <p>
                  Vekt: {p.weight}lbs - Høyde: {p.height}ft
                </p>
              </div>
            </div>
            <div className={style.pokemonAbilities}>
              <p>
                Ability: {p.abilities.map((a) => a.ability.name).join(" - ")}
              </p>
              <p>
                Spesial Moves:{" "}
                {p.moves
                  .slice(0, 5)
                  .map((m) => m.move.name)
                  .join(", ")}
              </p>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}
