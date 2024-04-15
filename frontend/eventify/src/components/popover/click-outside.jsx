import { useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref, cb) {
  useEffect(() => {
    if (!ref) return;
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      for (let i = 0; i < ref.length; i++) {
        if (ref[i] && ref[i]?.contains(event.target)) return;
      }
      cb && cb();
      event.stopPropagation();
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, cb]);
}

/**
 * Component that alerts if you click outside of it
 */
export default function ClickOutside({ reference, children, onClickOutside }) {
  useOutsideAlerter(reference, onClickOutside);

  return children;
}
