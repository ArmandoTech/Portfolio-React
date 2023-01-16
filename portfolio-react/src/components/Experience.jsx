import { Container } from "./Container"
import servicoches from "../assets/project/servicoches2-logo.jpg"
import biofile from "../assets/experience/LogoBiofile.png"

export const Experience = () => {
  return (
    <>
        <Container technologies="SQL Server, Crystal Reports, jQuery, ASP .Net"
        linkInternet="https://biofile.com.co/"
        image={biofile}>
            BIOFILE S.A.S
        </Container>

        <Container technologies="Javascript, HTML, CSS"
        linkGithub="https://github.com/ArmandoTech/Serviwebsite"
        linkInternet="https://servicoches.com.co" 
        image={servicoches}>
            SERVICOCHES
        </Container>
    </>
  )
}
