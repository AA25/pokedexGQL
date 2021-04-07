import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeObjectValue = async (key: string, data: object) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    // saving error
  }
};

export const getObjectValue = async (key: String): Promise<object | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    return null;
  }
};
