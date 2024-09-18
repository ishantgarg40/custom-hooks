import { useRef } from "react";

// polyfill for useEffect
export default function useEffect(callback, deps) {
  const firstTimeRef = useRef(true);
  const memoizedDeps = useRef([]);

  // for first render
  if (firstTimeRef.current) {
    firstTimeRef = false;
    const cleanUp = callback();
    return () => {
      if (cleanUp && typeof cleanUp === "function") {
        cleanUp();
      }
    };
  }

  if (JSON.stringify(memoizedDeps.current) !== JSON.stringify(deps)) {
    const cleanUp = callback();
    return () => {
      if (cleanUp && typeof cleanUp === "function") {
        cleanUp();
      }
    };
  }

  if (!deps) {
    const cleanUp = callback();
    return () => {
      if (cleanUp && typeof cleanUp === "function") {
        cleanUp();
      }
    };
  }

  memoizedDeps.current = deps || [];
}
