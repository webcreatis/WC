type TitleSectionProps = {
  icon: React.ReactNode;
  title: string;
  color?: string;
  textSize?: string;
};

export default function TitleSection({
  icon,
  title,
  color,
  textSize,
}: TitleSectionProps): JSX.Element {
  return (
    <div className="flex justify-center items-center pt-10 pb-2">
      {icon}
      <h2>
        <span
          className={`${
            color ? color : "text-white"
          } font-raleway italic pr-2 pl-2 text-lg md:${textSize} lg:text-6xl`}
        >
          Our
        </span>
        <span
          className={`${
            color ? color : "text-white"
          } font-jaapokki font-bold uppercase text-lg md:${textSize} lg:text-6xl`}
        >
          {title}
        </span>
      </h2>
    </div>
  );
}
