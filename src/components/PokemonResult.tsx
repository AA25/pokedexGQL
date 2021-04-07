import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Loading } from "./Loading";
import { getAdditionalFieldsRequired } from "../utilities/AdditionalFieldHelper";
import { PokemonListViaGraphQL } from "./GraphqlPokemonData";

export const PokemonResult = ({ componentId }) => {
  // SPECIAL CASE - Use local data to present data if not specified otherwise via Config file
  // eslint-disable-next-line no-console
  // if (appConfig.USE_LOCAL_DATA) {
  //   return <PokemonList componentId={componentId} pokemonData={localPokemonData} />;
  // }

  // Otherwise do steps to get live data
  // First generate a string containing all the fields wanted from the Pokemon API
  // This field string will be default fields + additional fields (selected from the prior page)
  const defaultFields: String = "id name imageSource type";
  const [ready, setReady] = useState(false);
  const [allFields, setAllFields] = useState("");

  const initialising = async () => {
    // Get the additional fields from AsyncStorage
    const additionalFieldsRequired: String = await getAdditionalFieldsRequired();
    const fieldsCombined: String = defaultFields + additionalFieldsRequired;

    setAllFields(fieldsCombined);
    setReady(true);
  };

  useEffect(() => {
    initialising();
  }, []);

  if (!ready) return <Loading />;

  return <PokemonListViaGraphQL componentId={componentId} allFields={allFields} />;
};

PokemonResult.propTypes = {
  componentId: PropTypes.string,
};
