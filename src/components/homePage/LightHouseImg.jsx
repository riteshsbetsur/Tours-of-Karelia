import React from "react";
import { RxTextAlignJustify } from "react-icons/rx";
import styles from "./_LightHouse.module.css";
import { BsPlayCircle } from "react-icons/bs";

const LightHouseImg = () => {
  return (
    <main id="main-block">
      <div className={styles.mainBlock}>
        <div className={styles.description}>
          <h1>Tours of Karelia</h1>
          <p>
            <i>
              Immerse yourself in the amazing atmosphere of <br /> Karelia ride
              in her most interesting places...
            </i>
          </p>
          <div className={styles.buy_play}>
            <button>
              <a href="https://www.booking.com/hotel/au/karelia-alpine-lodge.html" target="_new">
                BUY TICKETS
              </a>
            </button>
            <div className={styles.videoIconBlock}>
              <aside>PLAY VIDEO</aside>
              <aside className={styles.playCircleIcon}>
                <BsPlayCircle />
              </aside>
            </div>
          </div>
        </div>
        <img
          id={styles.lightImg}
          //   src="../assets/lightHouse.png"
          src="https://images.unsplash.com/photo-1486944936280-f152c82ac151?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGxpZ2h0aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60"
          alt="lightHouse"
        />
        <main id={styles.block_section}>
          <div id={styles.first_div}>
            <h1>Valaam Island</h1>
            <p id={styles.first_P_block}>
              An Island in the nothern part of Lake Ladogo,the <br /> largest in
              the composition of the valaam archipelago{" "}
            </p>
          </div>
          <div id={styles.second_div}>
            <h1>Relax Tours</h1>
            <p>
              Visit sarajevo and explore Bosnia and hercegovina <br /> with
              relax tours tourist agency
            </p>
          </div>
          <div id={styles.third_div}>
            <h1>Extreme Sports </h1>
            <p>
              Also called action sports,affro sports and adventurous <br />{" "}
              sports is popular term for certain activities perceived
            </p>
          </div>
          <div id={styles.forth_div}>
            <aside>
              <h1>Wild Nature</h1>
              <p>
                Pure natural organic natural skin and hair care and <br /> pure
                natural mineral makeup
              </p>
            </aside>
          </div>
        </main>
      </div>
    </main>
  );
};

export default LightHouseImg;
