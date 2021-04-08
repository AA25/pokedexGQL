import { getObjectValue, storeObjectValue } from "../utilities/DataStore";

export interface IAdditionalFields {
  A: Boolean;
  B: Boolean;
  C: Boolean;
  D: Boolean;
}

// Strings to be used in the frontend
export enum AdditionalFieldsFrontEnd {
  A = "Height",
  B = "Weight",
  C = "Species",
  D = "Signature Move",
}

// Strings to be used in graphql query
export enum AdditionalFieldsBackEnd {
  A = "height",
  B = "weight",
  C = "species",
  D = "signatureMove",
}

export const getAdditionalFieldsRequired = async (): Promise<String> => {
  const additionalFields: object | null = await getObjectValue("additionalFields");
  let additionalFieldsRequired: String = "";

  // No options found
  if (additionalFields === null) return additionalFieldsRequired;

  // Filter out non selected options (false) and add all the selected (true) options as a string
  Object.entries(additionalFields).forEach(([Key, data]) => {
    if (data) additionalFieldsRequired += ` ${AdditionalFieldsBackEnd[Key]}`;
  });

  return additionalFieldsRequired;
};

export const storeAdditionalFields = async (additionalFields: IAdditionalFields) => {
  await storeObjectValue("additionalFields", additionalFields);
};
