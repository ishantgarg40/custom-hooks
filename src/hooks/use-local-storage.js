// Implement a custom hook to interact with browser's localstorage

import { useEffect } from "react";

const isBrowser = typeof window !== "undefined";

export default function useLocalStorage(key, initialValue) {
  if (!isBrowser) {
    return [initialValue, () => {}, () => {}];
  }

  if (!key) {
    throw new Error("key cannot be falsy!");
  }

  function getValue() {
    return localStorage.getItem(key);
  }

  function setValue(value) {
    return localStorage.setItem(key, value);
  }

  function remove() {
    return localStorage.removeItem(key);
  }

  return { getValue, setValue, remove };
}
