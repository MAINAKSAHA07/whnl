import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'postprocessing';

function Hyperspeed({ effectOptions = {} }) {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const composerRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(effectOptions.colors?.background || 0x000000);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      effectOptions.fov || 90,
      width / height,
      0.1,
      1000
    );
    camera.position.z = 0;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create road geometry
    const roadLength = effectOptions.length || 400;
    const roadWidth = effectOptions.roadWidth || 10;
    const islandWidth = effectOptions.islandWidth || 2;
    const lanesPerRoad = effectOptions.lanesPerRoad || 4;

    // Create road segments
    const roadGeometry = new THREE.PlaneGeometry(roadWidth, roadLength);
    const roadMaterial = new THREE.MeshBasicMaterial({ 
      color: effectOptions.colors?.roadColor || 0x080808 
    });

    // Create island
    const islandGeometry = new THREE.PlaneGeometry(islandWidth, roadLength);
    const islandMaterial = new THREE.MeshBasicMaterial({ 
      color: effectOptions.colors?.islandColor || 0x0a0a0a 
    });

    // Create multiple road segments for scrolling effect
    const segments = [];
    for (let i = 0; i < 20; i++) {
      const road = new THREE.Mesh(roadGeometry, roadMaterial);
      road.position.z = -i * (roadLength / 10);
      road.position.y = -2;
      scene.add(road);
      segments.push(road);

      const island = new THREE.Mesh(islandGeometry, islandMaterial);
      island.position.z = -i * (roadLength / 10);
      island.position.y = -2;
      scene.add(island);
    }

    // Create light sticks
    const totalSideLightSticks = effectOptions.totalSideLightSticks || 20;
    const lightStickWidth = effectOptions.lightStickWidth || [0.12, 0.5];
    const lightStickHeight = effectOptions.lightStickHeight || [1.3, 1.7];
    const stickColor = effectOptions.colors?.sticks || 0x03B3C3;

    const lightSticks = [];
    for (let i = 0; i < totalSideLightSticks; i++) {
      const width = THREE.MathUtils.randFloat(lightStickWidth[0], lightStickWidth[1]);
      const height = THREE.MathUtils.randFloat(lightStickHeight[0], lightStickHeight[1]);
      const stickGeometry = new THREE.BoxGeometry(width, height, 0.1);
      const stickMaterial = new THREE.MeshBasicMaterial({ color: stickColor });
      
      const stick = new THREE.Mesh(stickGeometry, stickMaterial);
      stick.position.z = -i * (roadLength / totalSideLightSticks);
      stick.position.x = (roadWidth / 2) + 0.5;
      stick.position.y = -1;
      scene.add(stick);
      lightSticks.push(stick);

      // Right side
      const stickRight = new THREE.Mesh(stickGeometry, stickMaterial);
      stickRight.position.z = -i * (roadLength / totalSideLightSticks);
      stickRight.position.x = -(roadWidth / 2) - 0.5;
      stickRight.position.y = -1;
      scene.add(stickRight);
      lightSticks.push(stickRight);
    }

    // Animation variables
    let speed = 0;
    let targetSpeed = 0;
    const baseSpeed = 5;
    const speedUp = effectOptions.speedUp || 2;

    // Animation loop
    function animate() {
      animationFrameRef.current = requestAnimationFrame(animate);

      // Smooth speed transition
      speed += (targetSpeed - speed) * 0.1;
      const currentSpeed = baseSpeed + speed * speedUp;

      // Move road segments
      segments.forEach((segment, index) => {
        segment.position.z += currentSpeed;
        if (segment.position.z > 10) {
          segment.position.z -= roadLength * 2;
        }
      });

      // Move light sticks
      lightSticks.forEach((stick) => {
        stick.position.z += currentSpeed;
        if (stick.position.z > 10) {
          stick.position.z -= roadLength;
        }
      });

      // Update camera FOV for speed effect
      const targetFov = speed > 0 
        ? (effectOptions.fovSpeedUp || 150) 
        : (effectOptions.fov || 90);
      camera.fov += (targetFov - camera.fov) * 0.1;
      camera.updateProjectionMatrix();

      renderer.render(scene, camera);
    }

    animate();

    // Speed up on mouse move
    const handleMouseMove = () => {
      targetSpeed = 1;
      if (effectOptions.onSpeedUp) effectOptions.onSpeedUp();
    };

    const handleMouseLeave = () => {
      targetSpeed = 0;
      if (effectOptions.onSlowDown) effectOptions.onSlowDown();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Handle resize
    const handleResize = () => {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      if (rendererRef.current) {
        rendererRef.current.dispose();
        if (container.contains(rendererRef.current.domElement)) {
          container.removeChild(rendererRef.current.domElement);
        }
      }

      // Dispose geometries and materials
      segments.forEach(segment => {
        segment.geometry.dispose();
        segment.material.dispose();
      });

      lightSticks.forEach(stick => {
        stick.geometry.dispose();
        stick.material.dispose();
      });
    };
  }, [effectOptions]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none'
      }}
    />
  );
}

export default Hyperspeed;

