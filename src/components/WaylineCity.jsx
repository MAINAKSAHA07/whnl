import React, { useEffect, useRef } from "react";
import * as THREE from "three";

function WaylineCity() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene setup
    const scene = new THREE.Scene();
    
    // Rich sunset peach-orange fog blending
    scene.fog = new THREE.FogExp2(0xb37e55, 0.0055);

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 6, 35);
    camera.lookAt(0, 11, -70);

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true, // transparent to let CSS sky gradient show through
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0x42333b, 2.5);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffdfb3, 4.5);
    sunLight.position.set(-65, 12, -110);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    scene.add(sunLight);

    // 5. Twinkling Stars
    const starCount = 100;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 160;
      starPositions[i * 3 + 1] = 20 + Math.random() * 45;
      starPositions[i * 3 + 2] = -90 - Math.random() * 80;
    }

    starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    const starMaterial = new THREE.PointsMaterial({
      color: 0xfff2e0,
      size: 0.35,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const starPoints = new THREE.Points(starGeometry, starMaterial);
    scene.add(starPoints);

    // 6. Volumetric Sun Rays (Sunset Beams)
    const rayTexture = (() => {
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 256;
      const ctx = canvas.getContext("2d");
      const grad = ctx.createLinearGradient(0, 256, 0, 0);
      grad.addColorStop(0, "rgba(253, 215, 150, 0.24)");
      grad.addColorStop(0.5, "rgba(253, 215, 150, 0.08)");
      grad.addColorStop(1, "rgba(253, 215, 150, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 64, 256);
      return new THREE.CanvasTexture(canvas);
    })();

    const rayCount = 6;
    const rays = [];
    const rayGeometry = new THREE.PlaneGeometry(16, 120);

    for (let i = 0; i < rayCount; i++) {
      const rayMat = new THREE.MeshBasicMaterial({
        map: rayTexture,
        transparent: true,
        opacity: 0.15,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.DoubleSide,
      });
      const rayMesh = new THREE.Mesh(rayGeometry, rayMat);
      rayMesh.position.set(-65, 8, -108);
      rayMesh.rotation.z = -0.55 + (i * 0.22);
      rayMesh.position.z += i * 0.1;
      
      scene.add(rayMesh);
      rays.push({
        mesh: rayMesh,
        speed: 0.45 + Math.random() * 0.5,
        baseOpacity: 0.08 + Math.random() * 0.12,
      });
    }

    // 7. Skyscraper city blocks - Moved lower down to touch mountains
    const buildingsGroup = new THREE.Group();
    // Lowered buildings group Y position from -10.5 to -18.0 so they touch and tuck deep behind mountain outlines
    buildingsGroup.position.y = -18.0;
    const buildingCount = 60; // increased count slightly for thickness
    const buildings = [];

    const buildingMaterial = new THREE.MeshStandardMaterial({
      color: 0x1f1a20,
      roughness: 0.38,
      metalness: 0.78,
      flatShading: true,
    });

    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0xffb85c,
      toneMapped: false,
    });

    for (let i = 0; i < buildingCount; i++) {
      const bX = (Math.random() - 0.5) * 140;
      const bZ = -55 - Math.random() * 115;

      const distanceFromCenter = Math.abs(bX);
      const centerFactor = Math.max(0, 1 - (distanceFromCenter / 70));
      const bHeight = 8 + (Math.random() * 20) + (centerFactor * 48);
      const bWidth = 3.5 + Math.random() * 4.5;
      const bDepth = 3.5 + Math.random() * 4.5;

      const foundation = 90; // Extend deep below mountain line
      const geom = new THREE.BoxGeometry(bWidth, bHeight + foundation, bDepth);
      const mesh = new THREE.Mesh(geom, buildingMaterial);
      
      mesh.position.set(bX, (bHeight - foundation) / 2, bZ);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      buildingsGroup.add(mesh);

      const isCentralTower = distanceFromCenter < 30 && bHeight > 32;
      if (isCentralTower && Math.random() > 0.3) {
        const stripeWidth = 0.3;
        const stripeHeight = bHeight * 0.8;
        const stripeGeom = new THREE.BoxGeometry(stripeWidth, stripeHeight, 0.1);
        const stripeMesh = new THREE.Mesh(stripeGeom, glowMaterial);
        
        stripeMesh.position.set(0, bHeight * 0.08, bDepth / 2 + 0.08);
        mesh.add(stripeMesh);
      }

      buildings.push(mesh);
    }
    scene.add(buildingsGroup);

    // 8. Foreground & Background Mountains (Increased from 3 to 7 overlapping layers)
    const hillGroup = new THREE.Group();
    const hillMaterial = new THREE.MeshStandardMaterial({
      color: 0x06080d,
      roughness: 0.95,
      metalness: 0.05,
      flatShading: true,
    });

    // 1. Distant Background Hill Left
    const hillBackLeft = new THREE.Mesh(new THREE.SphereGeometry(120, 24, 24), hillMaterial);
    hillBackLeft.position.set(-45, -112, -85);
    hillBackLeft.scale.set(1.3, 0.6, 1);
    hillBackLeft.receiveShadow = true;
    hillGroup.add(hillBackLeft);

    // 2. Distant Background Hill Right
    const hillBackRight = new THREE.Mesh(new THREE.SphereGeometry(130, 24, 24), hillMaterial);
    hillBackRight.position.set(50, -118, -95);
    hillBackRight.scale.set(1.4, 0.6, 1);
    hillBackRight.receiveShadow = true;
    hillGroup.add(hillBackRight);

    // 3. Midground Far Left Hill
    const hillMidLeft = new THREE.Mesh(new THREE.SphereGeometry(140, 32, 32), hillMaterial);
    hillMidLeft.position.set(-95, -125, -60);
    hillMidLeft.scale.set(1.2, 0.65, 1);
    hillMidLeft.receiveShadow = true;
    hillGroup.add(hillMidLeft);

    // 4. Midground Far Right Hill
    const hillMidRight = new THREE.Mesh(new THREE.SphereGeometry(140, 32, 32), hillMaterial);
    hillMidRight.position.set(95, -132, -65);
    hillMidRight.scale.set(1.3, 0.65, 1);
    hillMidRight.receiveShadow = true;
    hillGroup.add(hillMidRight);

    // 5. Close Left Hill
    const hillLeft = new THREE.Mesh(new THREE.SphereGeometry(135, 32, 32), hillMaterial);
    hillLeft.position.set(-50, -122, -38);
    hillLeft.scale.set(1.0, 0.68, 1);
    hillLeft.receiveShadow = true;
    hillGroup.add(hillLeft);

    // 6. Close Right Hill
    const hillRight = new THREE.Mesh(new THREE.SphereGeometry(145, 32, 32), hillMaterial);
    hillRight.position.set(55, -131, -48);
    hillRight.scale.set(1.1, 0.68, 1);
    hillRight.receiveShadow = true;
    hillGroup.add(hillRight);

    // 7. Foreground Center Hill
    const hillFront = new THREE.Mesh(new THREE.SphereGeometry(110, 48, 48), hillMaterial);
    hillFront.position.set(0, -99, 6);
    hillFront.scale.set(1.4, 0.55, 1);
    hillFront.receiveShadow = true;
    hillGroup.add(hillFront);

    scene.add(hillGroup);

    // 9. Foreground Grass Silhouette Details (Dispersed on multiple hill ridges)
    const grassGroup = new THREE.Group();
    const bladeGeom = new THREE.ConeGeometry(0.12, 1.8, 3);
    const bladeMaterial = new THREE.MeshStandardMaterial({
      color: 0x05070a,
      roughness: 1.0,
      flatShading: true,
    });

    // Helper function to spawn grass on a sphere surface contour
    const spawnGrassOnHill = (sphereX, sphereY, sphereZ, radius, scaleX, scaleY, count, thetaStart, thetaEnd) => {
      for (let i = 0; i < count; i++) {
        const theta = thetaStart + (i / count) * (thetaEnd - thetaStart) + (Math.random() - 0.5) * 0.02;
        const gX = sphereX + Math.sin(theta) * radius * scaleX;
        const gY = sphereY - 0.4 + Math.cos(theta) * radius * scaleY;
        const gZ = sphereZ + 0.2 + (Math.random() - 0.5) * 1.5;

        const blade = new THREE.Mesh(bladeGeom, bladeMaterial);
        blade.position.set(gX, gY, gZ);

        blade.rotation.z = -theta + (Math.random() - 0.5) * 0.45;
        blade.rotation.x = (Math.random() - 0.5) * 0.3;

        const sY = 0.45 + Math.random() * 0.75;
        const sXZ = 0.55 + Math.random() * 0.45;
        blade.scale.set(sXZ, sY, sXZ);

        grassGroup.add(blade);
      }
    };

    // Front center hill grass (220 blades)
    spawnGrassOnHill(0, -99, 6, 110, 1.4, 0.55, 220, -0.72, 0.72);
    // Left close hill grass (80 blades)
    spawnGrassOnHill(-50, -122, -38, 135, 1.0, 0.68, 80, -0.4, 0.5);
    // Right close hill grass (80 blades)
    spawnGrassOnHill(55, -131, -48, 145, 1.1, 0.68, 80, -0.5, 0.4);

    scene.add(grassGroup);

    // 10. 3D Volumetric Puffy Cumulus Clouds
    const cloudMaterial3D = new THREE.MeshStandardMaterial({
      color: 0xd9bbaa,
      roughness: 0.98,
      metalness: 0.0,
      flatShading: true,
    });

    function createCloudCluster(centerX, centerY, centerZ, baseScale) {
      const group = new THREE.Group();
      group.position.set(centerX, centerY, centerZ);

      const spheresCount = 8 + Math.floor(Math.random() * 5);
      const spheres = [];

      for (let i = 0; i < spheresCount; i++) {
        const radius = 4 + Math.random() * 5.5;
        const geom = new THREE.SphereGeometry(radius, 8, 8);
        const mesh = new THREE.Mesh(geom, cloudMaterial3D);

        const ox = (Math.random() - 0.5) * 13;
        const oy = (Math.random() - 0.5) * 5;
        const oz = (Math.random() - 0.5) * 11;
        mesh.position.set(ox, oy, oz);

        mesh.scale.set(1, 0.72 + Math.random() * 0.2, 1);
        group.add(mesh);
        spheres.push(mesh);
      }

      group.scale.set(baseScale, baseScale, baseScale);
      scene.add(group);

      return {
        group,
        spheres,
        speed: 0.015 + Math.random() * 0.015,
      };
    }

    // Static massive cloud banks on the left
    const staticCloudLeft = createCloudCluster(-58, 6, -72, 1.6);
    const staticCloudLeftBack = createCloudCluster(-75, 16, -88, 1.25);

    // Drifting background cloud banks
    const driftingClouds = [
      createCloudCluster(20, 18, -100, 0.85),
      createCloudCluster(65, 22, -120, 1.1),
      createCloudCluster(-10, 24, -95, 0.75),
    ];

    // 11. Interactive Mouse Parallax variables
    let mouseX = 0;
    let mouseY = 0;
    let targetCameraX = 0;
    let targetCameraY = 6;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth) - 0.5;
      mouseY = (e.clientY / window.innerHeight) - 0.5;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // 12. Animation Loop
    let clock = new THREE.Clock();
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Twinkle stars
      starMaterial.opacity = 0.5 + Math.sin(elapsedTime * 1.6) * 0.25;

      // Pulse sunbeam rays
      rays.forEach((ray, i) => {
        ray.mesh.material.opacity = ray.baseOpacity + Math.sin(elapsedTime * ray.speed + i) * 0.04;
      });

      // Breathing animation on static cloud spheres
      staticCloudLeft.spheres.forEach((sphere, idx) => {
        sphere.scale.y = (0.75 + Math.sin(elapsedTime * 0.5 + idx) * 0.04);
      });
      staticCloudLeftBack.spheres.forEach((sphere, idx) => {
        sphere.scale.y = (0.75 + Math.sin(elapsedTime * 0.4 + idx) * 0.04);
      });

      // Drift drifting clouds and breathe their spheres
      driftingClouds.forEach((cloud) => {
        cloud.group.position.x += cloud.speed;
        if (cloud.group.position.x > 95) {
          cloud.group.position.x = -95;
          cloud.group.position.y = 10 + Math.random() * 15;
        }

        cloud.spheres.forEach((sphere, idx) => {
          sphere.scale.y = (0.75 + Math.sin(elapsedTime * 0.75 + idx) * 0.04);
        });
      });

      // Smooth camera interpolation based on mouse
      targetCameraX = mouseX * 14;
      targetCameraY = 6 - mouseY * 7;

      camera.position.x += (targetCameraX - camera.position.x) * 0.04;
      camera.position.y += (targetCameraY - camera.position.y) * 0.04;
      camera.lookAt(0, 10, -70);

      renderer.render(scene, camera);
    };

    animate();

    // 13. Resize handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener("resize", handleResize);

    // 14. Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      
      starGeometry.dispose();
      starMaterial.dispose();
      buildingMaterial.dispose();
      glowMaterial.dispose();
      hillMaterial.dispose();
      rayGeometry.dispose();
      rayTexture.dispose();
      bladeGeom.dispose();
      bladeMaterial.dispose();
      cloudMaterial3D.dispose();

      buildings.forEach((b) => {
        b.geometry.dispose();
      });
      
      hillBackLeft.geometry.dispose();
      hillBackRight.geometry.dispose();
      hillMidLeft.geometry.dispose();
      hillMidRight.geometry.dispose();
      hillLeft.geometry.dispose();
      hillRight.geometry.dispose();
      hillFront.geometry.dispose();

      rays.forEach((ray) => {
        ray.mesh.material.dispose();
      });

      // Dispose static cloud geometries
      staticCloudLeft.spheres.forEach((s) => {
        s.geometry.dispose();
      });
      staticCloudLeftBack.spheres.forEach((s) => {
        s.geometry.dispose();
      });

      // Dispose drifting cloud geometries
      driftingClouds.forEach((cloud) => {
        cloud.spheres.forEach((s) => {
          s.geometry.dispose();
        });
      });

      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(to bottom, #06090f 0%, #101115 28%, #2f201b 52%, #b57a4a 78%, #ebcb86 100%)",
        overflow: "hidden",
        zIndex: 1,
      }}
    />
  );
}

export default WaylineCity;
