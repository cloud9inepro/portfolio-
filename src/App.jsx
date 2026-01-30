import "./App.css";
import Hero from "./pages/Hero";
import Header from "./pages/Header";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
      <footer>
        <p>© 2023 Ojieh Gift. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;