"use client";

import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { posts } from "../datas/blog/posts";
import CustomCursor from "../ui/CustomCursor";
import TextAnimated from "../ui/TextAnimated";

const POSTS_PER_PAGE = 6;

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <section className="pt-60 blog">
      <TextAnimated title="Le blog" />
      <h1 className="flex w-full justify-center font-jaapokki text-4xl pt-28 pb-28 text-white text-center px-4">
        Les dernières actualités de Webcreatis
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-20 gap-6 px-6 md:px-20">
        {currentPosts.map((post, idx) => (
          <Link
            key={idx}
            href={`/blog/${post.slug}`}
            className="buttonAction focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-corail"
          >
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-full flex justify-center items-center">
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    width={600}
                    height={300}
                    className="rounded-lg mb-4 hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-sm bg-gray-700 font-semibold my-4 w-fit px-2 py-1 rounded-sm text-white">
                  {post.category}
                </p>
                <CardTitle className="text-2xl leading-7 font-bold font-raleway py-3 truncate">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardFooter className="w-full flex text-gray-500 text-base justify-between">
                <p className="uppercase text-green font-bold font-jaapokki">
                  {post.author}
                </p>
                <p>{post.date}</p>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      {posts.length > 6 && (
        <div className="flex justify-center items-center gap-2 pb-20">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="px-4 py-2 text-white bg-gray-700 rounded hover:bg-gray-600 transition disabled:opacity-50"
            disabled={currentPage === 1}
          >
            Précédent
          </button>
          {Array.from({ length: totalPages }, (_, idx) => (
            <button
              key={idx}
              onClick={() => handlePageChange(idx + 1)}
              className={`px-3 py-2 rounded ${
                currentPage === idx + 1
                  ? "bg-green text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              } transition`}
            >
              {idx + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="px-4 py-2 text-white bg-gray-700 rounded hover:bg-gray-600 transition disabled:opacity-50"
            disabled={currentPage === totalPages}
          >
            Suivant
          </button>
        </div>
      )}

      <CustomCursor />
    </section>
  );
}
