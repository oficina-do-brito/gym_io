import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (value: string) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("USERTOKEN", jsonValue);
  } catch (e) {}
};

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("USERTOKEN");
    if (jsonValue === null || jsonValue === undefined) {
      return null;
    }
    return JSON.parse(jsonValue);
  } catch (e) {}
};

export const removeValue = async () => {
  try {
    await AsyncStorage.removeItem("USERTOKEN");
  } catch (e) {
    // remove error
  }
  console.log("Done.");
};

export const getAllKeys = async () => {
  let keys: any = [];
  try {
    keys = await AsyncStorage.getAllKeys();
  } catch (e) {
    // read key error
  }

  console.log(keys);
};
