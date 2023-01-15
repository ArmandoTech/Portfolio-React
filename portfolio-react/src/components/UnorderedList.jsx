
export const UnorderedList = ({title, content}) => {
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {
          content.map((element, index) => (
            <li key={index}>{element}</li>
          ))
        }
      </ul>
    </div>
  )
}
