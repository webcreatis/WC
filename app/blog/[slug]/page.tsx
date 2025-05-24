import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const slug = (await params).slug;

  return {
    title: `Article: ${slug}`,
    description: `Découvrez l'article ${slug} sur notre blog.`,
    openGraph: {
      title: slug,
      description: `Découvrez l'article ${slug} sur notre blog.`,
      url: `https://webcreatis.re/blog/${slug}`,
      type: "article",
    },
  };
};

export default async function PostDetails({ params }: Props) {
  const slug = (await params).slug;

  try {
    const { default: Post } = await import(`@/content/${slug}.mdx`);
    return <Post />;
  } catch (error) {
    // Si l'article est introuvable
    console.log(error);
    return <div>Article introuvable.</div>;
  }
}
