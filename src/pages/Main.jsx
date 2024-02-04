import { useContext } from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { DarkModeContext } from "../context/DarkModeContext";

export default function Main() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "dark bg-slate-900 text-white" : ""}>
      <Header />
      <About />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
}
