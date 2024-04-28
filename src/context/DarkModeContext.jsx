import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const DarkModeContext = createContext();

export default function DarkModeContextProvider({ children }) {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
    //console.log(darkMode);
  }

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
