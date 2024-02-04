import { createContext, useEffect, useState } from "react";
import { Data } from "../Data/Data";
import axios from "axios";
import useLocalStorage from "../hooks/useLocalStorage";

export const LanguageContext = createContext();

export default function LanguageContextProvider({ children }) {
  const initialLang = "en";
  const [currentLang, setCurrentLang] = useLocalStorage("lang", initialLang);
  //const [currentData, setCurrentData] = useState({ ...Data[currentLang] });
  let currentData = Data[currentLang];

  function languageSwitcher() {
    setCurrentLang(currentLang == "en" ? "tr" : "en");
  }

  useEffect(() => {
    axios
      .post(`https://reqres.in/api/users?${currentLang}`, Data[currentLang])
      .then((res) => {
        console.log(res.data);
        currentData = res.data;

        console.log(currentLang);
      });
  }, [currentLang]);

  return (
    <LanguageContext.Provider
      value={{ currentData, languageSwitcher, currentLang }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
