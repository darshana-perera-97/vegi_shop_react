import React from "react";

import AboutMe from "./AboutMe/AboutMe";
import AgeWeight from "./AgeWeight/AgeWeight";
import Carasole from "./Carasole/Carasole";
import ClientsReviews from "./ClientsReviews/ClientsReviews";
import Connects from "./Connects/Connects";
import Links from "./Links/Links";
import Products from "./Products/Products";
import TopBar from "./TopBar/TopBar";

export default function Design() {
  return (
    <div style={{width:"100%"}}>
      {/* <Grid container spacing={2}> */}
        {/* <Grid item lg={2} md={1} xl={0}> */}
          {/* <p>.</p> */}
        {/* </Grid> */}
        {/* <Grid item xs={4} md={4}> */}
          <div>
            <TopBar />
            <Carasole />
            <AboutMe />
            <AgeWeight />
            <Products />
            <ClientsReviews />
            <Connects />
            <Links />
          </div>
        {/* </Grid> */}
    {/* //   </Grid> */}
    </div>
  );
}
