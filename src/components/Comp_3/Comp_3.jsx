import React from "react";
import styles from "./_comp_3.module.css";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { RxDividerVertical } from "react-icons/rx";
import { fontSize } from "@mui/system";

const Comp_3 = () => {
  return (
    <main id="comp3-block">
      <section
        style={{
          height: "50vh",
          width: "90%",
          margin: "0 auto",
          marginTop: "3%",
          marginBottom: "5%",
        }}
        id={styles.carosalx}
      >
        <article id={styles.Box}>
          <main>
            <div
              id={styles.uniqueTour}
              style={{
                display: "flex",
                gap: "15px",
                fontSize: "2.5em",
                width: "25vw",
              }}
            >
              <p style={{ width: "80%" }}>Unique Tour</p>
              <main style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    borderBottom: "1px solid black",
                    padding: "1px",
                    width: "8vw",
                  }}
                ></div>
                <div></div>
              </main>
            </div>
            <div id="">
              <img
                id={styles.video}
                src="https://images.unsplash.com/photo-1676310483825-daa08914445e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80"
                alt=""
                height={355}
                width={300}
              />
            </div>
            <div
              id={styles.retroTrain}
              style={{ display: "flex", flexDirection: "column", gap: "50px" }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <h2>Retro train Tour in Karelia</h2>
                  <div>
                    <AiOutlineLeft />
                    <RxDividerVertical />
                    <AiOutlineRight />
                  </div>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing iste.</p>
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
                porro molestias, eum facere quos, modi, voluptates cumque
                dolorem quasi voluptas itaque? Dolore fuga repellendus
                perferendis quas corrupti at, id doloremque ducimus modi
                aperiam, facilis provident. Mollitia soluta facilis obcaecati,
                maxime sequi, recusandae optio delectus placeat, molestias
                possimus architecto atque eaque. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Expedita autem debitis numquam
                inventore non aliquam aliquid? Corrupti accusantium error
                suscipit!
              </div>
              <div>
                <button id={styles.buyTickets}>Buy Tickets</button>
                <span
                  style={{
                    borderBottom: "2px solid black",
                    paddingBottom: "3px",
                    marginLeft: "20px",
                    fontFamily: "sans-serif",
                    fontSize: "14px",
                  }}
                >
                  LEARN MORE
                </span>
              </div>
            </div>
            <div id={styles.intermidate}></div>
          </main>
        </article>
      </section>
    </main>
  );
};

export default Comp_3;
