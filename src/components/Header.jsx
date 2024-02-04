import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

export default function Header() {
  const { toggleDarkMode, darkMode } = useContext(DarkModeContext);
  return (
    <div className="py-8 flex justify-end pr-10 bg-slate-100 dark:bg-[_#2A262B] ">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          //data-testid="darkMode-toggle"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
        <div className="w-11 h-6 bg-red-500 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-yellow after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-yellow-500 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
        <span className="ms-1.5  font-medium text-gray-500 dark:text-gray-300 border-r-2 border-gray-400 pr-5">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </span>
      </label>
      <span className="pl-5 font-medium text-gray-500">
        <a className="text-red-500">TÜRKÇE'YE</a> GEÇ
      </span>
    </div>
  );
}
