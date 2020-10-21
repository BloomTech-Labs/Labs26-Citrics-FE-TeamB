import { useState, useEffect } from "react";

/** Hook to track current window width with added de-bouncing logic and (optionally) fire a callback when width is updated.
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
      // Prevent execution of previously set timeout
      clearTimeout(timeoutId);
      // After 100ms, update the width in state and execute the callback (if provided)
      timeoutId = setTimeout(() => {
        const w = getWidth();
        setWidth(w);
        callback && callback(w);
        // console.log("Width changed to", w);
      }, 100);
    }
    window.addEventListener("resize", handleResize);
    // Remove the event listener when unmounting the component
    return () => window.removeEventListener("resize", handleResize);
  }, [callback]);
  return width;
}
