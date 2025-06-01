type CardFooterProps = {
  icon: JSX.Element;
  texte: string;
  link: string;
};

export default function CardFooter({
  icon,
  texte,
  link,
}: CardFooterProps): JSX.Element {
  return (
    <div>
      <a
        data-link="link"
        href={link}
        className="buttonAction border-[1px] border-[#3f3f46] text-5xl text-white rounded-lg py-4 flex flex-col items-center gap-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-corail"
      >
        {icon}
        <span className="font-raleway">{texte}</span>
      </a>
    </div>
  );
}
