
import { useState, useRef, useEffect } from "react"
import { NavBarItem, ResumeBtn, ThemeSwitch, Logo } from "./"
import { ActiveMenu } from "./ActiveMenu";

export const NavBar = ({wsp}) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
            <div className={`hamburger ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            {isMenuOpen && <ActiveMenu wsp={wsp}/>}
        </div>
      </nav>
  )
}
