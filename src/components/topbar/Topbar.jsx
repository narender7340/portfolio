import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
import { useEffect, useState } from "react";

export default function Topbar({ menuOpen, setMenuOpen }) {
  const [theme, setTheme] = useState("light-theme")
  const toggletheme = () => { 
    theme==="dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme])
  
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            NARVI
          </a>
          <div className="itemContainer" id="itemContainer1">
            <Person className="icon" />
            <span>+91 7340417895</span>
          </div>
          <div className="itemContainer" id="itemContainer1">
            <Mail className="icon" />
            <span>narender@iitk.ac.in</span>
          </div>
          <div className="itemContainer">
            <button className="btn" onClick={() => toggletheme()}>Theme</button>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
