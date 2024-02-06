import React from "react";
import styles from "./Navbar.module.css";
import Button from "../Button/Button";
import Search from "../Search/Search";
import Logo from "../Logo/Logo";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a href="/">
        <Logo />
      </a>

      <Search />
      <Button>Give Feedback</Button>
    </nav>
  );
}

export default Navbar;
