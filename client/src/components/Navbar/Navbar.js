import { Link } from "react-router-dom";

import "./Navbar.css";
import logo from "./logo.png";

const Navbar = () => {
  const url = "";

  return (
    // HEADER

    <header className="header">
      {/* <!-- LOGO --> */}
      <div className="logo">
        <Link to="/" className="logo-link">
          <img
            src={logo}
            alt="Town Panchayath Virajpet Logo"
            className="logo-img"
          />
          virajpet
        </Link>
      </div>
      {/*  Main Navigation  */}
      <nav className="main-nav">
        <ul className="nav-list">
          <li className="nav-list__item">
            <Link className="nav-link" to="/">
              Dashboard
            </Link>
          </li>
          <li className="nav-list__item">
            <Link className="nav-link" to="/mib">
              MIB
            </Link>
          </li>
          <li className="nav-list__item">
            <Link className="nav-link" href={url}>
              Work Schemes
            </Link>
          </li>
          <li className="nav-list__item">
            <Link className="nav-link" href={url}>
              Housing
            </Link>
          </li>
          <li className="nav-list__item">
            <Link className="nav-link" href={url}>
              Miscellaneous
            </Link>
          </li>
        </ul>
      </nav>

      <div className="nav-toggle">
        <div className="hamburger"></div>
      </div>
    </header>
  );
};

export default Navbar;
