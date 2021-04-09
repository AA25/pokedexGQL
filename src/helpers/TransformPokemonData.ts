export const defaultPokemonFields: String = "id name imageSource type";

interface IAdditionalData {
  height?: String;
  weight?: String;
  species?: String;
  signatureMove?: String;
}

export interface IPokemon {
  id: String;
  name: String;
  imageSource: String;
  type: Array<String>;
  additionalData: IAdditionalData;
}

export const transformPokemonApiResult = (responsePokemonData: Array<any>): Array<IPokemon> => {
  const formattedPokemonHolder: Array<IPokemon> = [];

  for (let pokemon of responsePokemonData) {
    // Create a formatted Pokemon with required properties
    let formattedPokemon: IPokemon = {
      id: getFormattedId(pokemon.id),
      imageSource: getImage(pokemon.imageSource),
      name: getFormattedName(pokemon.name),
      type: getFormattedTypes(pokemon.type),
      additionalData: getAdditionalDataData(pokemon),
    };

    // Push formatted pokemon to the holding array
    formattedPokemonHolder.push(formattedPokemon);
  }

  return formattedPokemonHolder;
};

const getAdditionalDataData = (pokemon): IAdditionalData => {
  let additionalDataObj: IAdditionalData = {};

  // Add optional properties if present
  if (pokemon.height) additionalDataObj.Height = getFormattedHeight(pokemon.height);
  if (pokemon.weight) additionalDataObj.Weight = getFormattedWeight(pokemon.weight);
  if (pokemon.species) additionalDataObj.Species = getFormattedSpecies(pokemon.species);
  if (pokemon.signatureMove) additionalDataObj["Signature Move"] = getFormattedSignatureMove(pokemon.signatureMove);

  return additionalDataObj;
};

const getFormattedId = (id): String => {
  const defaultId = id ?? 0;
  let formattedId = "#000";

  // Logic to add generate a 3 digit version of the ID with a # in front
  if (defaultId < 10) {
    formattedId = `#00${id}`;
  } else if (defaultId >= 10 && defaultId < 100) {
    formattedId = `#0${id}`;
  } else if (defaultId >= 100) {
    formattedId = `#${id}`;
  }

  return formattedId.length === 4 ? formattedId : "#000";
};

const getImage = (imageUri): String => {
  const pokemonSilhouetteUri = "https://i.pinimg.com/originals/95/d5/cd/95d5cded00f3a3e8a98fb1eed568aa9f.png";
  return imageUri ?? pokemonSilhouetteUri;
};

const getFormattedName = (name): String => {
  const defaultName = name ?? "null";
  return capitaliseWord(defaultName);
};

const getFormattedTypes = (types): Array<String> => {
  const defaultTypes: Array<String> = types ?? ["null"];
  return defaultTypes.map((type) => capitaliseWord(type));
};

const getFormattedHeight = (height): String => {
  return `${height}m`;
};

const getFormattedWeight = (weight): String => {
  return `${weight}kg`;
};

const getFormattedSpecies = (species): String => {
  return capitaliseWord(species);
};

const getFormattedSignatureMove = (move): String => {
  return move;
};

const capitaliseWord = (word: String): String => {
  if (word.length === 1) {
    return word.charAt(0).toUpperCase();
  } else {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
};
