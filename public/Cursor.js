// On sélectionne l'élément <canvas> de la page
const canvas = document.querySelector("canvas");

// Timer pour surveiller le mouvement de la souris
let mouseTimer;
// Délai d'inactivité en ms
const idleDelay = 3000;

// On récupère le contexte 2D du canvas
const ctx = canvas.getContext("2d");

// Est ce que la souris a bougé ?
let mouseMoved = false;

// La variable pointer garde en mémoire la position actuelle de la souris
const pointer = {
  x: 0.5 * window.innerWidth,
  y: 0.5 * window.innerHeight,
};

// la variable params contient divers paramètres pour l'animation de la trace, comme le nombre de points, la largeur de la trace, la friction et le ressort.
const params = {
  pointsNumber: 40,
  widthFactor: 0.3,
  mouseThreshold: 0.6,
  spring: 0.4,
  friction: 0.5,
};

// Le tableau trail représente une séquence de points qui forment une traînée
const trail = new Array(params.pointsNumber);
for (let i = 0; i < params.pointsNumber; i++) {
  trail[i] = {
    // Chaque point de trail suit la souris et possède une position (x, y) et une vélocité (dx, dy).
    x: pointer.x,
    y: pointer.y,
    dx: 0,
    dy: 0,
  };
}

// Écouteurs d'Événements pour la Position de la Souris
window.addEventListener("click", (e) => {
  updateMousePosition(e.pageX, e.pageY);
});
window.addEventListener("mousemove", (e) => {
  mouseMoved = true;
  updateMousePosition(e.pageX, e.pageY);

  // Réinitialise le timer chaque fois que la souris bouge
  clearTimeout(mouseTimer);

  // Redémarre le timer pour détecter l'arrêt de la souris
  mouseTimer = setTimeout(() => {
    mouseMoved = false; // On définit `mouseMoved` à `false` pour déclencher l'animation
  }, idleDelay);
});
window.addEventListener("touchmove", (e) => {
  mouseMoved = true;
  updateMousePosition(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
});

// On met à jour les coordonnées x et y de la souris (pointer), avec les coordonnées passées en paramètres.
function updateMousePosition(eX, eY) {
  pointer.x = eX;
  pointer.y = eY;
}

setupCanvas();
update(0);
window.addEventListener("resize", setupCanvas);

// La fonction update est la boucle d'animation principale. Elle est appelée à chaque frame pour mettre à jour et dessiner la trace.
function update(t) {
  // Mouvement automatique si la souris n’a pas bougé
  if (!mouseMoved) {
    pointer.x =
      (0.5 + 0.3 * Math.cos(0.002 * t) * Math.sin(0.005 * t)) *
      window.innerWidth;
    pointer.y =
      (0.5 + 0.2 * Math.cos(0.005 * t) + 0.1 * Math.cos(0.01 * t)) *
      window.innerHeight;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Mise à jour des points de la trace
  trail.forEach((p, pIdx) => {
    const prev = pIdx === 0 ? pointer : trail[pIdx - 1];
    // spring contrôle la force d'attraction
    const spring = pIdx === 0 ? 0.4 * params.spring : params.spring;
    p.dx += (prev.x - p.x) * spring;
    p.dy += (prev.y - p.y) * spring;
    // friction réduit progressivement la vélocité pour amortir le mouvement.
    p.dx *= params.friction;
    p.dy *= params.friction;
    p.x += p.dx;
    p.y += p.dy;
  });

  // On arrondit les extrémités de chaque ligne
  ctx.lineCap = "round";
  // Couleur de la trace
  ctx.strokeStyle = "#7AE1AE";
  ctx.beginPath();
  ctx.moveTo(trail[0].x, trail[0].y);

  // Cette boucle crée des courbes quadratiques pour dessiner une ligne fluide entre chaque point de trail
  for (let i = 1; i < trail.length - 1; i++) {
    const xc = 0.5 * (trail[i].x + trail[i + 1].x);
    const yc = 0.5 * (trail[i].y + trail[i + 1].y);
    ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
    // varie en fonction de la distance du point à la souris, rendant la trace plus épaisse au début et plus fine à la fin.
    ctx.lineWidth = params.widthFactor * (params.pointsNumber - i);
    ctx.stroke();
  }
  ctx.lineTo(trail[trail.length - 1].x, trail[trail.length - 1].y);
  ctx.stroke();

  window.requestAnimationFrame(update);
}

// Cette fonction ajuste la taille du canvas pour remplir la fenêtre, et elle est appelée au chargement et au redimensionnement de la fenêtre.
function setupCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
