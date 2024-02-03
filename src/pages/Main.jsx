import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Main() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </>
  );
}
