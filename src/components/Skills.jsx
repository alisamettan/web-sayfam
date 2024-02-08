import { useContext } from "react";
import { Data } from "../Data/Data";
import { LanguageContext } from "../context/LanguageContext";

export default function Skills() {
  const { currentLang } = useContext(LanguageContext);
  return (
    <div className="flex flex-col pt-12 justify-center items-center gap-12 md:py-16 lg:pb-0  dark:bg-[_#484148] sm:px-36">
      <h1 className="text-4xl">
        {currentLang == "en" ? "Skills" : "Yetenekler"}
      </h1>
      <div className="flex flex-wrap gap-8 px-8 justify-center">
        {Data.en.skills.map((skill, index) => {
          return (
            <div key={index} className="text-center">
              <img src={skill.img} alt="" />
              <p>{skill.skill}</p>
            </div>
          );
        })}
      </div>
      <img
        src="public/svg/Rectangle_22.svg"
        alt=""
        className="relative top-[70px] right-[700px] hidden sm:block "
      />
      <img
        src="public/svg/Ellipse_12.svg"
        alt=""
        className="relative top-[60px] left-[700px] hidden sm:block"
      />
    </div>
  );
}
