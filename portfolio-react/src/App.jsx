
import { 
  NavBar, Profile, Divisor, Projects, Experience, InformationButton, Footer 
} from "./components"

const wsp = '+15512549943'
const github = "https://github.com/ArmandoTech"

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
    <article className="project">
    <Experience/>
    </article>
    <Divisor text="Check out some of the projects where I have worked.">Projects</Divisor>
    <article className="project">
    <Projects/>
      </article>
    <InformationButton link={github}>See more <i className="fas fa-arrow-right"></i></InformationButton>
    </section>
    <Footer/>
    </div>
  );
}

export default App;
