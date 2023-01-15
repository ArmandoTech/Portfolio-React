
export const InformationButton = ({link, children}) => {
  return (
    <a
      href={link}
      className="btn btn-secondary"
      target="_blank" rel="noreferrer">
        {children}</a>
  )
}
