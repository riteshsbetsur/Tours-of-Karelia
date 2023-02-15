import React from "react";
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { RiFacebookCircleLine } from "react-icons/ri";
import { RxTwitterLogo } from "react-icons/rx";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiBold } from "react-icons/bi";
import { FaPinterestP } from "react-icons/fa";
import Styles from "./Footer.module.css";

const Footer = () => {
  return (
    <main id="footer-block">
      <footer id={Styles.mainFooter}>
        <article>
          <div id={Styles.subFooter}>
            <div id={Styles.subFooter3}>
              <hr
                style={{ width: "60%", marginLeft: "1%", marginBottom: "5%" }}
              />
              <h1>OUR TOURS</h1>
              <p>Valaam island</p>
              <p>Relax tours</p>
              <p>Extreme tours</p>
              <p>Wild nature</p>
              <p>Ritro train event</p>
              <p>Amazing smashed tour</p>
              <div style={{ marginTop: "12%" }}>
                <span>PRIVACY POLICY</span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>QUESTION</span>
                <p>2015 Kareliaged travel All rights reserved.</p>
              </div>
            </div>
            <div id={Styles.subFooter4}>
              <hr
                style={{ width: "60%", marginLeft: "1%", marginBottom: "5%" }}
              />
              <h1>GET-IN-TOUCH</h1>
              <p>Ask a question</p>
            </div>
            <div id={Styles.subFooter5}>
              <hr
                style={{ width: "60%", marginLeft: "1%", marginBottom: "5%" }}
              />
              <h1>CONTACT US</h1>
              <p>Fontanka street, 16-Saint Pitersburg</p>
              <p>8800333-44-36</p>
              <p>info@kareliagid.ru</p>
            </div>
            <div id={Styles.subFooter6}>
              <div id={Styles.socialIcons}>
                <span>
                  <BiBold />
                </span>
                <span>
                  <a href="https://www.facebook.com/DIGISTARTD/" target="_new">
                    <RiFacebookCircleLine style={{ color: "white" }} />
                  </a>
                </span>
                <span>
                  <a
                    href="https://twitter.com/start_digi?lang=ca"
                    target="_new"
                  >
                    <RxTwitterLogo style={{ color: "white" }} />
                  </a>
                </span>
                <p style={{color:"orange"}}>Design & develop by Ritesh</p>
              </div>
            </div>
          </div>
        </article>
      </footer>
    </main>
  );
};

export default Footer;
