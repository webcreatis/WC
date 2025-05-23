import { posts } from "@/app/datas/blog/posts";

type Props = {
  children: React.ReactNode;
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Article introuvable",
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://webcreatis.fr/blog/${post.slug}`,
      images: [
        {
          url: post.thumbnail,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
    },
  };
}

export default async function PostLayout({ children }: Props) {
  return <section>{children}</section>;
}
