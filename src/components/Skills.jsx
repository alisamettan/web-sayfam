import { useContext } from "react";
import { Data } from "../Data/Data";
import { LanguageContext } from "../context/LanguageContext";

export default function Skills() {
  const { currentLang } = useContext(LanguageContext);
  return (
    <div className="flex flex-col justify-center items-center gap-12 pt-16 pb-28 dark:bg-[_#484148] sm:px-36">
      <h1 className="text-4xl">
        {currentLang == "en" ? "Skills" : "Yetenekler"}
      </h1>
      <div className="flex gap-8">
        {Data.en.skills.map((skill, index) => {
          return (
            <div key={index} className="text-center">
              <img src={skill.img} alt="" />
              <p>{skill.skill}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
