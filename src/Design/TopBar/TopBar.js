import React from "react";
import Grid from "@mui/material/Grid";

import Logo from "./Logo/Logo";
import Menu from "./Logo/Menu/Menu";
import RegisterBtn from "./RegisterBtn";

export default function TopBar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        background: "green",
        padding:"1% 0%"
      }}
    >
      <Grid container spacing={2}>
        <Grid item lg={2} md={1} xl={0}>
          <p style={{color:"green",margin:"0px"}}>.</p>
        </Grid>
        <Grid item xs={4} sm={3}  md={2}>
          <Logo />
        </Grid>
        <Grid item xs={12} sm={5} md={5}>
          <Menu />
        </Grid>
        <Grid item xs={12} md={3} sm={1}>
          <RegisterBtn />
        </Grid>
        <Grid item lg={2} md={1}  xl={0}>
        <p style={{color:"green",margin:"0px"}}>.</p>
        </Grid>
      </Grid>
    </div>
  );
}
