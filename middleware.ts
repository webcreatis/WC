// middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  console.log("pathname--------------", pathname);

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
    console.log("ok in legacy routes--------------");
    const url = request.nextUrl.clone();
    url.pathname = "/"; // redirige vers la page d’accueil
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}
