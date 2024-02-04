import { createContext, useEffect, useState } from "react";
import { Data } from "../Data/Data";
import axios from "axios";

export const LanguageContext = createContext();

export default function LanguageContextProvider({ children }) {
  const initialLang = "en";
  const [currentLang, setCurrentLang] = useState(initialLang);
  const [currentData, setCurrentData] = useState(Data[currentLang]);

  useEffect(() => {
    axios
      .post(`https://reqres.in/api/users?${currentLang}`, currentData)
      .then((res) => {
        console.log(currentData);
        setCurrentData(res.data);

        console.log(currentLang);
      });
  }, [currentLang]);

  function languageSwitcher() {
    setCurrentLang(currentLang == "en" ? "tr" : "en");
  }

  return (
    <LanguageContext.Provider
      value={{ currentData, languageSwitcher, currentLang }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
