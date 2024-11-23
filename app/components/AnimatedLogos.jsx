"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

import logo6w2h from "../assets/images/6W2H-ERIC-JULIEN.webp";
import logoDrValerieLaval from "../assets/images/DR-LAVAL-VALERIE.webp";
import logoDrJulien from "../assets/images/DR-VIVIER-JULIEN.webp";
import logoEnvergure from "../assets/images/ENVERGURE.webp";
import logoExpertNet from "../assets/images/EXPERT.NET.webp";
import logoSeaIntense from "../assets/images/logo-sea-intense-reunion.webp";
import logoReunionPortage from "../assets/images/REUNION-PORTAGE.webp";
import logoSimplon from "../assets/images/SIMPLON-OUTRE-MER.webp";
import logoSurya from "../assets/images/VILLA-SURYA-SOPHIE-PICCIRILLI.webp";

const AnimatedLogos = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    // Récupérer les dimensions du conteneur
    const { clientWidth, clientHeight } = container;

    // Configuration de base
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x18181b); // Noir
    const camera = new THREE.PerspectiveCamera(
      75,
      clientWidth / clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    // Attacher le canvas au DOM
    renderer.setSize(clientWidth, clientHeight, false);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.position = "absolute";
    container.appendChild(renderer.domElement);

    // Position initiale de la caméra
    camera.position.z = 5;

    // Lumières
    const light = new THREE.AmbientLight(0x18181b, 1); // Lumière douce
    scene.add(light);

    // Loader pour les textures des logos
    const textureLoader = new THREE.TextureLoader();

    let hoveredLogo = null;

    // Tableau pour stocker les objets (logos)
    const logos = [];

    // Liste des logos et des liens correspondants
    const logoPaths = [
      { src: logoSeaIntense.src, link: "https://www.seaintense.re/" },
      { src: logo6w2h.src, link: "https://www.6w2h.fr/" },
      { src: logoSurya.src, link: "https://sofiapiccirilli.com/fr" },
      { src: logoSimplon.src, link: "https://www.simplon.co/region/outre-mer" },
      {
        src: logoReunionPortage.src,
        link: "https://www.reunionportage.com/",
      },
      { src: logoExpertNet.src, link: "https://expernet.re/" },
      { src: logoEnvergure.src, link: "https://www.envergure.re/" },
      { src: logoDrJulien.src, link: "https://drjulienvivier.fr/" },
      {
        src: logoDrValerieLaval.src,
        link: "https://lyon-esthetique-dr-laval.com/",
      },
    ];

    // Créer plusieurs logos
    logoPaths.forEach((path) => {
      const texture = textureLoader.load(path.src);
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        color: 0xffffff,
        transparent: true, // Permet à la texture d'avoir des zones transparentes
        opacity: 1,
        blending: THREE.NormalBlending,
      });
      const geometry = new THREE.PlaneGeometry(1.6, 1.6); // Taille initiale des logos
      const logo = new THREE.Mesh(geometry, material);

      // Position et mouvement aléatoires
      logo.position.set(
        (Math.random() - 0.5) * 10, // Position X aléatoire
        (Math.random() - 0.5) * 6, // Position Y aléatoire
        0
      );
      logo.userData = {
        link: path.link,
        dx: (Math.random() - 0.5) * 0.05, // Vitesse X aléatoire
        dy: (Math.random() - 0.5) * 0.05, // Vitesse Y aléatoire
        isHovered: false, // Ajout d'un indicateur de survol
      };

      logos.push(logo);
      scene.add(logo);
    });

    // Ajouter un raycaster pour détecter les clics
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onMouseClick = (event) => {
      // Calculer la position de la souris dans le canevas
      const rect = container.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      // Lancer le raycaster
      raycaster.setFromCamera(mouse, camera);

      // Vérifier les intersections
      const intersects = raycaster.intersectObjects(logos);
      if (intersects.length > 0) {
        const clickedLogo = intersects[0].object;
        const url = clickedLogo.userData.link;

        if (url) {
          window.open(url, "_blank"); // Ouvrir le lien dans un nouvel onglet
        }
      }
    };

    // Ajouter l'écouteur d'événements pour les clics
    container.addEventListener("click", onMouseClick);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Mettre à jour les positions des logos
      logos.forEach((logo) => {
        if (!logo.userData.isHovered) {
          logo.position.x += logo.userData.dx;
          logo.position.y += logo.userData.dy;

          // Rebonds sur les bords
          if (logo.position.x > 5 || logo.position.x < -5) {
            logo.userData.dx *= -1;
          }
          if (logo.position.y > 3 || logo.position.y < -3) {
            logo.userData.dy *= -1;
          }
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Gestion des événements de souris
    const onMouseMove = (event) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(logos);

      if (intersects.length > 0) {
        const intersectedLogo = intersects[0].object;

        if (hoveredLogo && hoveredLogo !== intersectedLogo) {
          hoveredLogo.userData.isHovered = false; // Réactiver le mouvement pour l'ancien logo
        }

        hoveredLogo = intersectedLogo;
        hoveredLogo.userData.isHovered = true; // Stopper le logo en survol
      } else if (hoveredLogo) {
        hoveredLogo.userData.isHovered = false; // Réactiver le mouvement si aucun logo n'est survolé
        hoveredLogo = null;
      }
    };

    const onClick = () => {
      if (hoveredLogo && hoveredLogo.userData.link) {
        window.open(hoveredLogo.userData.link, "_blank");
      }
    };

    renderer.domElement.addEventListener("mousemove", onMouseMove);
    renderer.domElement.addEventListener("click", onClick);

    // Nettoyage lors du démontage
    return () => {
      renderer.dispose();
      if (containerRef.current) {
        if (container) {
          container.removeChild(renderer.domElement);
          container.removeEventListener("click", onMouseClick);
          container.removeEventListener("mousemove", onMouseMove);
          container.removeEventListener("click", onClick);
        }
      }
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full"></div>;
};

export default AnimatedLogos;
