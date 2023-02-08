
import { 
  NavBar, Profile, Divisor, Projects, Experience, InformationButton, Footer 
} from "./components"

const wsp = '+573023596825'

function App() {

  return (
    <div>
      <header id="hero">
        <NavBar wsp={wsp}/>

        <section className="header-container">
          <Profile wsp={wsp}/>
        </section>
      </header>

    <section id="projects" className="project-container container">
    <Divisor text="Check out some of my professional experience">Experience</Divisor>
    <article class="project">
    <Experience/>
    </article>
    <Divisor text="Check out some of the projects where I have worked.">Projects</Divisor>
    <article class="project">
    <Projects/>
      </article>
    <InformationButton link="https://github.com/ArmandoTech">See more <i class="fas fa-arrow-right"></i></InformationButton>
    </section>
    <Footer/>
    </div>
  );
}

export default App;
