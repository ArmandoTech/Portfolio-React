import { NavBarItem } from "./NavBarItem"
import { ResumeBtn } from "./ResumeBtn"
import { ThemeSwitch } from "./ThemeSwitch"

export const ActiveMenu = ({wsp}) => {
  return (
    <ul className="nav-menu active">
    <NavBarItem linkItem={'#projects'}>PROJECTS</NavBarItem>
    <NavBarItem linkItem={`https://wa.me/${wsp}`}>CONTACT</NavBarItem>
    <ResumeBtn/>
    <ThemeSwitch/>
    </ul>
  )
}
