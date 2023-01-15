
export const NavBarItem = ({linkItem, children}) => {
  return (
    <li>
        <a className="nav-link" href={linkItem}>{children}</a>
    </li>
  )
}
