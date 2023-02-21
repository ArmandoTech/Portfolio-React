import { Container } from "./Container"
import servicoches from "../assets/project/servicoches3-logo.jpg"
import { biofile, enciso } from "../assets/experience"

export const Experience = () => {
  return (
    <>
        <Container technologies="React, Docker, Electron, Django, Sonarqube"
        linkInternet="https://www.encisosystems.com/"
        image={enciso}>
            ENCISO SYSTEMS
        </Container>

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
