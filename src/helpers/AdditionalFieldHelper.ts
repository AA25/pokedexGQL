import { getObjectValue, storeObjectValue } from "../utilities/DataStore";

export interface IAdditionalData {
  A: Boolean;
  B: Boolean;
  C: Boolean;
  D: Boolean;
}

export enum AdditionalFieldFrontEnd {
  A = "Height",
  B = "Weight",
  C = "Signature Move",
  D = "Attribute",
}

export enum AdditionalFieldsDataBackEnd {
  A = "height",
  B = "weight",
  C = "signatureMove",
  D = "attribute",
}

export const getAdditionalFieldsRequired = async (): Promise<String> => {
  const additionalFields: object | null = await getObjectValue("additionalFields");
  let additionalFieldsRequired: String = "";

  // No options found
  if (additionalFields === null) return additionalFieldsRequired;

  // Filter out non selected options (false) and add all the selected (true) options as a string
  Object.entries(additionalFields).forEach(([Key, data]) => {
    if (data) additionalFieldsRequired += ` ${AdditionalFieldsDataBackEnd[Key]}`;
  });

  return additionalFieldsRequired;
};

export const storeAdditionalFields = async (additionalFields: IAdditionalData) => {
  await storeObjectValue("additionalFields", additionalFields);
};
