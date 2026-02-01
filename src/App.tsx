import { Layout } from "./components/Layout";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Achievements } from "./components/Achievements";
import { CodingProfile } from "./components/CodingProfile";
import { Contact } from "./components/Contact";

function App() {
  return (
    <Layout>
      <div className="space-y-20 pb-20">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <CodingProfile />
        <Contact />
      </div>
    </Layout>
  );
}

export default App;
