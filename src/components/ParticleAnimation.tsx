import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ParticleAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const particlesRef = useRef<THREE.Group>();
  const animationRef = useRef<number>();

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup - positioned to show waves clearly
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / 350,
      0.1,
      1000
    );
    camera.position.set(0, 40, 100);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(window.innerWidth, 300);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Particle group
    const particleGroup = new THREE.Group();
    scene.add(particleGroup);
    particlesRef.current = particleGroup;

    // Create dense particle grid for clear wave visibility
    const gridSizeX = 120; // More particles horizontally
    const gridSizeZ = 60;  // Fewer particles in depth for clearer waves
    const spacingX = 4;    // Closer spacing for density
    const spacingZ = 6;    // Slightly more spacing in Z for wave clarity
    const particles: THREE.Mesh[] = [];

    for (let x = 0; x < gridSizeX; x++) {
      for (let z = 0; z < gridSizeZ; z++) {
        // Mix of circles and rectangles
        const isCircle = Math.random() > 0.5;
        
        let geometry: THREE.BufferGeometry;
        if (isCircle) {
          geometry = new THREE.CircleGeometry(0.6, 8);
        } else {
          geometry = new THREE.PlaneGeometry(1.0, 0.6);
        }

        const material = new THREE.MeshBasicMaterial({
          color: 0x22c55e, // Green color
          transparent: true,
          opacity: 0.8,
        });

        const particle = new THREE.Mesh(geometry, material);
        
        // Position particles in dense grid
        particle.position.x = (x - gridSizeX / 2) * spacingX;
        particle.position.z = (z - gridSizeZ / 2) * spacingZ;
        particle.position.y = 0;
        
        // Store data for wave calculation
        particle.userData = {
          originalX: particle.position.x,
          originalZ: particle.position.z,
          gridX: x,
          gridZ: z,
        };

        particleGroup.add(particle);
        particles.push(particle);
      }
    }

    // Animation loop with clear, short waves
    let time = 0;
    const animate = () => {
      time += 0.03;

      // Create clear, short wave patterns
      particles.forEach((particle) => {
        const { originalX, originalZ, gridX, gridZ } = particle.userData;
        
        // Short, clear wave patterns
        const waveFreq1 = 0.08;  // Primary wave frequency
        const waveFreq2 = 0.12;  // Secondary wave frequency
        const waveFreq3 = 0.05;  // Slow wave frequency
        
        // Calculate wave height with shorter, more visible waves
        const wave1 = Math.sin(time * 2 + gridX * waveFreq1) * 10;
        const wave2 = Math.sin(time * 1.5 + gridZ * waveFreq2) * 6;
        const wave3 = Math.sin(time * 0.8 + (gridX + gridZ) * waveFreq3) * 4;
        
        // Combine waves for complex motion
        const waveHeight = wave1 + wave2 + wave3;
        
        particle.position.y = waveHeight;
        
        // Minimal horizontal movement to keep waves clear
        particle.position.x = originalX + Math.sin(time * 0.5 + gridX * 0.1) * 1;
        particle.position.z = originalZ + Math.cos(time * 0.3 + gridZ * 0.1) * 0.5;
        
        // Dynamic opacity based on height for depth effect
        const material = particle.material as THREE.MeshBasicMaterial;
        const heightFactor = (waveHeight + 18) / 36; // Normalize to 0-1
        material.opacity = 0.4 + heightFactor * 0.5;
      });

      // Subtle camera movement for better wave visibility
      camera.position.x = Math.sin(time * 0.1) * 8;
      camera.position.y = 40 + Math.sin(time * 0.08) * 3;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!camera || !renderer) return;
      
      camera.aspect = window.innerWidth / 350;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, 350);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      
      // Dispose geometries and materials
      particles.forEach(particle => {
        particle.geometry.dispose();
        (particle.material as THREE.Material).dispose();
      });
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-full pointer-events-none"
      style={{ height: '350px' }}
    />
  );
};

export default ParticleAnimation;