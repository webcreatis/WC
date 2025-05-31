import { getPostBySlug } from "@/app/utils/getPostBySlug";
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
  const post = getPostBySlug(`${slug}`);

  return {
    title: `Article: ${post?.title}`,
    description: post?.description,
    keywords: post?.tags,
    alternates: {
      canonical: `https://www.webcreatis.fr/blog/${slug}`,
    },
    openGraph: {
      title: `Article: ${slug}`,
      description: `Découvrez l'article ${slug} sur notre blog.`,
      url: `https://webcreatis.fr/blog/${slug}`,
      type: "article",
      images: [
        {
          url: "https://www.webcreatis.fr/images/logo.png",
          width: 1200,
          height: 630,
          alt: "Webcreatis - le blog",
        },
      ],
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
