import { useState } from "react";
import NavItem from "./NavItem";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <nav
      className="navbar has-text-centered"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item is-tab is-active">
          <img src={require("../img/logo.png")} alt="logo" />
        </a>

        <a
          onClick={() => {
            setIsActive(!isActive);
          }}
          role="button"
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navMenu"
        className={`navbar-menu ${isActive ? "is-active" : ""}`}
      >
        <div className="navbar-start">
          <NavItem pageName="staff" />

          <NavItem pageName="services" />

          <NavItem pageName="about" />

          <NavItem pageName="gift cards" />
        </div>

        <div className="navbar-end is-uppercase">
          <div className="navbar-item">
            <div className="buttons is-centered">
              <a
                className="button is-primary is-light"
                href="https://www.instagram.com/freetobemesalon/"
              >
                <i className="fab fa-instagram fa-lg"></i>
                {"\u00A0"}
                <strong>Follow Us</strong>
              </a>
              <a
                className="button is-primary"
                href="https://ftbmsalon.mysalononline.com/booking/"
              >
                <i className="fas fa-calendar-week fa-lg"></i>
                {"\u00A0"}
                <strong>Book Online</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
