import CustomCursor from "../ui/CustomCursor";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="mdx">
      <article
        className="max-w-[1300px] w-full mx-auto pt-36 md:pt-44 px-4 sm:px-6 md:px-12 pb-40
  prose prose-a:text-black prose-a:no-underline prose-h2:text-xl prose-h2:text-white
  prose-p:text-white prose-p:font-raleway prose-p:text-base
  prose-li:text-white prose-li:text-base prose-li:font-raleway
  prose-img:rounded-lg prose-img:mx-auto"
      >
        {children}
        <CustomCursor />
      </article>
    </main>
  );
}
