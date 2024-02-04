import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect } from "react";
import { LanguageContext } from "../context/LanguageContext";
import axios from "axios";

export default function About() {
  const { currentData, setData, currentLang } = useContext(LanguageContext);
  /*  useEffect(() => {
    axios.get(`https://reqres.in/api/users?${currentLang}`).then((res) => {
      setData(res.data);
    });
  }, [currentLang, setData]); */
  return (
    <div className="pt-10  bg-slate-100 pb-5 flex lg:flex-row justify-between  dark:bg-[_#2A262B] lg:pr-0 lg:gap-60 md:gap-28 md:mx-auto sm:gap-44 sm:px-12">
      <div className="lg:pl-40 flex flex-col gap-y-5 flex-1 sm:mx-auto ">
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
          className="h-80 rounded-2xl shadow-[-26px_-12px_3px_0px_rgba(230,10,10,0.75)]"
          src="src/assets/pics/IMG_1304.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
