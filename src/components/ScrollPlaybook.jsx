import { useEffect, useRef, useMemo } from "react";
import industries from "../data/industries";
import "./scroll-playbook.css";

const hasScrollTimelineSupport =
  typeof CSS !== "undefined" &&
  CSS.supports("(animation-timeline: scroll())") &&
  CSS.supports("animation-range: 0 100%");

function pickImages(data) {
  const pool = data.flatMap((ind) => ind.images.slice(0, 1));
  return {
    layer1: pool.slice(0, 6),
    layer2: pool.slice(6, 12),
    layer3: pool.slice(12, 14),
    scaler: pool[4] || pool[0],
  };
}

function easeOutPow(t, power = 2) {
  return 1 - Math.pow(1 - t, power);
}

function ScrollPlaybook() {
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);
  const scalerRef = useRef(null);
  const layerRefs = useRef([]);

  const images = useMemo(() => pickImages(industries), []);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || hasScrollTimelineSupport) return;

    const section = sectionRef.current;
    const scalerImg = scalerRef.current;
    const layers = layerRefs.current.filter(Boolean);
    if (!section || !scalerImg) return;

    const gutter = 32;
    const layerEases = [
      (t) => easeOutPow(t, 1),
      (t) => easeOutPow(t, 3),
      (t) => easeOutPow(t, 4),
    ];
    const layerRanges = [0, -0.1, -0.2];

    const update = () => {
      const rect = section.getBoundingClientRect();
      const scrollable = Math.max(section.offsetHeight - window.innerHeight, 1);
      const raw = Math.min(Math.max(-rect.top / scrollable, 0), 1);

      const scalerCell = scalerImg.parentElement;
      const cellW = scalerCell?.offsetWidth || 200;
      const cellH = scalerCell?.offsetHeight || 250;
      const startW = window.innerWidth - gutter * 2;
      const startH = window.innerHeight - gutter * 2;

      const widthT = easeOutPow(raw, 2);
      const heightT = easeOutPow(raw, 1);
      scalerImg.style.width = `${startW + (cellW - startW) * widthT}px`;
      scalerImg.style.height = `${startH + (cellH - startH) * heightT}px`;

      layers.forEach((layer, i) => {
        const rangeOffset = layerRanges[i] ?? 0;
        const layerProgress = Math.min(
          Math.max((raw - rangeOffset) / (1 + Math.abs(rangeOffset)), 0),
          1
        );
        const opacity =
          layerProgress <= 0.55 ? 0 : (layerProgress - 0.55) / 0.45;
        const scale =
          layerProgress <= 0.3 ? 0 : layerEases[i]?.((layerProgress - 0.3) / 0.7) ?? layerProgress;
        layer.style.opacity = String(opacity);
        layer.style.transform = `scale(${scale})`;
      });
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      scalerImg.style.width = "";
      scalerImg.style.height = "";
      layers.forEach((layer) => {
        layer.style.opacity = "";
        layer.style.transform = "";
      });
    };
  }, []);

  const renderLayer = (urls, layerIndex) => (
    <div
      className="scroll-playbook__layer"
      ref={(el) => {
        layerRefs.current[layerIndex] = el;
      }}
    >
      {urls.map((src) => (
        <div key={src} className="scroll-playbook__cell">
          <img src={src} alt="" loading="lazy" decoding="async" />
        </div>
      ))}
    </div>
  );

  return (
    <div
      className="scroll-playbook"
      data-enhanced="true"
      data-center="true"
      data-layers="true"
      data-stagger="range"
    >
      <section ref={sectionRef} className="scroll-playbook__runner">
        <div ref={stickyRef} className="scroll-playbook__sticky">
          <div className="scroll-playbook__intro">
            <span className="scroll-playbook__label">The WHNL Universe</span>
            <h2 className="scroll-playbook__title">
              let&apos;s
              <br />
              scroll.
            </h2>
          </div>
          <div className="scroll-playbook__grid">
            {renderLayer(images.layer1, 0)}
            {renderLayer(images.layer2, 1)}
            {renderLayer(images.layer3, 2)}
            <div className="scroll-playbook__scaler">
              <img
                ref={scalerRef}
                src={images.scaler}
                alt="WHNL portfolio highlight"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="scroll-playbook__fin">
        <span className="scroll-playbook__fin-label">Portfolio</span>
        <h2 className="scroll-playbook__fin-title">fin.</h2>
      </section>
    </div>
  );
}

export default ScrollPlaybook;
