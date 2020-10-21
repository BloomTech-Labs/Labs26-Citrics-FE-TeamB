import { useState, useEffect } from "react";

/** Hook to track current window width with added de-bouncing logic.
 * The width will only be updated after resizing has been stopped for 100ms to avoid rapid changes to its value.
 *
 * @param {function} [callback] (Optional) Function to execute whenever width changes.
 * The current width will be passed to this function as its first argument.
 * @returns The debounced width value.
 */
export default function useWidth(callback = null) {
  // Retrieve the current width of the window
  const getWidth = () =>
    window.innerWidth ??
    document.documentElement.clientWidth ??
    document.body.clientWidth;

  const [width, setWidth] = useState(getWidth());

  useEffect(() => {
    // timeoutId for debounce mechanism
    let timeoutId = null;
    function handleResize() {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId);
      // change width from the state object after 100 milliseconds
      timeoutId = setTimeout(() => {
        const w = getWidth();
        setWidth(w);
        callback && callback(w);
      }, 100);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [callback]);
  return width;
}
