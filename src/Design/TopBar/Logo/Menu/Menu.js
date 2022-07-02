import React from "react";

import "./Menu.css";
import SingleMenu from "./SingleMenu";

const menus = [
  {
    name: "Home",
    link: "#",
  },
  {
    name: "Shops",
    link: "#",
  },
  {
    name: "Blog",
    link: "#",
  },
  {
    name: "Connects",
    link: "#",
  },
];

export default function Menu() {
  return (
    <div style={{ display: "flex" }}>
      {menus.map((val, key) => {
        return <SingleMenu key={key} data={val} />;
      })}
    </div>
  );
}
