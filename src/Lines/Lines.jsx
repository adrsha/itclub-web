import "./Lines.css";
import React, { useEffect, useState, useCallback, useRef } from "react";
import { throttle } from "lodash";
import { lenis } from "../Lenis/Lenis";

function Lines() {
  const [scrollY, setScrollY] = useState(0);
  const rafIdRef = useRef(null);
  const heightRef = useRef(0);
  const innerHeightRef = useRef(0);
  const bulbsRef = useRef([]);

  useEffect(() => {
    heightRef.current = document.documentElement.getBoundingClientRect().height;
    innerHeightRef.current = window.innerHeight;
    bulbsRef.current = document.querySelectorAll(".bulb");
  }, []);

  const calculateBulbPosition = useCallback((scroll) => {
    return (
      scroll +
      (scroll / (heightRef.current - innerHeightRef.current + 300)) *
        innerHeightRef.current
    );
  }, []);

  const handleScroll = useCallback(
    throttle(() => {
      setScrollY(calculateBulbPosition(lenis.scroll));
    }, 16),
    [calculateBulbPosition],
  );

  useEffect(() => {
    lenis.on("scroll", handleScroll);
    return () => {
      lenis.off("scroll", handleScroll);
    };
  }, [handleScroll]);

  const updateBulbPositions = useCallback(() => {
    const offsets = [0, -100, -200]; // Offsets for left, center, and right bulbs
    bulbsRef.current.forEach((bulb, index) => {
      bulb.style.transform = `translate3d(0, ${scrollY + offsets[index]}px, 0)`;
    });

    rafIdRef.current = requestAnimationFrame(updateBulbPositions);
  }, [scrollY]);

  useEffect(() => {
    rafIdRef.current = requestAnimationFrame(updateBulbPositions);
    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [updateBulbPositions]);

  return (
    <div className="lines">
      {/* <div className="lineHorizontal"> </div> */}
      <div className="boxLeft">
        <div className="lineLeft">
          <div className="bulb"></div>
        </div>
      </div>
      <div className="boxCenter">
        <div className="lineCenter">
          <div className="bulb"></div>
        </div>    
      </div>
      <div className="boxRight">
        <div className="lineRight">
          <div className="bulb"></div>
        </div>
      </div>
    </div>
  );
}

export default Lines;
