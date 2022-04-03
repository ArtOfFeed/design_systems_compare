import { NavLink } from "react-router-dom";

export const Chakra = () => {
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