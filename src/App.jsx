import React, { useEffect, useRef, useState } from "react";
import Hyperspeed from "./Hyperspeed";

const tiles = [
  "images/preview (1).webp",
  "images/preview (2).webp",
  "images/preview (3).webp",
  "images/preview (4).webp",
  "images/preview (5).webp",
  "images/preview (6).webp",
  "images/preview (7).webp",
  "images/preview (8).webp",
  "images/preview.webp",
];

function App() {
  const gridRef = useRef(null);
  const cursorRef = useRef(null);
  // Start with center image (index 4, the 5th image in a 3x3 grid)
  const [activeIndex, setActiveIndex] = useState(4);
  const [isFullscreen, setIsFullscreen] = useState(true);

  useEffect(() => {
    const cursorEl = cursorRef.current;
    const gridEl = gridRef.current;
    if (!cursorEl || !gridEl) return;

    const gridItems = Array.from(
      gridEl.querySelectorAll(".grid-item")
    );

    function findClosestItem(x, y) {
      let closestIdx = null;
      let minDist = Infinity;

      gridItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = cx - x;
        const dy = cy - y;
        const dist = dx * dx + dy * dy;
        if (dist < minDist) {
          minDist = dist;
          closestIdx = index;
        }
      });

      return closestIdx;
    }

    function handlePointerMove(event) {
      const x = event.clientX;
      const y = event.clientY;

      // Don't move the cursor image when fullscreen - keep it centered
      // Only track position to determine which image to show
      const closestIdx = findClosestItem(x, y);
      if (closestIdx !== null && closestIdx !== activeIndex) {
        setActiveIndex(closestIdx);
      }

      if (!cursorEl.classList.contains("visible")) {
        cursorEl.classList.add("visible");
      }
    }

    function handlePointerLeave() {
      // Reset to center image when cursor leaves
      setActiveIndex(4);
    }

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [activeIndex, isFullscreen]);

  // Initialize cursor image on mount
  useEffect(() => {
    const cursorEl = cursorRef.current;
    if (!cursorEl) return;

    // Set initial position to center of screen
    cursorEl.style.left = "50%";
    cursorEl.style.top = "50%";
    cursorEl.style.backgroundImage = `url("${tiles[activeIndex]}")`;
    cursorEl.classList.add("fullscreen");
    cursorEl.classList.add("visible");
  }, []);

  // Update cursor image when activeIndex changes
  useEffect(() => {
    const cursorEl = cursorRef.current;
    if (!cursorEl) return;

    // Always show the active image fullscreen
    if (activeIndex !== null) {
      cursorEl.style.backgroundImage = `url("${tiles[activeIndex]}")`;
    }
  }, [activeIndex]);

  return (
    <div className="page">
      <Hyperspeed
        effectOptions={{
          onSpeedUp: () => {},
          onSlowDown: () => {},
          distortion: "turbulentDistortion",
          length: 400,
          roadWidth: 10,
          islandWidth: 2,
          lanesPerRoad: 4,
          fov: 90,
          fovSpeedUp: 150,
          speedUp: 2,
          carLightsFade: 0.4,
          totalSideLightSticks: 20,
          lightPairsPerRoadWay: 40,
          shoulderLinesWidthPercentage: 0.05,
          brokenLinesWidthPercentage: 0.1,
          brokenLinesLengthPercentage: 0.5,
          lightStickWidth: [0.12, 0.5],
          lightStickHeight: [1.3, 1.7],
          movingAwaySpeed: [60, 80],
          movingCloserSpeed: [-120, -160],
          carLightsLength: [400 * 0.03, 400 * 0.2],
          carLightsRadius: [0.05, 0.14],
          carWidthPercentage: [0.3, 0.5],
          carShiftX: [-0.8, 0.8],
          carFloorSeparation: [0, 5],
          colors: {
            roadColor: 0x080808,
            islandColor: 0x0a0a0a,
            background: 0x000000,
            shoulderLines: 0xffffff,
            brokenLines: 0xffffff,
            leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
            rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
            sticks: 0x03b3c3,
          },
        }}
      />
      <header className="header">
        <div className="brand">
          <img
            src="images/FulllogowithoutBG.png"
            alt="Logo"
            className="brand-logo"
          />
        </div>
      </header>

      <main className="main">
        <section
          className={`grid-container ${isFullscreen ? "hidden" : ""}`}
          ref={gridRef}
        >
          {tiles.map((src, index) => (
            <div
              key={src}
              className={[
                "grid-item",
                activeIndex === index ? "is-focused" : "",
                activeIndex !== index ? "dimmed" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              style={{ backgroundImage: `url("${src}")` }}
            />
          ))}
        </section>
      </main>

      <div className={`backdrop-blur ${isFullscreen ? "active" : ""}`} />

      <div className="cursor-overlay">
        <div className="cursor-image" ref={cursorRef} />
      </div>

      <footer className="footer">
        <span>
          Move your mouse across the wall – the image under your cursor fills
          the entire screen.
        </span>
      </footer>
    </div>
  );
}

export default App;


