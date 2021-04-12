import React from "react";
import * as Cgicons from "react-icons/cg";
import "./Navbar.css";

function Navbars() {
  return (
    <>
      <div className="navbar">
        <div className="todo">
          <Cgicons.CgMenuGridO className="iconmenu" />
          <span>To Do</span>
        </div>

      </div>
    </>
  );
}

export default Navbars;
