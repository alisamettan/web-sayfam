import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function About() {
  const { currentData, currentLang } = useContext(LanguageContext);

  return (
    <div className="pt-10  bg-slate-100 pb-20 flex flex-row justify-between  dark:bg-[_#2A262B] lg:pr-0 lg:gap-60 md:gap-28 md:mx-auto sm:gap-44 sm:px-12">
      <div className="lg:pl-72 flex flex-col gap-y-5 flex-1 md:mx-auto md:my-0 md:pl-52 sm:pl-52  ">
        <h1 className="text-xl ">
          {currentLang == "en" ? "Hi!" : "Merhaba!"} 👋
        </h1>
        <p className="text-xl font-semibold">{currentData.about.main}</p>
        <div className="flex gap-6 pt-4">
          <a href="https://www.linkedin.com/in/alisamettan/">
            <FontAwesomeIcon className="text-2xl" icon={faLinkedinIn} />
          </a>
          <a href="https://github.com/alisamettan">
            <FontAwesomeIcon className="text-2xl" icon={faGithub} />
          </a>
        </div>
        <p>
          {currentData.about.join} <br></br> →{"   "}
          <a className="text-red-500">alisamet_tan@hotmail.com</a>
        </p>
      </div>
      <div className="flex-1 lg:block sm:hidden">
        <img
          className="h-80 md:hidden lg:block rounded-2xl shadow-[-26px_-12px_3px_0px_rgba(230,10,10,0.75)]"
          src={"src/assets/pics/IMG_1304.jpg"}
          alt=""
        />
      </div>
      <div>
        <img
          className="top-72 relative md:hidden lg:block sm:hidden"
          src="src/assets/svg/Rectangle_18.svg"
          alt=""
        />
        <img
          src="src/assets/svg/Ellipse_11.svg"
          alt=""
          className="top-[300px] right-[450px] relative md:hidden lg:block"
        />
      </div>
    </div>
  );
}
