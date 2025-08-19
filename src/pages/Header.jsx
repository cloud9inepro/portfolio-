import { useState } from "react";
import "../App.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header" style={styles.header}>
      <div style={styles.container}>
        <div style={styles.logo}>Gift.Dev</div>

        {/* Hamburger Icon */}
        <div style={styles.hamburger} onClick={toggleMenu}>
          <div style={styles.bar}></div>
          <div style={styles.bar}></div>
          <div style={styles.bar}></div>
        </div>

        {/* Nav Links */}
        <nav
          className="header-nav"
          style={{
            ...styles.nav,
            ...(isOpen ? styles.navOpen : styles.navClosed),
          }}
        >
          <a href="#about" style={styles.link}>About</a>
          <a href="#skill" style={styles.link}>Skill</a>
          <a href="#projects" style={styles.link}>Projects</a>
          <a href="#contact" style={styles.link}>Contact</a>
        </nav>
      </div>
    </header>
  );
};

const styles = {
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,
    background: "rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(4px)",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#fff",
    position: "relative",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    letterSpacing: "1px",
  },
  hamburger: {
    display: "none",
    flexDirection: "column",
    gap: "5px",
    cursor: "pointer",
  },
  bar: {
    width: "25px",
    height: "3px",
    backgroundColor: "#fff",
    borderRadius: "3px",
  },
  nav: {
    display: "flex",
    gap: "1.5rem",
    alignItems: "center",
    transition: "all 0.3s ease",
  },
  navClosed: {
    // default desktop view — overridden in mobile view
  },
  navOpen: {
    position: "absolute",
    top: "70px",
    right: "0",
    backgroundColor: "#000",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    padding: "1rem 2rem",
    gap: "1rem",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
    fontSize: "1rem",
    transition: "opacity 0.3s ease",
  },
};

export default Header;
