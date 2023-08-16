import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import binaryTextureUrl from '../assets/back.jpg';

const Shape = () => {
  const containerRef = useRef();
  let camera, scene, renderer;
  const characters = [];

  const updateRendererSize = () => {
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;
    renderer.setSize(width, height);
  };

  useEffect(() => {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    updateRendererSize();
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    // Create binary code material
    const binaryTexture = new THREE.TextureLoader().load(binaryTextureUrl);
    const binaryMaterial = new THREE.SpriteMaterial({ map: binaryTexture });

    // Create binary code characters
    const numCharacters = 1000;
    for (let i = 0; i < numCharacters; i++) {
      const character = new THREE.Sprite(binaryMaterial);
      const x = Math.random() * 10 - 5; // Random x position
      const y = Math.random() * 10 - 5; // Random y position
      const z = Math.random() * 10 - 5; // Random z position
      character.position.set(x, y, z);
      character.scale.set(0.05, 0.05, 1); // Scale down the character
      characters.push(character);
      scene.add(character);
    }

    animate();

    const onWindowResize = () => {
      updateRendererSize();
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onWindowResize);

    return () => {
      window.removeEventListener('resize', onWindowResize);
      containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  const animate = () => {
    requestAnimationFrame(animate);

    // Update binary code positions
    characters.forEach(character => {
      character.position.y -= 0.01; // Move down
      if (character.position.y < -5) {
        character.position.y = 5; // Reset position
      }
    });

    renderer.render(scene, camera);
  };

  return <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />;
};

export default Shape;
