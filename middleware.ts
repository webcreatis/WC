import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname, hostname } = request.nextUrl;
  const url = request.nextUrl.clone();

  // Redirection globale de .re vers .fr
  if (hostname.endsWith(".re")) {
    url.hostname = hostname.replace(".re", ".fr");
    return NextResponse.redirect(url, 308); // redirection permanente
  }

  // 2️⃣ Redirection www → non-www
  if (hostname.startsWith("www.")) {
    url.hostname = hostname.replace("www.", "");
    return NextResponse.redirect(url, 308);
  }

  // Liste des anciennes URLs à rediriger vers la racine
  const legacyRoutes = [
    "/web-design/",
    "/gestion-de-vos-reseaux-sociaux/",
    "/creation-de-logo/",
    "/design-print/",
    "/web-design",
    "/gestion-de-vos-reseaux-sociaux",
    "/creation-de-logo",
    "/design-print",
    "/testimonials/",
    "/testimonials",
    "/consultante-digitale/",
    "/consultante-digitale",
  ];

  if (legacyRoutes.includes(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = "/"; // redirige vers la page d’accueil
    return NextResponse.redirect(url, 308);
  }

  // 5️⃣ Si rien à rediriger, continuer
  return NextResponse.next();
}
