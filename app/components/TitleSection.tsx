type TitleSectionProps = {
  icon: React.ReactNode;
  title: string;
  color?: string;
};

export default function TitleSection({
  icon,
  title,
  color,
}: TitleSectionProps): JSX.Element {
  return (
    <div className="flex justify-center items-center pt-10 pb-5">
      {icon}
      <h2>
        <span
          className={`${
            color ? color : "text-white"
          } font-raleway italic text-6xl pr-3 xs:text-3xl mobile:text-3xl tablet:text-5xl`}
        >
          Our
        </span>
        <span
          className={`${
            color ? color : "text-white"
          } text-5xl font-jaapokki font-bold uppercase xs:text-3xl mobile:text-3xl tablet:text-5xl`}
        >
          {title}
        </span>
      </h2>
    </div>
  );
}
