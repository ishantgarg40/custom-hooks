// Build a custom hook in react hook that allows for debouncing user input

import { useEffect, useState } from "react";

export default function useDebounce(value, delay, callback = () => {}) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
      callback();
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}
