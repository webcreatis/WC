import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { posts } from "../datas/blog/posts";
import CustomCursor from "../ui/CustomCursor";
import TextAnimated from "../ui/TextAnimated";

export default function page() {
  return (
    <section className="pt-60 blog">
      <TextAnimated title="Le blog" />
      <h1 className="flex w-full justify-center font-jaapokki text-4xl pt-28 pb-28 text-white">
        Toutes l'actualité de Webcreatis
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 pb-40 gap-5 p-20">
        {posts.map((post, idx) => (
          <Link
            key={idx}
            href={`/blog/${post.slug}`}
            data-link="link"
            className="buttonAction"
          >
            <Card>
              <CardHeader>
                <div className="w-full flex justify-center items-center">
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    width={600}
                    height={300}
                    className="rounded-lg mb-4 hover:scale-105 duration-300 transition-all"
                  />
                </div>
                <p className="text-sm bg-gray-700 font-semibold my-4 w-fit px-2 py-1 rounded-sm text-white">
                  {post.category}
                </p>
                <CardTitle className="text-2xl leading-7 font-bold font-raleway py-3 line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardFooter className="w-full flex text-gray-500 text-base space-x-10 justify-between">
                <p className="uppercase text-green font-bold font-jaapokki">
                  {post.author}
                </p>
                <p>{post.date}</p>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
      <CustomCursor />
    </section>
  );
}
