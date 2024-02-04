import { useContext, useEffect } from "react";
import { Data } from "../Data/Data";
import { DarkModeContext } from "../context/DarkModeContext";
import { LanguageContext } from "../context/LanguageContext";
import axios from "axios";

export default function Projects() {
  const { currentData, setData, currentLang } = useContext(LanguageContext);
  const { darkMode } = useContext(DarkModeContext);

  /* useEffect(() => {
    axios.get(`https://reqres.in/api/users?${currentLang}`).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, [currentLang, setData]); */

  return (
    <div className="bg-white dark:bg-[_#484148]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-medium text-center pt-20 pb-16">
          {currentLang == "en" ? "Projects" : "Projeler"}
        </h1>
        <div className="flex lg:flex-row gap-14 mx-8 text-black md:flex-col md:justify-center sm:flex-col">
          {currentData.projects.map((project, index) => {
            return (
              <div
                key={index}
                className={
                  darkMode
                    ? "flex flex-col relative justify-between items-center gap-5 rounded-xl pt-10 px-10 dark:bg-[_#495351]"
                    : "flex flex-col relative justify-between items-center gap-5 rounded-xl pt-10 px-10"
                }
                style={{
                  backgroundColor: project.color,
                }}
              >
                <h2 className="text-xl text-center font-playfair font-bold">
                  {project.title}
                </h2>
                <p>{project.explanation}</p>
                <div className="flex flex-wrap pb-6 flex gap-2">
                  {project.techs.map((tech, index) => {
                    return (
                      <h4
                        key={index}
                        className="font-bold text-sm  rounded-[76px] bg-white pt-[6px] px-5 pb-[10px]"
                      >
                        {tech}
                      </h4>
                    );
                  })}
                </div>

                <div className="flex gap-40 pb-6 font-extrabold text-[_14px] md:gap-16">
                  <a href={project.githubUrl}>{project.github}</a>
                  <a href={project.vercelUrl}>{project.vercel} →</a>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    className="w-72 h-64 absolute lg:top-[_345px] sm:hidden md:hidden lg:block"
                    src="src/assets/pics/pc-img.png"
                    alt=""
                  />
                  <img
                    src={project.img}
                    className="rounded-md lg:w-52 h-36 sm:w-72"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
