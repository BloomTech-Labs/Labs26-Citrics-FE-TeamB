import { useState, useEffect } from "react";

export default function useWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    // timeoutId for debounce mechanism
    let timeoutId = null;
    function handleResize() {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId);
      // change width from the state object after 500 milliseconds
      timeoutId = setTimeout(() => setWidth(window.innerWidth), 500);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  return width;
}
