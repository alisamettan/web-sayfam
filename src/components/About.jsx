import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
  return (
    <div className="pt-10 bg-slate-100 pb-5 flex flex-row justify-between gap-60 dark:bg-[_#2A262B]">
      <div className="pl-40 flex flex-col gap-y-5 flex-1">
        <h1 className="text-xl ">Hi! 👋</h1>
        <p className="text-xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          fugiat dolores cupiditate odit animi cum sint quibusdam suscipit
          provident neque amet quasi, cumque culpa porro, dolor fuga ipsa quas
          magni.
        </p>
        <div className="flex gap-6 pt-4">
          <a href="https://www.linkedin.com/in/alisamettan/">
            <FontAwesomeIcon className="text-2xl" icon={faLinkedinIn} />
          </a>
          <a href="https://github.com/alisamettan">
            <FontAwesomeIcon className="text-2xl" icon={faGithub} />
          </a>
        </div>
        <p>
          Currently doing Websites Projects as freelance.<br></br>Invite me to
          join your team →{" "}
          <a className="text-red-500">alisamet_tan@hotmail.com</a>{" "}
        </p>
      </div>
      <div className="flex-1">
        <img
          className="h-80 rounded-2xl shadow-[-26px_-12px_3px_0px_rgba(230,10,10,0.75)]"
          src="src/assets/pics/IMG_1304.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
