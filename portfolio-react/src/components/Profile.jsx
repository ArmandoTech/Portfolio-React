import profileImage from '../assets/profileImage3.jpeg'
import { InformationButton, SkillsTable } from './'
// import { SkillsTable } from './SkillsTable'

export const Profile = ({wsp}) => {
  return (
    <>
    <img className="profile-image" src={profileImage} alt="Armando" />
    <h1>Hi I'm Armando</h1>

    <div className="content-text">
      <h2>Self-Taught developer,</h2>
      <h2>Chemical Engineering drop out.</h2>
      <h4>#React #Node #SQL #MongoDB</h4>

      <p>
        I'm a college dropout from Industrial University of Santander. I
        completed 3 years of my bachelors with a special distinction
        for my 4.54/5.0 GPA. When I realized that I loved coding I decided
        to dropout college and dedicate myself to study fulltime web
        development, as a Javascript Full-Stack developer. 
      </p>

      <br />

      <SkillsTable/>
    </div>
    <InformationButton link={`https://wa.me/${wsp}`}>
        CONNECT WITH ME
    </InformationButton>
    </>
  )
}
