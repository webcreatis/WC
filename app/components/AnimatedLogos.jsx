"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

import logo6w2h from "../assets/images/logo-6w2h-webcreatis.webp";
import logoSeaIntense from "../assets/images/logo-sea-intense-reunion.webp";
import logoSurya from "../assets/images/logo-villa-surya-sophie-piccirilli-reunion.webp";

const AnimatedLogos = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    // Récupérer les dimensions du conteneur
    const { clientWidth, clientHeight } = container;

    // Configuration de base
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      clientWidth / clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    console.log("renderer", renderer);

    // Attacher le canvas au DOM
    renderer.setSize(clientWidth, clientHeight, false);
    // renderer.setClearColor("#234E42");
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.position = "absolute";
    container.appendChild(renderer.domElement);

    // Position initiale de la caméra
    camera.position.z = 5;

    // Lumières
    const light = new THREE.AmbientLight(0xffffff, 1); // Lumière douce
    scene.add(light);

    // Loader pour les textures des logos
    const textureLoader = new THREE.TextureLoader();

    // Tableau pour stocker les objets (logos)
    const logos = [];
    const logoPaths = [
      logoSeaIntense.src,
      logo6w2h.src,
      logoSurya.src,
      logoSeaIntense.src,
      logo6w2h.src,
      logoSurya.src,
      logoSeaIntense.src,
      logo6w2h.src,
      logoSurya.src,
      logoSeaIntense.src,
      logo6w2h.src,
      logoSurya.src,
      logoSeaIntense.src,
      logo6w2h.src,
      logoSurya.src,
      logoSeaIntense.src,
      logo6w2h.src,
      logoSurya.src,
    ];

    // Créer plusieurs logos
    logoPaths.forEach((path) => {
      const texture = textureLoader.load(path);
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        color: 0xffffff,
        transparent: true, // Permet à la texture d'avoir des zones transparentes
        opacity: 1,
      });
      const geometry = new THREE.PlaneGeometry(1.5, 1.5); // Taille initiale des logos
      const logo = new THREE.Mesh(geometry, material);

      // Position et mouvement aléatoires
      logo.position.set(
        (Math.random() - 0.5) * 10, // Position X aléatoire
        (Math.random() - 0.5) * 6, // Position Y aléatoire
        0
      );
      logo.userData = {
        dx: (Math.random() - 0.5) * 0.05, // Vitesse X aléatoire
        dy: (Math.random() - 0.5) * 0.05, // Vitesse Y aléatoire
      };

      logos.push(logo);
      scene.add(logo);
    });

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Mettre à jour les positions des logos
      logos.forEach((logo) => {
        logo.position.x += logo.userData.dx;
        logo.position.y += logo.userData.dy;

        // Rebonds sur les bords
        if (logo.position.x > 5 || logo.position.x < -5) {
          logo.userData.dx *= -1;
        }
        if (logo.position.y > 3 || logo.position.y < -3) {
          logo.userData.dy *= -1;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Nettoyage lors du démontage
    return () => {
      renderer.dispose();
      if (containerRef.current) {
        if (container) container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full"></div>;
};

export default AnimatedLogos;
