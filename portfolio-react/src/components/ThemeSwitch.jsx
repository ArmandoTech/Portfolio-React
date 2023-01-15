import moon from '../assets/moon.svg'
import sun from '../assets/sun.svg'


export const ThemeSwitch = () => {
  return (
    <div className="theme-switch">
        <input type="checkbox" id="switch" />
        <label className="toggle-icons" htmlFor="switch">
            <img className="moon" src={moon} alt="moon"/>
            <img className="sun" src={sun} alt="sun"/>
        </label>
    </div>
  )
}
