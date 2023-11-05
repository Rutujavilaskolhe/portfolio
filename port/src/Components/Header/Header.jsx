import { Container, Navbar, Nav } from "react-bootstrap";
import { FiHome, FiUser, FiTv, FiFile } from "react-icons/fi";
import resume from "./my-resume.pdf";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <header style={{ width: "100%" }}>
      <Navbar data-bs-theme="dark" expand="lg">
        <Container>
          <Navbar.Brand
            style={{
              color: "#ffffff",
              fontFamily: "Work Sans ,sans-serif",
              fontSize: "40px",
            }}>
            R<span style={{ color: "rgb(45, 197, 227)" }}>K</span>
          </Navbar.Brand>{" "}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className={styles.cont}>
              <Nav.Link href="/" style={{ color: "#ffffff", fontSize: "22px" }}>
                <FiHome size={18} /> Home
              </Nav.Link>
              <Nav.Link
                href="/about"
                style={{ color: "#ffffff", fontSize: "22px" }}>
                <FiUser size={20} /> About
              </Nav.Link>
              <Nav.Link
                href="/projects"
                style={{ color: "#ffffff", fontSize: "22px" }}>
                <FiTv size={18} /> Projects
              </Nav.Link>
              <Nav.Link
                href="/resume"
                style={{ color: "#ffffff", fontSize: "22px" }}>
                <FiFile size={20} />
                <a
                  style={{ color: "#ffffff", fontSize: "22px" }}
                  href={resume}
                  target="_blank"
                  rel="noopener noreferrer"> Resume
                </a>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
