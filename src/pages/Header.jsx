import "../App.css";

const Header = () => {
  return (
    <header className="header" style={styles.header}>
      <div style={styles.container}>
        <div style={styles.logo}>Gift.Dev</div>
        <nav className="header-nav" style={styles.nav}>
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
    maxWidth: "1200px",        // keeps content centered and constrained
    margin: "0 auto",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#fff",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    letterSpacing: "1px",
  },
  nav: {
    display: "flex",
    gap: "1.5rem",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
    fontSize: "1rem",
    transition: "opacity 0.3s ease",
  },
};

export default Header;

