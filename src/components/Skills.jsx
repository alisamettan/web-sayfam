import { Data } from "../Data/Data";

export default function Skills() {
  return (
    <div className="flex flex-col justify-center items-center gap-12 pt-16 pb-28">
      <h1 className="text-4xl">Skills</h1>
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
