type AboutCardProps = {
  title: string;
  text: string;
};

export default function AboutCard({ title, text }: AboutCardProps) {
  return (
    <div className="border-[1px] border-solid border-white xs:w-full l:w-[50%] l:h-[350px]">
      <h2 className="text-center text-3xl text-green font-jaapokki pt-10 pb-5 uppercase xs:text-xl s:text-lg tablet:text-2xl l:text-3xl">
        {title}
      </h2>
      <p className="text-[20px] text-white font-raleway text-left font-light p-16 xs:p-4 xs:text-base l:text-lg">
        {text}
      </p>
    </div>
  );
}
