import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Testimonials from "./components/testimonials/Testimonials"
import Topbar from "./components/topbar/Topbar"
import Works from "./components/works/Works"
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";
// import Toggle from "./Toggle";

function App() {
  const [menuOpen,setMenuopen] = useState(false)
  return (
    <div className="app">
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuopen}/>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuopen}/>
    <div className="sections">
      <Intro/>
      <Portfolio/>
      <Works/>
      <Testimonials/>
      <Contact/>
      {/* <Toggle/> */}
    </div>
    </div>
  );
}

export default App;
