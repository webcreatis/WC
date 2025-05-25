// middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Liste des anciennes URLs à rediriger vers la racine
  const legacyRoutes = [
    "/web-design/",
    "/gestion-de-vos-reseaux-sociaux/",
    "/creation-de-logo/",
    "/design-print/",
  ];

  if (legacyRoutes.includes(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = "/"; // redirige vers la page d’accueil
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}
