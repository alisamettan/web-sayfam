import { useContext } from "react";
import { Data } from "../Data/Data";
import { LanguageContext } from "../context/LanguageContext";

export default function Skills() {
  const { currentLang } = useContext(LanguageContext);
  return (
    <div className="flex flex-col justify-center items-center gap-12 pt-16  dark:bg-[_#484148] sm:px-36">
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
      <img
        src="public/svg/Rectangle_22.svg"
        alt=""
        className="relative top-[70px] right-[700px] md:hidden lg:block "
      />
      <img
        src="public/svg/Ellipse_12.svg"
        alt=""
        className="relative top-[170px] left-[700px] md:hidden lg:block"
      />
    </div>
  );
}
