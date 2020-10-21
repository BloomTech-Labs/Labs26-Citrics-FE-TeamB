import { useState, useEffect } from "react";

const getWidth = () =>
  window.innerWidth ??
  document.documentElement.clientWidth ??
  document.body.clientWidth;
export default function useWidth() {
  const [width, setWidth] = useState(getWidth());

  useEffect(() => {
    // timeoutId for debounce mechanism
    let timeoutId = null;
    function handleResize() {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId);
      // change width from the state object after 500 milliseconds
      timeoutId = setTimeout(() => setWidth(getWidth()), 100);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  return width;
}
