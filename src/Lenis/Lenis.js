import { useEffect } from "react";
import Lenis from "lenis";

export const lenis = new Lenis({
  lerp: 0.1,
  wheelMultiplier: 0.7,
  gestureOrientation: "vertical",
  normalizeWheel: false,
  smoothTouch: true,
  syncTouch: true,
  easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // https://easings.net
  direction: "vertical",
  smooth: true,
  touchInertiaMultiplier: 40,
  autoResize: true,
});
export function LenisComponent() {
  useEffect(() => {
    lenis.on("scroll", () => {});
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return null;
}
