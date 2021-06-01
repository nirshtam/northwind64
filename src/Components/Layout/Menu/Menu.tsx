import { NavLink } from "react-router-dom";
import "./Menu.css";

export default function Menu() {
  return (
    <aside>
      <nav>
        <NavLink to="/" className="nav-item" activeClassName="current">
          Home
        </NavLink>
        <NavLink to="/products" className="nav-item">
          Products
        </NavLink>
        <NavLink to="/about" className="nav-item">
          About
        </NavLink>
        <NavLink to="/contact-us" className="nav-item">
          Contact Us
        </NavLink>
      </nav>
    </aside>
  );
}
