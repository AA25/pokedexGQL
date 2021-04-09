import { IPokemon, transformPokemonApiResult } from "../helpers/TransformPokemonData";

export const localPokemonData: Array<IPokemon> = transformPokemonApiResult([
  {
    __typename: "Pokemon",
    id: 25,
    name: "Pikachu",
    imageSource: "http://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png",
    type: ["ELECTRIC"],
    height: 0.4,
    weight: 6,
    species: "Mouse",
    signatureMove: "Volt Tackle",
  },
  {
    __typename: "Pokemon",
    id: 1,
    name: "Bulbasaur",
    imageSource: "https://i.pinimg.com/originals/3b/78/47/3b7847675982776e5219e12a680ecd84.png",
    type: ["GRASS", "POISON"],
    height: 0.7,
    weight: 6.9,
    species: "Speed",
    signatureMove: "Vine Whip",
  },
  {
    __typename: "Pokemon",
    id: 4,
    name: "Charmander",
    imageSource:
      "https://static.wikia.nocookie.net/pokemon-revolution/images/4/41/004Charmander_OS_anime_2.png/revision/latest/scale-to-width-down/340?cb=20150625082016",
    type: ["FIRE"],
    height: 0.6,
    weight: 8.5,
    species: "Lizard",
    signatureMove: "Ember",
  },
  {
    __typename: "Pokemon",
    id: 7,
    name: "Squirtle",
    imageSource: "http://assets.stickpng.com/images/580b57fcd9996e24bc43c32a.png",
    type: ["WATER"],
    height: 0.5,
    weight: 9,
    species: "Tiny Turtle",
    signatureMove: "Rapid Spin",
  },
  {
    __typename: "Pokemon",
    id: 152,
    name: "Chikorita",
    imageSource:
      "https://static.wikia.nocookie.net/legendsofthemultiuniverse/images/b/bf/152-Chikorita.png/revision/latest?cb=20190224185631",
    type: ["GRASS"],
    height: 0.9,
    weight: 6.4,
    species: "Leaf",
    signatureMove: "Razor Leaf",
  },
  {
    __typename: "Pokemon",
    id: 155,
    name: "Cyndaquil",
    imageSource: "https://pokestop.io/img/pokemon/cyndaquil-256x256.png",
    type: ["FIRE"],
    height: 0.5,
    weight: 7.9,
    species: "Fire Mouse",
    signatureMove: "Flame Wheel",
  },
  {
    __typename: "Pokemon",
    id: 158,
    name: "Totodile",
    imageSource: "https://i.pinimg.com/originals/f0/89/7f/f0897f57e05ed84f2480cf9483ff009e.png",
    type: ["WATER"],
    height: 0.6,
    weight: 9.5,
    species: "Big Jaw",
    signatureMove: "Water Gun",
  },
  {
    __typename: "Pokemon",
    id: 252,
    name: "Treecko",
    imageSource: "https://cdn.bulbagarden.net/upload/2/2c/252Treecko.png",
    type: ["GRASS"],
    height: 0.5,
    weight: 5,
    species: "Wood Gecko",
    signatureMove: "Leafage",
  },
  {
    __typename: "Pokemon",
    id: 255,
    name: "Torchic",
    imageSource:
      "https://static.wikia.nocookie.net/ultimate-pokemon-fanon/images/0/0e/Torchic_In_Alpha_and_Omega_.png/revision/latest?cb=20140624170103",
    type: ["FIRE"],
    height: 0.4,
    weight: 2.5,
    species: "Chick Pokémon",
    signatureMove: "Flame Charge",
  },
  {
    __typename: "Pokemon",
    id: 258,
    name: "Mudkip",
    imageSource: "https://cdn.bulbagarden.net/upload/6/60/258Mudkip.png",
    type: ["WATER"],
    height: 0.4,
    weight: 7.6,
    species: "Mud Fish",
    signatureMove: "Water Pulse",
  },
  {
    __typename: "Pokemon",
    id: 387,
    name: "Turtwig",
    imageSource: "https://cdn.bulbagarden.net/upload/thumb/5/5c/387Turtwig.png/1200px-387Turtwig.png",
    type: ["GRASS"],
    height: 0.4,
    weight: 10.2,
    species: "Tiny Leaf",
    signatureMove: "Absorb",
  },
  {
    __typename: "Pokemon",
    id: 390,
    name: "Chimchar",
    imageSource:
      "https://static.wikia.nocookie.net/nintendo/images/9/9f/Chimchar.png/revision/latest?cb=20160916201643&path-prefix=en",
    type: ["FIRE"],
    height: 0.5,
    weight: 6.2,
    species: "Chimp",
    signatureMove: "Flame Wheel",
  },
  {
    __typename: "Pokemon",
    id: 393,
    name: "Piplup",
    imageSource: "https://i.pinimg.com/originals/b5/99/c9/b599c94a6d790b287decdca3cfeb6382.png",
    type: ["WATER"],
    height: 0.4,
    weight: 5.2,
    species: "Penguin",
    signatureMove: "Bubble",
  },
]);
