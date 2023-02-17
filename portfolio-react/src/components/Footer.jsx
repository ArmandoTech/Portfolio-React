import {facebookIcon, twitterIcon, linkedinIcon, githubIcon, mailIcon} from "../assets/"

export const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <a href="mailto:armandoarenass@hotmail.com" target="_blank" rel="noreferrer"
          >Want to connect? Mail me!</a
        >
        <div className="social">
          <a href="mailto:armandoarenass@hotmail.com" target="_blank" rel="noreferrer">
            <img src={mailIcon} alt="Hotmail" style={{display:"inline-block"}}
          /></a>
          <a
            href="https://www.facebook.com/armando.arenassanchez/"
            target="_blank" rel="noreferrer"
            ><img src={facebookIcon} alt="Facebook"
          /></a>
          <a href="https://twitter.com/armandoarenass0" target="_blank" rel="noreferrer"
            ><img src={twitterIcon} alt="Twitter"
          /></a>
          <a href="https://linkedin.com/in/armando-arenas" target="_blank" rel="noreferrer"
            ><img src={linkedinIcon} alt="Linkedin"
          /></a>
          <a href="https://github.com/ArmandoTech" target="_blank" rel="noreferrer"
            ><img src={githubIcon} alt="GitHub"
          /></a>
        </div>
      </div>
    </footer>
  )
}
