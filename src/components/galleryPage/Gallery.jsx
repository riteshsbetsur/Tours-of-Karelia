import { Container, Paper, Box, Grid } from "@mui/material";
import React from "react";
import Styles from "./gallery.module.css";
const Gallery = () => {
  return (
    <main id="gallery-block">
      <section
        style={{
          width: "100%",
          height: "50%",
          // backgroundColor: "teal",
          margin: "0",
          padding: "0",
          marginBottom: "5%",
        }}
      >
        <article
          style={{
            width: "80%",
            // backgroundColor: "#eeee",
            margin: "0 auto",
            height: "60vh",
            display: "flex",
            paddingTop: "20px",
          }}
        >
          <div style={{ width: "90%", height: "100%", margin: "0 auto" }}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                backgroundColor: "#1111",
                marginTop: "6rem",
                padding: "11px",
              }}
            >
              <div className={Styles.groupImg} id={Styles.img1}>
                <img
                  src="https://c0.wallpaperflare.com/preview/135/424/1021/clouds-current-dawn-electric-pillar.jpg"
                  alt=""
                  style={{ marginRight: "10px", marginBottom: "8px" }}
                />
              </div>
              <div className={Styles.groupImg}>
                <img
                  src="https://i.pinimg.com/originals/04/bd/ca/04bdca3833ba5a698bf4c752ffb273f8.jpg"
                  alt=""
                />
              </div>
              <div>
                <h2 id={Styles.Gallery}>Gallery</h2>
              </div>
              <div className={Styles.groupImg} id={Styles.img2}>
                <img
                  src="https://www.tamilnadutourism.tn.gov.in/img/pages/medium-desktop/pine-forest-1656503928_d6c35359757cbc521e1b.webp"
                  alt=""
                  style={{ marginRight: "10px" }}
                />
              </div>
              <div className={Styles.groupImg}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIQBEkxv1qrbf1z0w5N36MEs_IaKxNKkBG3w&usqp=CAU"
                  alt=""
                  style={{ marginRight: "10px" }}
                />
              </div>
              <div className={Styles.groupImg}>
                <img
                  src="https://i.pinimg.com/originals/04/d3/79/04d379eb72ee8849deb9270ee3324a9e.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*H-sGD7HYiF7rb8JITwZAQw.jpeg"
              alt=""
              width="400px"
              height="320px"
            />

            <div style={{ display: "block", flexWrap: "wrap", width: "100%" }}>
              <div style={{ marginLeft: "50px" }}>
                <h2 style={{ fontSize: "36px", paddingTop: "30px" }}>
                  History of Karelia
                </h2>
                <p style={{ color: "gray" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore perferendis deserunt reprehenderit doloribus. Ipsam
                  explicabo eius quas libero id aliquid. Lorem ipsum dolor sit.
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Gallery;
