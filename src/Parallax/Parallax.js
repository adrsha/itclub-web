let parallaxEls = document.getElementsByClassName("parallaxEl");
import { useState, useEffect } from "react";
let parallaxElsPos = [];
let lerp;

function signOf(x) {
  if (x > 0) return 1;
  if (x < 0) return -1;
  return 0;
}
function Parallax() {
  const [changeInTransform, setChangeInTransform] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
    for (let i = 0; i < parallaxEls.length; i++) {
      if (parallaxEls[i].hasAttribute("data-lerp")) {
        lerp = parallaxEls[i].dataset.lerp;
      } else {
        lerp = 5;
      }
      parallaxElsPos.push(
        signOf(lerp) * window.pageYOffset +
          parallaxEls[i].getBoundingClientRect().top,
      );
    }

    const handleScroll = () => {
      setChangeInTransform(window.pageYOffset);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    for (let i = 0; i < parallaxEls.length; i++) {
      if (parallaxEls[i].hasAttribute("data-lerp")) {
        lerp = parallaxEls[i].dataset.lerp;
      } else {
        lerp = 5;
      }
      parallaxEls[i].style.transform =
        `translate(0, calc(${-changeInTransform / lerp + parallaxElsPos[i] / lerp}px - ${50 / lerp}vh))`;
    }
  }, [changeInTransform]);
}

export default Parallax;
