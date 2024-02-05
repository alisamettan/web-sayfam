import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function About() {
  const { currentData, currentLang } = useContext(LanguageContext);

  return (
    <div className=" py-10 align-middle  bg-slate-100 px-10 flex flex-col gap-20 items-center sm:flex-row sm:pb-36  dark:bg-[_#2A262B]  sm:gap-64 sm:align-middle sm:justify-center">
      <div className=" flex flex-col gap-y-5 flex-1 sm:flex-1 sm:pl-72">
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
      <div className="flex flex-1">
        <img
          className="h-80 rounded-2xl shadow-[-26px_-12px_3px_0px_rgba(230,10,10,0.75)]"
          src="/pics/IMG_1304.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="top-72 left-16 relative md:hidden lg:block hidden"
          src="/svg/Rectangle_18.svg"
          alt=""
        />
        <img
          src="/svg/Ellipse_11.svg"
          alt=""
          className="top-[300px] right-[450px] relative hidden lg:block"
        />
      </div>
    </div>
  );
}
