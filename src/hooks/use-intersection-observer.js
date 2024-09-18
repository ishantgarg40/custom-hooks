// Build a custom hook used to observe changes in the intersection of a target element with an ancestor element or the viewport

import { useEffect, useState } from "react";

export default function useIntersectionObserver(ref, options) {
  const [intersectionObserverEntry, setIntersectionObserverEntry] =
    useState(null);

  useEffect(() => {
    if (ref.current && typeof intersectionObserverEntry === "function") {
      const handler = (entries) => {
        setIntersectionObserverEntry(entries[0]);
      };
      const observer = new IntersectionObserver(handler, options);

      observer.observe(ref.current);

      return () => {
        setIntersectionObserverEntry(null);
        observer.disconnect();
      };
    }
  }, [ref, options]);

  return intersectionObserverEntry;
}
