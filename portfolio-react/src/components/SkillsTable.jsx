import { UnorderedList } from "./UnorderedList"

export const SkillsTable = () => {

    const skills = [
        'Javascript (Node-express)', 
        'Python', 'NPM', 'Insomnia', 'Git and Github','HTML - CSS',
        'Django'
]
    const database = [
        'MongoDB', 'Mongoose', 'MySQL',
        'PostgreSQL', 'Docker', 'Sequelize'
    ]
    const languages = ['Spanish (Native)', 'English (C2 - EF SET)']

  return (
    <div className="unorderedList">
        <UnorderedList title='Skills' content={skills}/>
        <UnorderedList title='Database' content={database}/>
        <UnorderedList title='Languages' content={languages}/>
    </div>
  )
}
