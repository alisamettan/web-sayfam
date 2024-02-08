import { createContext, useEffect, useState } from "react";
import { Data } from "../Data/Data";
import axios from "axios";
import useLocalStorage from "../hooks/useLocalStorage";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export const LanguageContext = createContext();

export default function LanguageContextProvider({ children }) {
  const initialLang = "en";
  const [currentLang, setCurrentLang] = useLocalStorage("lang", initialLang);
  const [currentData, setCurrentData] = useState({});
  const [loading, setLoading] = useState(true);
  //let currentData = Data[currentLang];

  function languageSwitcher() {
    setCurrentLang(currentLang == "en" ? "tr" : "en");
    currentLang === "en"
      ? toast.success("Dil Başarıyla Değiştirildi🎉🎉🎉", {
          position: "top-center",
          autoClose: 3000,
          pauseOnHover: true,
          theme: "colored",
        })
      : toast.success("Language is switched succesfully🎉🎉🎉", {
          position: "top-center",
          autoClose: 3000,
          pauseOnHover: true,
          theme: "colored",
        });
  }

  useEffect(() => {
    setLoading(true);
    axios
      .post(`https://reqres.in/api/users?${currentLang}`, Data[currentLang])
      .then((res) => {
        //currentData = res.data;
        console.log(res.data);
        setCurrentData({ currentData, ...res.data });
        console.log(currentLang);
        setLoading(false);
        currentLang == "en"
          ? toast.success("Welcome to My Page 👋")
          : toast.success("Sayfama Hoşgeldin 👋");
      })
      .catch((error) => {
        console.error("Error during POST request:", error);
      });
  }, [currentLang]);

  return (
    <LanguageContext.Provider
      value={{
        currentData,
        languageSwitcher,
        currentLang,
        setCurrentData,
        loading,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
