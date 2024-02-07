import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills /> 
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
