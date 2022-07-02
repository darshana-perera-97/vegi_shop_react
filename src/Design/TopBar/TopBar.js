import React from "react";
import Grid from "@mui/material/Grid";

import Logo from "./Logo/Logo";
import Menu from "./Logo/Menu/Menu";

export default function TopBar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        background: "green",
      }}
    >
      <Grid container spacing={2}>
        <Grid item lg={2} md={1} xl={0}>
          <p>.</p>
        </Grid>
        <Grid item xs={4} md={2}>
            <Logo />
        </Grid>
        <Grid item xs={12} md={4}>
            <Menu />
        </Grid>
        <Grid item xs={12} md={4}>
            <Menu />
        </Grid>
      </Grid>
    </div>
  );
}
