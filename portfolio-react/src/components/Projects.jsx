import onlineStore from "../assets/project/online-store.png"
import portfolio from "../assets/project/portfolio.jpeg"
import deliveryApp from "../assets/project/DeliveryApp.jpeg"
import americanGrill from "../assets/project/americangrill-logo.jpeg"
import chatApp from "../assets/project/chatApp.png"
import crudMySQL from "../assets/project/crud-node-mysql.png"
import { Container } from "./Container"

export const Projects = () => {
  return (
    <>
    <Container technologies="Javascript, Express, Socket.io, MySQL"
      linkGithub="https://github.com/ArmandoTech/Chat-App" 
      image={chatApp}>
        ChatApp
      </Container>

      <Container technologies="Node-Express, MongoDB, Mongoose, API REST"
      linkGithub="https://github.com/ArmandoTech/delivery-api"
      image={deliveryApp}>
        Delivery App
      </Container>

      <Container technologies="Javascript, Node.js, Express.js, API REST"
      linkGithub="https://github.com/ArmandoTech/Online-Store"
      image={onlineStore}>
        Online store API
      </Container>

      <Container technologies="Javascript, MySQL, Bootstrap, ejs" 
      linkGithub="https://github.com/ArmandoTech/Crud-Mysql"
      image={crudMySQL}>
        Crud Node-MySQL
      </Container>

      <Container technologies="Javascript, React"
      linkGithub="https://github.com/ArmandoTech/Portfolio-React"
      image={portfolio}>
        Portfolio
      </Container>

      <Container technologies="Javascript, CSS, HTML, Django"
      linkGithub="https://github.com/ArmandoTech/Restaurant-Webpage"
      image={americanGrill}>
        AmericanGrill
      </Container>
    </>
  )
}
