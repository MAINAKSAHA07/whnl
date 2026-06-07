import React, { useRef, useState, useEffect } from "react";

function DomeGallery({ items = [] }) {
  const containerRef = useRef(null);
  const [rotationY, setRotationY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startRotation, setStartRotation] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const animationFrameRef = useRef(null);

  // Flatten or map items to get a single array of images with industry meta
  const galleryImages = items.map((ind, i) => ({
    url: ind.images[0], // first image of each industry
    name: ind.name,
    accent: ind.accent
  }));

  const count = galleryImages.length;
  const angleIncrement = 360 / (count || 1);
  const radius = 380; // Cylinder radius in px

  // Inertia scrolling after release
  useEffect(() => {
    if (isDragging) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      return;
    }

    const decay = 0.95;
    const animateInertia = () => {
      if (Math.abs(velocity) > 0.05) {
        setRotationY((prev) => prev + velocity);
        setVelocity((prev) => prev * decay);
        animationFrameRef.current = requestAnimationFrame(animateInertia);
      } else {
        setVelocity(0);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animateInertia);

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isDragging, velocity]);

  // Touch & Mouse Event Handlers
  const handleStart = (clientX) => {
    setIsDragging(true);
    setStartX(clientX);
    setStartRotation(rotationY);
    setVelocity(0);
    lastXRef.current = clientX;
    lastTimeRef.current = Date.now();
  };

  const handleMove = (clientX) => {
    if (!isDragging) return;
    const dx = clientX - startX;
    // Map drag distance in pixels to rotation in degrees
    const sensitivity = 0.35;
    const nextRotation = startRotation + dx * sensitivity;
    setRotationY(nextRotation);

    // Track velocity
    const now = Date.now();
    const dt = now - lastTimeRef.current;
    if (dt > 0) {
      const currentDx = clientX - lastXRef.current;
      const currentVelocity = (currentDx / dt) * 12 * sensitivity;
      setVelocity((prev) => prev * 0.5 + currentVelocity * 0.5);
    }
    lastXRef.current = clientX;
    lastTimeRef.current = now;
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  const onMouseDown = (e) => {
    handleStart(e.clientX);
  };

  const onMouseMove = (e) => {
    handleMove(e.clientX);
  };

  const onMouseUp = () => {
    handleEnd();
  };

  const onTouchStart = (e) => {
    if (e.touches.length > 0) {
      handleStart(e.touches[0].clientX);
    }
  };

  const onTouchMove = (e) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const onTouchEnd = () => {
    handleEnd();
  };

  // Prevent scroll when dragging on mobile
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleTouchMove = (e) => {
      if (isDragging) {
        e.preventDefault();
      }
    };

    el.addEventListener("touchmove", handleTouchMove, { passive: false });
    return () => {
      el.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isDragging]);

  return (
    <div className="dome-gallery-section">
      <div className="dome-gallery-header">
        <h3 className="section-title-accent">Sectors in Motion</h3>
        <p className="section-subtitle">Swipe or drag to spin the 3D gallery and explore our active pursuits.</p>
      </div>

      <div
        className="dome-gallery-viewport"
        ref={containerRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="dome-gallery-cylinder"
          style={{
            transform: `translateZ(-${radius}px) rotateY(${-rotationY}deg)`,
            cursor: isDragging ? "grabbing" : "grab"
          }}
        >
          {galleryImages.map((img, index) => {
            const angle = index * angleIncrement;
            return (
              <div
                key={index}
                className="dome-gallery-card"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  borderTop: `3px solid ${img.accent || "#fff"}`
                }}
              >
                <div
                  className="dome-card-image"
                  style={{ backgroundImage: `url("${img.url}")` }}
                />
                <div className="dome-card-meta">
                  <span className="dome-card-number">{(index + 1).toString().padStart(2, '0')}</span>
                  <h4 className="dome-card-title">{img.name}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DomeGallery;
