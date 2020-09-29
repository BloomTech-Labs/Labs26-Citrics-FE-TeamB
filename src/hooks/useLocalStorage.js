import { useState } from "react";
/**
 * This hook works similarly to useState, except that it caches values in localStorage
 * and can retrieve a value stored in a previous session, adding data persistence.
 * NOTE: All values will be stringified, be careful when accessing them directly.
 * Anything not supported by JSON spec (e.g. object methods) can't be stored in localStorage.
 * @param {string} key The key to be used in localStorage
 * @param {any} [initialValue] (Optional) The initial value
 */
export default function useLocalStorage(key, initialValue = null) {
  const [value, setValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    //null indicates that no item exists for that key
    if (item === null) {
      window.localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    }
    try {
      return JSON.parse(item);
    } catch {
      console.error(
        `Existing item found in localStorage under "${key}", but it could not be parsed successfully. Run localStorage.clear() and try again.`
      );
      return initialValue;
    }
  });
  /**
   * Updates the value both in useState (internally) and localStorage.
   * @param {any} newValue The updated value
   */
  const setValueLocalStorage = newValue => {
    window.localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };
  return [value, setValueLocalStorage];
}
