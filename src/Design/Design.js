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
  );
}
