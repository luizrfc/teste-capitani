import * as Storage from 'react-native-encrypted-storage';

const variantKey = '@capitani';

const setStorage = async (key: string, value: string) => {
  try {
    await Storage.default.setItem(`${variantKey}:${key}`, value);
  } catch (error) {
    console.log('🚀 ~ setStorage ~ error:', error);
  }
};

const getStorage = async (key: string, json = false) => {
  try {
    if (json) {
      const value = await Storage.default.getItem(`${variantKey}:${key}`);
      if (value === null) {
        return null;
      }
      return JSON.parse(value);
    }
    return await Storage.default.getItem(`${variantKey}:${key}`);
  } catch (error) {
    console.log('🚀 ~ getStorage ~ error:', error);
  }
};

const removeStorage = async (key: string) => {
  try {
    await Storage.default.removeItem(`${variantKey}:${key}`);
  } catch (error) {
    console.log('🚀 ~ removeStorage ~ error:', error);
  }
};

const clearStorage = async () => {
  try {
    await Storage.default.clear();
  } catch (error) {
    console.log('🚀 ~ clearStorage ~ error:', error);
  }
};

export {setStorage, getStorage, removeStorage, clearStorage};
