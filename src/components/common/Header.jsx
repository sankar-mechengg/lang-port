import { NavLink } from "react-router-dom";
import styles from "../../assets/styles/header.module.css";
import { useLanguage } from "../../context/LanguageContext.jsx";
import langportIcon from "../../assets/images/langport_icon_cp.png"; // Import the logo image

export default function Header() {
  const { language } = useLanguage();
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          src={langportIcon}
          alt="LangPort Logo"
          className={styles.logoImage}
        />{" "}
        {/* Add logo image */}
        LangPort
      </div>
      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/train"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Learning
        </NavLink>
        <NavLink
          to="/test"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Testing
        </NavLink>
      </nav>
      <span className={styles.lang}>{language}</span>
    </header>
  );
}
