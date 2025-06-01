import CustomCursor from "../ui/CustomCursor";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="mdx">
      <article
        className="max-w-[1300px] w-full mx-auto pt-36 md:pt-44 px-4 sm:px-6 md:px-12 pb-40
  prose prose-a:text-lg prose-a:text-[tomato] prose-a:underline prose-a:underline-offset-8 prose-a:animate-fadeIn prose-h1:text-3xl prose-h1:text-white prose-h1:pt-10 prose-h1:font-jaapokki prose-h2:text-2xl prose-h2:text-white prose-h2:font-jaapokki prose-strong:text-[tomato]
  prose-p:text-white prose-p:font-raleway prose-p:text-base
  prose-li:text-white prose-li:text-base prose-li:font-raleway
  prose-img:rounded-lg prose-img:mx-auto prose-h3:text-2xl prose-h3:text-white prose-h3:font-jaapokki"
      >
        {children}
        <CustomCursor />
      </article>
    </main>
  );
}
