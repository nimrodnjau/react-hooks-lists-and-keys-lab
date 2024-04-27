import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const bar = links.map((link) => (
    <a key={link} href={"#" + link}>
      {link}
    </a>
  ))

  return <nav>{bar}</nav>;
}

export default NavBar;
