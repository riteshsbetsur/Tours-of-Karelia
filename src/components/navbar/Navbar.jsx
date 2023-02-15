import React, { useState } from 'react';
import "./navbr.css"
import styles from "./navBar.module.css"
import { RxTextAlignJustify } from 'react-icons/rx';
import { AiFillCloseSquare } from "react-icons/ai";
import {Link} from "react-scroll"

const Navbar = () => {
      let [show,setShow]=useState(false)
      let handleLinks = () => {
        setShow(!show)
      }
  return (
    <main style={{ position: "relative" }}>
      <header id="navBlock">
        <button className={styles.menuBlock} onClick={handleLinks}>
          <aside className={styles.humburger}>
            {!show ? <RxTextAlignJustify /> : <AiFillCloseSquare/>}
          </aside>
          <aside className={styles.menu}>MENU</aside>
        </button>
        <div className={styles.language}>
          <span>ENG</span>/RU
        </div>
      </header>
      <ul className="nav-links" style={{ display: show ? "block" : "none" }}>
        <li>
          <Link
            to="main-block"
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="expect-block"
            spy={true}
            smooth={true}
            duration={500}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="gallery-block"
            spy={true}
            smooth={true}
            duration={500}
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            to="comp3-block"
            spy={true}
            smooth={true}
            duration={500}
          >
            What we do?
          </Link>
        </li>
        <li>
          <Link
            to="comp1-block"
            spy={true}
            smooth={true}
            duration={500}
          >
            Records
          </Link>
        </li>
        <li>
          <Link
            to="comp2-block"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </main>
  );
}

export default Navbar;