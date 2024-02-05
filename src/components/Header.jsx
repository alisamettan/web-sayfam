import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import { LanguageContext } from "../context/LanguageContext";

export default function Header() {
  const { toggleDarkMode, darkMode } = useContext(DarkModeContext);
  const { languageSwitcher, currentLang } = useContext(LanguageContext);
  return (
    <div className=" py-8 flex justify-end pr-10 bg-slate-100 dark:bg-[_#2A262B] ">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          //data-testid="darkMode-toggle"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
        <div className="w-11 h-6 bg-red-500 rounded-full peer peer-focus:ring-4 peer-focus:ring-slate-300 dark:peer-focus:ring-slate-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-yellow after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-yellow-500 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-black peer-checked:bg-black"></div>
        <span className="ms-1.5  font-medium text-gray-500 dark:text-gray-300 border-r-2 border-gray-400 pr-5">
          {darkMode && currentLang === "en"
            ? "Light Mode"
            : darkMode && currentLang === "tr"
            ? "Gündüz Modu"
            : !darkMode && currentLang === "en"
            ? "Dark Mode"
            : "Gece Modu"}
        </span>
      </label>
      {currentLang == "en" ? (
        <span className="ml-5 font-medium text-gray-500">
          <a
            onClick={languageSwitcher}
            className="text-red-500 cursor-pointer hover:text-red-700"
          >
            TÜRKÇE'YE
          </a>{" "}
          GEÇ
        </span>
      ) : (
        <span className="ml-5 font-medium text-gray-500">
          <a>SWITCH TO</a>{" "}
          <a
            onClick={languageSwitcher}
            className="text-red-500 cursor-pointer hover:text-red-700"
          >
            ENGLISH
          </a>
        </span>
      )}
    </div>
  );
}
