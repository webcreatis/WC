"use client";

import { useEffect, useRef } from "react";

const CanvasTrail = () => {
  const canvasRef = useRef(null);
  const mouseTimerRef = useRef(null);
  const pointer = useRef({
    x: 0.5 * (typeof window !== "undefined" ? window.innerWidth : 0),
    y: 0.5 * (typeof window !== "undefined" ? window.innerHeight : 0),
  });

  const trail = useRef(
    new Array(30).fill(null).map(() => ({
      x: pointer.current.x,
      y: pointer.current.y,
      dx: 0,
      dy: 0,
    }))
  );
  const mouseMoved = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const updateMousePosition = (eX, eY) => {
      const rect = canvas.getBoundingClientRect();
      pointer.current.x = eX - rect.left;
      pointer.current.y = eY - rect.top;
    };

    const handleMouseMove = (e) => {
      mouseMoved.current = true;
      updateMousePosition(e.pageX, e.pageY);
      clearTimeout(mouseTimerRef.current);
      mouseTimerRef.current = setTimeout(() => {
        mouseMoved.current = false;
      }, 3000);
    };

    const handleTouchMove = (e) => {
      mouseMoved.current = true;
      updateMousePosition(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
    };

    const handleResize = () => {
      setupCanvas();
    };

    const setupCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const update = (t) => {
      if (!mouseMoved.current) {
        pointer.current.x =
          (0.5 + 0.3 * Math.cos(0.002 * t) * Math.sin(0.005 * t)) *
          window.innerWidth;
        pointer.current.y =
          (0.5 + 0.2 * Math.cos(0.005 * t) + 0.1 * Math.cos(0.01 * t)) *
          (window.innerHeight + window.scrollY);
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      trail.current.forEach((p, pIdx) => {
        const prev = pIdx === 0 ? pointer.current : trail.current[pIdx - 1];
        const spring = pIdx === 0 ? 0.4 * 0.4 : 0.4; // Adjusted spring constant
        p.dx += (prev.x - p.x) * spring;
        p.dy += (prev.y - p.y) * spring;
        p.dx *= 0.5; // Adjusted friction constant
        p.dy *= 0.5; // Adjusted friction constant
        p.x += p.dx;
        p.y += p.dy;
      });

      ctx.lineCap = "round";
      ctx.strokeStyle = "#7AE1AE";
      ctx.beginPath();
      ctx.moveTo(trail.current[0].x, trail.current[0].y);

      for (let i = 1; i < trail.current.length - 1; i++) {
        const xc = 0.5 * (trail.current[i].x + trail.current[i + 1].x);
        const yc = 0.5 * (trail.current[i].y + trail.current[i + 1].y);
        ctx.quadraticCurveTo(trail.current[i].x, trail.current[i].y, xc, yc);
        ctx.lineWidth = 0.3 * (30 - i);
        ctx.stroke();
      }
      ctx.lineTo(
        trail.current[trail.current.length - 1].x,
        trail.current[trail.current.length - 1].y
      );
      ctx.stroke();

      window.requestAnimationFrame(update);
    };

    // Event listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("resize", handleResize);
    setupCanvas();
    window.requestAnimationFrame(update);

    // Cleanup event listeners and timer
    return () => {
      clearTimeout(mouseTimerRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-screen"
    ></canvas>
  );
};

export default CanvasTrail;
