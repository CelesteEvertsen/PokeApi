export type PokemonType =
  | "grass"
  | "fire"
  | "water"
  | "poison"
  | "flying"
  | "bug"
  | "normal"
  | "electric"
  | "ground"
  | "fairy"
  | "fighting"
  | "psychic"
  | "rock"
  | "ghost"
  | "ice"
  | "dragon"
  | "dark"
  | "steel";

export type TypeColorMap = Record<PokemonType, string>;

export const typeColorsLighter: TypeColorMap = {
  grass: "#d4f1d4",
  fire: "#fdd9b5",
  water: "#d0eaff",
  poison: "#ead5f5",
  flying: "#ddf0fc",
  bug: "#e2f5cc",
  normal: "#fafafa",
  electric: "#fffbcc",
  ground: "#ede8e4",
  fairy: "#fce4ec",
  fighting: "#ffd5d5",
  psychic: "#fcd5e8",
  rock: "#ddd8d5",
  ghost: "#d9ccf0",
  ice: "#d9f5f8",
  dragon: "#cce0ff",
  dark: "#c8d0d5",
  steel: "#dde4e8",
};
export const typeColorsMedium: TypeColorMap = {
grass: "#bee4be",
  fire: "#f9c088",
  water: "#b0d7ff",
  poison: "#d9aaee",
  flying: "#bbebfb",
  bug: "#d4edb6",
  normal: "#f8f8f8",
  electric: "#fff9a0",
  ground: "#e2dcd9",
  fairy: "#fad0e4",
  fighting: "#f9c2c2",
  psychic: "#f9c2dc",
  rock: "#cdc9c4",
  ghost: "#c4aee0",
  ice: "#c8f0f5",
  dragon: "#aed4ff",
  dark: "#a8b8be",
  steel: "#cad6dc",
}
export const typeColors: TypeColorMap = {
  grass: "#a8d8a8",
  fire: "#f4a261",
  water: "#90caf9",
  poison: "#ce93d8",
  flying: "#b3e5fc",
  bug: "#c5e1a5",
  normal: "#f5f5f5",
  electric: "#fff176",
  ground: "#d7ccc8",
  fairy: "#f8bbd0",
  fighting: "#ef9a9a",
  psychic: "#f48fb1",
  rock: "#bcaaa4",
  ghost: "#9575cd",
  ice: "#b2ebf2",
  dragon: "#90caf9",
  dark: "#78909c",
  steel: "#b0bec5",
};