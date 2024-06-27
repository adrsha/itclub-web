import { useEffect } from "react";
import Lenis from "lenis";
export const lenis = new Lenis({
  lerp: 0.1,
  wheelMultiplier: 0.7,
  gestureOrientation: "vertical",
  normalizeWheel: false,
  smoothTouch: true,
  easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // https://easings.net
  direction: "vertical",
  smooth: true,
});
export function LenisComponent() {
  useEffect(() => {
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // Make links scroll smoothly
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        lenis.scrollTo(this.getAttribute("href"));
      });
    });

    requestAnimationFrame(raf);
  }, []);

  return null;
}
