import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "../../assets/logo.webp";
import { useState } from "react";

const Links = [
  { label: "Home", url: "/" },
  { label: "About", url: "#about" },
  { label: "Products", url: "#products" },
  { label: "Innovations", url: "#innovations" },
  { label: "Games", url: "#games" },
  { label: "FAQs", url: "#faq" },
];

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleToggle() {
    setToggleMenu(!toggleMenu);
  }

  return (
    <nav className='public-nav'>
      <img src={logo} className='logo' alt='Apex logo' />

      <button className={`nav-btn`} onClick={handleToggle}>
        🟰
      </button>

      <div className={`${toggleMenu && "open-menu"} nav-content`}>
        <ul>
          {Links.map((link, idx) => (
            <li key={idx}>
              <NavLink
                to={link.url}
                onClick={handleToggle}
                className={({ isActive }) => (isActive ? "active" : "navlink")}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className='btn-group'>
          <Link to='' className='connect-wallet'>
            Connect Wallet
          </Link>
          <span>+</span>
        </div>
        <button className={`nav-btn`} onClick={handleToggle}>
          ✖️
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
