import { Data } from "../Data/Data";

export default function Projects() {
  return (
    <div className="bg-white ">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-medium text-center pt-20 pb-16">
          Projects
        </h1>
        <div className="flex flex-row gap-14 mx-8 ">
          {Data.en.projects.map((project, index) => {
            return (
              <div
                key={index}
                className="flex flex-col relative justify-between items-center gap-5 rounded-xl pt-10 px-10"
                style={{ backgroundColor: project.color }}
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
                    className="w-72 h-64 absolute top-[_345px] "
                    src="src/assets/pics/pc-img.png"
                    alt=""
                  />
                  <img src={project.img} className="rounded-md w-52 h-36" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
