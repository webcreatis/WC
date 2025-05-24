import fs from "fs";
import { Metadata } from "next";
import path from "path";

type tParams = Promise<{ slug: string[] }>;

export async function generateMetadata({
  params,
}: {
  params: tParams;
}): Promise<Metadata> {
  const { slug } = await params;

  return {
    title: `Article: ${slug}`,
    description: `Découvrez l'article ${slug} sur notre blog.`,
    openGraph: {
      title: `Article: ${slug}`,
      description: `Découvrez l'article ${slug} sur notre blog.`,
      url: `https://webcreatis.re/blog/${slug}`,
      type: "article",
    },
  };
}

export default async function PostPage({ params }: { params: tParams }) {
  const { slug } = await params;

  try {
    const { default: Post } = await import(`@/content/${slug}.mdx`);
    return <Post />;
  } catch (error) {
    console.error("Erreur : article introuvable", error);
    return <div>Article introuvable.</div>;
  }
}

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), "content");
  const files = fs.readdirSync(contentDir);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({
      slug: file.replace(/\.mdx$/, ""),
    }));
}
