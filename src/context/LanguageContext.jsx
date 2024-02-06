import { createContext, useEffect, useState } from "react";
import { Data } from "../Data/Data";
import axios from "axios";
import useLocalStorage from "../hooks/useLocalStorage";

export const LanguageContext = createContext();

export default function LanguageContextProvider({ children }) {
  const initialLang = "en";
  const [currentLang, setCurrentLang] = useLocalStorage("lang", initialLang);
  const [currentData, setCurrentData] = useState({});
  //let currentData = Data[currentLang];

  function languageSwitcher() {
    setCurrentLang(currentLang == "en" ? "tr" : "en");
  }

  useEffect(() => {
    axios
      .post(`https://reqres.in/api/users?${currentLang}`, Data[currentLang])
      .then((res) => {
        //currentData = res.data;
        console.log(res.data);
        setCurrentData({ ...res.data });
        console.log(currentLang);
      })
      .catch((error) => {
        console.error("Error during POST request:", error);
      });
  }, [currentLang]);

  return (
    <LanguageContext.Provider
      value={{ currentData, languageSwitcher, currentLang, setCurrentData }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
