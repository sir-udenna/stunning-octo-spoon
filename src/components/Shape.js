import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Shape = () => {
    const containerRef = useRef();

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            25,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x808080, 0.1);
        containerRef.current.appendChild(renderer.domElement);

        // Add ambient light
        const ambientLight = new THREE.AmbientLight(0xffffff, 30);
        scene.add(ambientLight);

        // Add directional light
        const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
        directionalLight.position.set(1, 1, 1);
        scene.add(directionalLight);


        // Create a rotating square while i think of what might make this look more interesting
        const squareGeometry = new THREE.BoxGeometry(1, 1, 1);
        const squareMaterial = new THREE.MeshStandardMaterial({ color: 0xf8f8f8 }); // Grey color
        const square = new THREE.Mesh(squareGeometry, squareMaterial);
        scene.add(square);

        const animate = () => {
            requestAnimationFrame(animate);
            square.rotation.x += 0.001;
            square.rotation.y += 0.01;
            renderer.render(scene, camera);
        };

        animate();

        const onWindowResize = () => {
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

    return <div ref={containerRef} />;
};

export default Shape;
