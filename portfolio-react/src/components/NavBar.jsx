import { NavBarItem } from "./NavBarItem"
import { ResumeBtn } from "./ResumeBtn"
import { ThemeSwitch } from "./ThemeSwitch"
import { Logo } from "./Logo"

export const NavBar = ({wsp}) => {
  return (
    <nav className="navbar">
         <div className="container">
            <Logo/>
            <ul className="nav-menu">
                <NavBarItem linkItem={'#projects'}>PROJECTS</NavBarItem>
                <NavBarItem linkItem={`https://wa.me/${wsp}`}>CONTACT</NavBarItem>
                <ResumeBtn/>
                <ThemeSwitch/>
          </ul>
        </div>
      </nav>
  )
}
