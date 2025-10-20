import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname, hostname } = request.nextUrl;

  // Redirection globale de .re vers .fr
  if (hostname.endsWith(".re")) {
    const url = request.nextUrl.clone();
    url.hostname = hostname.replace(".re", ".fr");
    return NextResponse.redirect(url, 308); // redirection permanente
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

  return NextResponse.next();
}
