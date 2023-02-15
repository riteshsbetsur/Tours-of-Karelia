import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Styles from "./_comp_2.module.css";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  boxShadow: "none",
  zIndex: "-1",
  color: theme.palette.text.secondary,
}));

export default function Comp_2() {
  return (
    <section id={Styles.main_container}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  borderRight: "0.1px solid black",
                  padding: "50px",
                  flexBasis: "50%",
                }}
              ></div>
              <div
                style={{
                  borderLeft: "0.1px solid black",
                  padding: "50px",
                  flexBasis: "50%",
                }}
              ></div>
            </Box>
          </Grid>
          <Grid item xs={6} md={12}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <p className={Styles.pool} style={{ marginTop: "10px" }}>
                Want to see
              </p>
              <h1
                id={Styles.more}
                style={{ padding: "0", marginBottom: "10px" }}
              >
                More?
              </h1>
              <button id={Styles.buyTickets}>
                <a href="https://www.booking.com/hotel/au/karelia-alpine-lodge.html">
                  Buy Tickets
                </a>
              </button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
