import { NavBar } from "./components/NavBar";
import { Profile } from "./components/Profile";
import { Divisor } from "./components/Divisor";
import { Projects } from "./components/Projects";

function App() {
  const wsp = '+573023596825'

  return (
    <div>
      <header id="hero">
        <NavBar wsp={wsp}/>

        <section className="header-container">
          <Profile wsp={wsp}/>
        </section>
      </header>

    <section id="projects" className="project-container container">
    <Divisor text="Check out some of the projects where I have worked.">Projects</Divisor>
    <article class="project">
    <Projects/>

      </article>
    </section>
    </div>
  );
}

export default App;
