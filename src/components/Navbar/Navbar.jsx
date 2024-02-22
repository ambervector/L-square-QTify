import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Button from "../Button/Button";
import Search from "../Search/Search";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import Form from "../Form/Form";

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <nav className={styles.navbar}>
        <Link to="/">
          <Logo />
        </Link>

        <Search />
        <Button text="Give Feedback" onClick={handleOpen} />
      </nav>
      {open && <Form open={open} handleClose={handleClose} />}
    </div>
  );
}

export default Navbar;
