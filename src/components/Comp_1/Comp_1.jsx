import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import styles from "./_comp_1.module.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  boxShadow: "none",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  gap: "20px",
  flexDirection: "column",
  color: theme.palette.text.secondary,
}));

export default function Comp_1() {
  return (
    <main id="comp1-block">
      <Box
        sx={{
          flexGrow: 1,
          width: "80%",
          margin: "0 auto",
          minHeight: "50vh",
          marginBottom: "5%",
        }}
      >
        <Grid container spacing={7}>
          <Grid item xs={6} md={3}>
            <Item>
              <section
                style={{
                  dis: "flex",
                  alignItems: "center",
                  justifyContent: "cenetr",
                }}
              >
                <div className={styles.outerCircle}>
                  <div className={styles.middleCircle}>
                    <div className={styles.innerCircle}>82</div>
                  </div>
                </div>
              </section>
              <main
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  flexDirection: "column",
                }}
              >
                <p
                  style={{
                    textAlign: "center",
                    width: "90%",
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                >
                  <i className={styles.pool}>
                    Is the diameter of the pool for a depth of 9.4 meters
                  </i>
                </p>
                <p style={{ fontSize: "14px", textAlign: "center" }}>
                  Moved by 11 lifts and can go from a swimming pool to a dry
                  stage in less than a minute
                </p>
              </main>
            </Item>
          </Grid>
          <Grid item xs={6} md={3}>
            <Item>
              <section
                style={{
                  dis: "flex",
                  alignItems: "center",
                  justifyContent: "cenetr",
                }}
              >
                <div className={styles.outerCircle}>
                  <div className={styles.middleCircle}>
                    <div className={styles.innerCircle}>37</div>
                  </div>
                </div>
              </section>
              <main
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  flexDirection: "column",
                }}
              >
                <p
                  style={{
                    textAlign: "center",
                    width: "90%",
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                >
                  <i className={styles.pool}>
                    Is the diameter of the pool for a depth of 9.4 meters
                  </i>
                </p>
                <p style={{ fontSize: "14px", textAlign: "center" }}>
                  Moved by 11 lifts and can go from a swimming pool to a dry
                  stage in less than a minute
                </p>
              </main>
            </Item>
          </Grid>
          <Grid item xs={6} md={3}>
            <Item>
              <section
                style={{
                  dis: "flex",
                  alignItems: "center",
                  justifyContent: "cenetr",
                }}
              >
                <div className={styles.outerCircle}>
                  <div className={styles.middleCircle}>
                    <div className={styles.innerCircle}>14</div>
                  </div>
                </div>
              </section>
              <main
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  flexDirection: "column",
                }}
              >
                <p
                  style={{
                    textAlign: "center",
                    width: "90%",
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                >
                  <i className={styles.pool}>
                    Is the diameter of the pool for a depth of 9.4 meters
                  </i>
                </p>
                <p style={{ fontSize: "14px", textAlign: "center" }}>
                  Moved by 11 lifts and can go from a swimming pool to a dry
                  stage in less than a minute
                </p>
              </main>
            </Item>
          </Grid>
          <Grid item xs={6} md={3}>
            <Item>
              <section
                style={{
                  dis: "flex",
                  alignItems: "center",
                  justifyContent: "cenetr",
                }}
              >
                <div className={styles.outerCircle}>
                  <div className={styles.middleCircle}>
                    <div className={styles.innerCircle}>90</div>
                  </div>
                </div>
              </section>
              <main
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  flexDirection: "column",
                }}
              >
                <p
                  style={{
                    textAlign: "center",
                    width: "90%",
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                >
                  <i className={styles.pool}>
                    Is the diameter of the pool for a depth of 9.4 meters
                  </i>
                </p>
                <p style={{ fontSize: "14px", textAlign: "center" }}>
                  Moved by 11 lifts and can go from a swimming pool to a dry
                  stage in less than a minute
                </p>
              </main>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}
