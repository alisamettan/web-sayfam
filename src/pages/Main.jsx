import About from "../components/About";
import Header from "../components/Header";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Main() {
  return (
    <div className="pb-28">
      {/* pb proje sonu buradan kaldırılacak */}
      <Header />
      <About />
      <Skills />
      <Profile />
      <Projects />
    </div>
  );
}
