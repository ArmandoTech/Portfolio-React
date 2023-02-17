
export const Divisor = ({text, children}) => {
  return (
    <>
    <div className="division"></div>
      <div className="content-text">
        <h2>{children}</h2>
        <p>{text}</p>
      </div>
    </>
  )
}
