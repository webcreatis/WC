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
  textSize = "text-5xl",
}: TitleSectionProps): JSX.Element {
  return (
    <div className="flex justify-center items-center pt-10 pb-5">
      {icon}
      <h2>
        <span
          className={`${
            color ? color : "text-white"
          } font-raleway italic text-6xl pr-3 xs:text-3xl mobile:text-3xl tablet:${textSize}`}
        >
          Our
        </span>
        <span
          className={`${
            color ? color : "text-white"
          } font-jaapokki font-bold uppercase xs:text-3xl mobile:text-3xl tablet:${textSize}`}
        >
          {title}
        </span>
      </h2>
    </div>
  );
}
