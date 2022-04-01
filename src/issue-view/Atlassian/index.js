import { NavLink } from "react-router-dom";

export const Atlassian = () => {
  return (
    <>
      <nav>
        <ul>
          <NavLink to="./issue">Issue view</NavLink>
          <NavLink to="./automation">Automation</NavLink>
        </ul>
      </nav>
    </>
  )
}