import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function Footer() {
  const { currentData } = useContext(LanguageContext);

  return (
    <div className="py-32 flex flex-col items-center text-center justify-center gap-20 dark:bg-[_#484148]  md:items-center  sm:flex-row">
      <p className="text-3xl">{currentData.footer.text}</p>
      <div>
        {currentData.footer.social.map((item, index) => {
          return (
            <div key={index} className="flex flex-col text-lg">
              <a>{item}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
