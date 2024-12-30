import './Lines.css';
import React, { useEffect, useState, useCallback, useRef } from 'react';
import { throttle } from 'lodash';
import { lenis } from '../Lenis/Lenis';

function Lines() {
  const [scrollY, setScrollY] = useState(0);
  const rafIdRef = useRef(null);
  const bulbsRef = useRef([]);

  useEffect(() => {
      bulbsRef.current = document.querySelectorAll('.bulb');
  }, []);

  const calculateBulbPosition = useCallback(() => {
      let newScroll = (lenis.animatedScroll ) / (lenis.dimensions.scrollHeight- window.innerHeight)
    return newScroll * lenis.dimensions.scrollHeight;
  }, []);

  const handleScroll = useCallback(
    throttle(() => {
      setScrollY(calculateBulbPosition(lenis.scroll)); //lenis scroll returns current vert scroll position of page
    }, 16),
    [calculateBulbPosition],
  );

  useEffect(() => {
    lenis.on('scroll', handleScroll);
    return () => {
      lenis.off('scroll', handleScroll);
    };
  }, [handleScroll]);

  const updateBulbPositions = useCallback(() => {
    // const offsets = [0, -100, -200]; // Offsets for left, center, and right bulbs
    bulbsRef.current.forEach((bulb, index) => {
      bulb.style.transform = `translate3d(0, ${scrollY}px, 0)`;
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
      <div className="line">
        <div className="bulb"></div>
      </div>
    </div>
  );
}

export default Lines;
