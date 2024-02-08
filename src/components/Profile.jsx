import { useContext, useEffect } from "react";
import { Data } from "../Data/Data";
import { LanguageContext } from "../context/LanguageContext";
import axios from "axios";

export default function Profile() {
  const { currentData, setData, currentLang } = useContext(LanguageContext);
  /* useEffect(() => {
    axios.get(`https://reqres.in/api/users?${currentLang}`).then((res) => {
      setData(res.data);
    });
  }, [currentLang, setData]); */
  return (
    <div className=" bg-slate-100 py-16 flex justify-center flex-col items-center dark:bg-[_#2A262B]">
      <h1 className="text-4xl">{currentLang == "en" ? "Profile" : "Profil"}</h1>
      <div className="flex flex-col justify-between mt-8 gap-16 mx-56  sm:flex-row md:w-4/5">
        <div className="py-6 px-4 bg-white mb-5 flex gap-8 flex-col flex-1 dark:bg-[_#525252] rounded-xl shadow-[10px_10px_5px_0px_rgba(69,65,65,0.75)]">
          <h1 className="text-2xl text-red-500">{currentData.profile.title}</h1>

          {currentData.profile.section.map((section, index) => {
            return (
              <div key={index} className="flex flex-row md:flex-wrap">
                <div className="flex flex-1">
                  <h1 className="font-black">{section.title}</h1>
                </div>
                <div className="flex flex-1">
                  <p className="font-thin">{section.info}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-1 flex-col gap-8 pt-6 md:w-4/5">
          <h1 className="text-2xl">{currentData.profile.abouttitle}</h1>
          <p>{currentData.profile.about}</p>
        </div>
      </div>
    </div>
  );
}
