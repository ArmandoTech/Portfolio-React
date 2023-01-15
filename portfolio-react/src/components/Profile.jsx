import profileImage from '../assets/profileImage3.jpeg'
import { InformationButton } from './InformationButton'
import { SkillsTable } from './SkillsTable'

export const Profile = () => {
  return (
    <>
    <img className="profile-image" src={profileImage} alt="Armando" />
    <h1>Hi I'm Armando</h1>

    <div className="content-text">
      <h2>Software developer in the making,</h2>
      <h2>Chemical Engineering drop out.</h2>

      <p>
        I'm a college dropout from Universidad Industrial de Santander. I
        completed 3 years (6 semesters) of chemical engineering, got
        approved every subject of the curriculum until there. I had a GPA of
        4.25/5. My highest semester GPA was 4.54, got a distinction and a
        25% scholarship for that. I realized that I love coding. I decided
        to dropout university and dedicate myself to study fulltime web
        development, focusing on backend with node and express.
      </p>

      <br />

      <SkillsTable/>
    </div>
    <InformationButton>
        CONNECT WITH ME
    </InformationButton>
    </>
  )
}
