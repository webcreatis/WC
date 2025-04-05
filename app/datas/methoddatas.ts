type AccordionItemsTypes = {
  title: string;
  content: string;
  bg: string;
};


const accordionItems: AccordionItemsTypes[] = [
  {
    title: "Analyse & Stratégie",
    content: `Nous commençons par comprendre vos besoins et vos objectifs. Ensuite, une étude des mots-clés permet de choisir ceux qui correspondent le mieux à votre activité. 
    Enfin, nous définissons ensemble un plan clair et adapté pour créer un site qui répond à vos attentes et attire les bonnes audiences.`,
    bg: "bg-white",
  },
  {
    title: "Wireframe & Maquettes",
    content: `Wireframes et maquettes :\n 
    On imagine d’abord la structure du site pour que l’information soit super claire, 
    puis on s’assure que tout roule niveau navigation et expérience utilisateur !`,
    bg: "bg-white",
  },
  {
    title: "Développement",
    content: `Nous créons votre site web sur-mesure, en répondant exactement à vos besoins, avec une priorité sur le mobile-first. 
    En plus, nous intégrons des outils top comme les CMS (Directus, Strapi), les systèmes de mailing (Mailchimp), et bien plus, pour vous offrir une expérience ultra fluide et hyper connectée.`,
    bg: "bg-white",
  },
  {
    title: "Optimisations SEO",
    content: `Dès le départ, on met le SEO au cœur du projet ! On choisit les mots-clés stratégiques, on crée une stratégie éditoriale percutante et on configure les redirections pour une meilleure visibilité. 
    Avant le lancement, on vérifie tout : les titres, le balisage, la vitesse du site, et l’accessibilité pour garantir des performances optimales selon les critères de Google Web Vitals`,
    bg: "bg-white",
  },
  {
    title: "Tests & Déploiement",
    content: `Nous testons la compatibilité du site sur tous les appareils et navigateurs. Avant le lancement, nous vérifions que tout fonctionne parfaitement. 
    Après mise en ligne, nous suivons les performances et ajustons selon les retours et les indicateurs SEO.`,
    bg: "bg-white",
  },
];

export default accordionItems