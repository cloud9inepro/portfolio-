import ScrambledText from "./components/ScrambledText";
import ProfileCard from "./components/ProfileCard";
import "./App.css";
import Hero from "./pages/Hero";
import Header from "./pages/Header";
import About from "./pages/About";
import Skill from "./pages/Skill";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skill />
    </>
  );
}

export default App;
