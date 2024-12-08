import Button from "./Button";

type FormationCardProps = {
  title: string;
  subTitle: string;
  text: string;
  liste: string[];
};

export default function FormationCard({
  title,
  subTitle,
  text,
  liste,
}: FormationCardProps) {
  return (
    <>
      <li className="overflow-hidden">
        <div className="flip-card bg-transparent w-[450px] h-[600px] font-raleway perspective-midrange xs:w-full tablet:w-3/4 tablet:m-auto laptop:w-[300px] ipadPro:w-[450px]">
          <div className="flip-card-inner relative w-full h-full text-center">
            <div className="flip-card-front">
              <p className="title uppercase font-jaapokki">{title}</p>
              <p>{subTitle}</p>
            </div>
            <div className="flip-card-back pt-10">
              <p className="title text-left p-5 font-raleway xs:text-xs laptop:text-xs">
                {text}
              </p>
              <p className="font-semibold font-raleway xs:text-xs laptop:text-sm">
                Ce Pack comprend :
              </p>
              <ul className="p-5 flex flex-col gap-2 font-semibold">
                {liste.map((el, index) => {
                  return (
                    <li
                      key={index}
                      className="text-sm text-left xs:text-xs laptop:text-sm"
                    >
                      {el}
                    </li>
                  );
                })}
              </ul>
              <div className="w-full flex justify-center">
                <Button
                  text="Un devis ?"
                  bg="bg-green"
                  color="text-black"
                  onClick={() =>
                    (window.location.href = "https://webcreatis.fr/contact/")
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}
