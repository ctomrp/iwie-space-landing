import logo from "../../assets/logo.png";
import s from "./style.module.css";

export function Navbar() {
  return (
    <nav className={`${s.navbar} navbar fixed-top`} data-bs-theme="dark">
      <div className="container">
        <a className="navbar-brand">
          <img src={logo} alt="logo iwie" className={`${s.logo}`} loading="lazy" />
        </a>
        <a
          href="https://www.tiktok.com/@iwie.space"
          target="_blank"
          className="btn btn-secondary"
        >
          Visítanos
        </a>
      </div>
    </nav>
  );
}
