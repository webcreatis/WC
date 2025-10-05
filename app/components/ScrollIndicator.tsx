// const ScrollIndicator = ({
//   targetSelector = "article *:nth-child(2)",
//   offset = 0,
// }) => {
//   const handleScroll = () => {
//     const target = document.querySelector(targetSelector);
//     if (target) {
//       const top = target.getBoundingClientRect().top + window.scrollY - offset;
//       window.scrollTo({
//         top,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <div
//       className="scroll-indicator block cursor-pointer absolute bottom-10 right-28"
//       onClick={handleScroll}
//     >
//       <div className="scroll-icon relative h-20 w-10 mx-auto overflow-hidden">
//         <span className="text-white font-jaapokki">scroll</span>
//         <span className="absolute left-1/2 -translate-x-1/2 bg-white rounded-full w-2 h-2 animate-scroll-dot" />
//       </div>
//     </div>
//   );
// };

// export default ScrollIndicator;

const ScrollIndicator = () => {
  return (
    <div
      className="
        scroll-indicator 
        pointer-events-none 
        absolute bottom-10 right-14
        2xl:flex 2xl:flex-col 2xl:items-center
        text-center
        animate-fadeIn
        hidden

      "
      aria-hidden="true"
    >
      {/* Texte indicatif */}
      <span className="text-white font-jaapokki text-sm tracking-widest uppercase mb-3">
        Scroll
      </span>

      {/* Souris stylisée */}
      <div
        className="
          relative 
          h-14 w-8 
          rounded-full 
          border-2 border-white 
          flex items-start justify-center
          pt-3
        "
      >
        {/* Point animé à l’intérieur de la souris */}
        <span className="bg-white rounded-full w-2 h-2 animate-scroll-dot absolute top-3 left-1/2 -translate-x-1/2" />
      </div>
    </div>
  );
};

export default ScrollIndicator;
