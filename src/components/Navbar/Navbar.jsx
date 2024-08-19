import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  // Handle link click and close the menu
  const handleSetActive = (link) => {
    setActiveLink(link);
    setMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="#">
        Portfolio
      </a>
      <div className={styles.menu}>
        <div className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul
          className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}
        >
          <li>
            <a
              href="#about"
              onClick={() => handleSetActive("about")}
              className={activeLink === "about" ? styles.active : ""}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skill"
              onClick={() => handleSetActive("skill")}
              className={activeLink === "skill" ? styles.active : ""}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => handleSetActive("projects")}
              className={activeLink === "projects" ? styles.active : ""}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => handleSetActive("contact")}
              className={activeLink === "contact" ? styles.active : ""}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
