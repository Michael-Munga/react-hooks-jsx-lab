import React from "react";

function NavBar() {
  // update the JSX being returned!
  return (
    <nav>
      NavBar
      <a id="home" href="#home">
        Home
      </a>
      <a id="about" href="#about">
        {" "}
        About
      </a>
    </nav>
  );
}

export default NavBar;
