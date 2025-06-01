import Link from "next/link";
import { posts } from "../datas/blog/posts";
import CustomCursor from "../ui/CustomCursor";

export default function PlanDeSite() {
  return (
    <section className="flex flex-col justify-center plan w-full h-full p-8 text-white pt-48">
      <div className="md:w-1/2 md:m-auto pb-20">
        <h1 className="text-3xl font-bold mb-6 font-jaapokki pt-10 pb-5 w-full md:pb-10 md:text-4xl lg:text-5xl">
          Plan du site
        </h1>

        <h2 className="text-xl font-semibold mt-4 pb-10">Pages principales</h2>
        <ul className="flex flex-col gap-5 list-disc pl-6">
          <li>
            <Link
              href="/"
              data-link="link"
              className="buttonAction focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-corail"
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              href="/creation-site-internet"
              data-link="link"
              className="buttonAction focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-corail"
            >
              Création de site internet
            </Link>
          </li>
          <li>
            <Link
              href="/#mentoring"
              data-link="link"
              className="buttonAction focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-corail"
            >
              Mentoring
            </Link>
          </li>
          <li>
            <Link
              href="/kap-numerik"
              data-link="link"
              className="buttonAction focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-corail"
            >
              Kap Numerik
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              data-link="link"
              className="buttonAction focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-corail"
            >
              Le Blog
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              data-link="link"
              className="buttonAction focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-corail"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/mentions-legales"
              data-link="link"
              className="buttonAction focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-corail"
            >
              Mentions légales
            </Link>
          </li>
          <li>
            <Link
              href="/politique-de-confidentialite"
              data-link="link"
              className="buttonAction focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-corail"
            >
              Politique de confidentialité
            </Link>
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">Articles de blog</h2>
        <ul className="list-disc pl-6 space-y-1 pt-10">
          {posts.map(({ slug, title }) => (
            <li key={slug}>
              <Link
                href={`/blog/${slug}`}
                data-link="link"
                className="buttonAction focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-corail"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <CustomCursor />
    </section>
  );
}
