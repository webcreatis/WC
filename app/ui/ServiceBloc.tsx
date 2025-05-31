type ServiceBlocProps = {
  title: string;
  skills: string[];
  imagePath: string;
};

export default function ServiceBloc({
  title,
  skills,
  imagePath,
}: ServiceBlocProps) {
  return (
    <>
      <li
        className="flex w-full border-b-[1px] border-black mt-5 box xs:flex-col tablet:flex-row"
        data-image={imagePath}
      >
        <h3 className="inline-block text-6xl font-jaapokki uppercase text-black xs:text-xl xs:pb-3 tablet:text-2xl laptop:text-5xl">
          {title}
        </h3>
        <div className="flex justify-start gap-1 ml-10 xs:ml-1 xs:flex-col xs:items-start tablet:flex-row tablet:items-end tablet:ml-10">
          {skills.map((skill, index) => {
            return (
              <span
                key={index}
                className="font-jaapokki uppercase text-xl text-black after:content-['|'] after:ml-0.5 after:text-green xs:text-base tablet:text-[10px] laptop:text-sm"
              >
                {skill}
              </span>
            );
          })}
        </div>
      </li>
    </>
  );
}
