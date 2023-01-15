import { NavBar } from "./components/NavBar";
import { Profile } from "./components/Profile";

function App() {
  const wsp = '+573023596825'

  return (
    <div>
      <header id="hero">
        <NavBar wsp={wsp}/>

        <section className="header-container">
          <Profile/>
        </section>
      </header>

    <section id="projects" className="project-container container">

    </section>
    </div>
  );
}

export default App;
