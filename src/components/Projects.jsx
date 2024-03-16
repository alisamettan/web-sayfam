import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function Projects() {
  const { currentData, currentLang } = useContext(LanguageContext);

  return (
    <div className="bg-white dark:bg-[_#484148]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-medium text-center pt-20 pb-16">
          {currentData.projects.baslik}
        </h1>
        <div className="flex flex-col gap-14 mx-8 text-black sm:flex-row">
          {currentData.projects.projects.map((project, index) => {
            return (
              <div
                key={index}
                className={`sm:w-[25%] flex flex-col relative justify-between items-center gap-5 rounded-xl py-10 px-10 dark:bg-[_${project.darkcolor}]`}
                style={{
                  backgroundColor: project.color,
                }}
              >
                <h2 className="text-xl text-center font-playfair font-bold">
                  {project.title}
                </h2>
                <p>{project.explanation}</p>
                <div className="flex flex-wrap pb-6 gap-2">
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
                    src={project.img}
                    className="rounded-md lg:w-52 h-36 sm:w-96"
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
