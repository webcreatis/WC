import { posts } from "../datas/blog/posts";

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
