import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">F1 Universe</h1>

      <ul className="nav-links">

        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/drivers">Drivers</NavLink>
        </li>

        <li>
          <NavLink to="/teams">Teams</NavLink>
        </li>

        <li>
          <NavLink to="/Calendar">Calendar</NavLink>
        </li>

        <li>
          <NavLink to="/standings">Standings</NavLink>
        </li>

        <li>
          <NavLink to="/highlights">Highlights</NavLink>
        </li>
        <li><NavLink to="/about">About Me</NavLink></li>

      </ul>
    </nav>
  )
}

export default Navbar