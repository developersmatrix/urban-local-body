import "./Navbar.css";
import logo from "./logo.png";

const Navbar = () => {
  const url = "";

  return (
    // HEADER

    <header class="header">
      {/* <!-- LOGO --> */}
      <div class="logo">
        <a href={url} class="logo-link">
          <img
            src={logo}
            alt="Town Panchayath Virajpet Logo"
            class="logo-img"
          />
          virajpet
        </a>
      </div>
      {/*  Main Navigation  */}
      <nav class="main-nav">
        <ul class="nav-list">
          <li class="nav-list__item">
            <a class="nav-link" href="index.html">
              Dashboard
            </a>
          </li>
          <li class="nav-list__item">
            <a class="nav-link" href="mib.html">
              MIB
            </a>
          </li>
          <li class="nav-list__item">
            <a class="nav-link" href={url}>
              Work Schemes
            </a>
          </li>
          <li class="nav-list__item">
            <a class="nav-link" href={url}>
              Housing
            </a>
          </li>
          <li class="nav-list__item">
            <a class="nav-link" href={url}>
              Miscellaneous
            </a>
          </li>
        </ul>
      </nav>

      <div class="nav-toggle">
        <div class="hamburger"></div>
      </div>
    </header>
  );
};

export default Navbar;
