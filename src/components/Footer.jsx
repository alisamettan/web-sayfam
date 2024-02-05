import { useContext, useEffect } from "react";
import { Data } from "../Data/Data";
import { LanguageContext } from "../context/LanguageContext";
import axios from "axios";

export default function Footer() {
  const { currentData, setData, currentLang } = useContext(LanguageContext);
  /*  useEffect(() => {
    axios.get(`https://reqres.in/api/users?${currentLang}`).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, [currentLang, setData]); */
  return (
    <div className="py-32 flex flex-col items-center text-center justify-center gap-20 dark:bg-[_#484148]  md:items-center  sm:flex-row">
      <p className="text-3xl">{currentData.footer.text}</p>
      <div>
        {currentData.footer.social.map((item, index) => {
          return (
            <div key={index} className="flex flex-col text-lg">
              <a>{item}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
