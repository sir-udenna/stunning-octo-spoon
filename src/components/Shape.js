import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Shape = () => {
  const containerRef = useRef();
  const squares = [];

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75, // Wider field of view for mobile
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Set clear color to transparent
    containerRef.current.appendChild(renderer.domElement);

    // Create multiple rotating squares with wormhole effect
    const numSquares = 10;
    for (let i = 0; i < numSquares; i++) {
      const radius = 1 + i * 0.5; // Increase radius with each layer
      const opacity = 0.5 - i * 0.04;

      const squareGeometry = new THREE.TorusGeometry(radius, 0.2, 16, 100);
      const squareMaterial = new THREE.MeshBasicMaterial({
        color: 0x00ff00, // Green color
        transparent: true,
        opacity: opacity,
      });
      const square = new THREE.Mesh(squareGeometry, squareMaterial);
      scene.add(square);
      squares.push({ square });
    }

    let time = 0; // Initialize time

    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.020; // Increase time to control animation speed
      
      for (let i = 0; i < squares.length; i++) {
        const { square } = squares[i];
        const sineTime = Math.sin(time + i * 0.5); // Adjust frequency
        const scaleFactor = 1 + 0.1 * sineTime; // Adjust amplitude
        square.scale.set(scaleFactor, scaleFactor, scaleFactor);

        // Rotate the square
        square.rotation.x += 0.005;
        square.rotation.y += 0.01;
      }

      renderer.render(scene, camera);
    };

    animate();

    const onWindowResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', onWindowResize);

    return () => {
      window.removeEventListener('resize', onWindowResize);
      containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />;
};

export default Shape;
