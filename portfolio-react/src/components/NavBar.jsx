
import { NavBarItem, ResumeBtn, ThemeSwitch, Logo } from "./"

export const NavBar = ({wsp}) => {
  return (
    <nav className="navbar">
         <div className="container">
            <Logo/>
            <ul className="nav-menu">
                <NavBarItem linkItem={'#projects'}>PROJECTS</NavBarItem>
                <NavBarItem linkItem={`https://wa.me/${wsp}`}>CONTACT</NavBarItem>
                <ResumeBtn/>
                {/* <ThemeSwitch/> */}
          </ul>
        </div>
      </nav>
  )
}
