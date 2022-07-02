import React from "react";


export default function SingleMenu(prop) {
  return (
    <div style={{ paddingTop: "15%", padding: "2vh" }}>
        
      <a
        style={{
          margin: "0px",
        //   textShadow: "-1px 1px 10px rgba(0, 0, 0, 0.75)",
          color:"rgba(255,255,255,0.9)",
          textDecoration:"none",          
        }}
        href={prop.data.link}
        id="links"
      >
        {prop.data.name}
      </a>
    </div>
  );
}
