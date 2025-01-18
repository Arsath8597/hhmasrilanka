import Hero from "./Hero";
import Slider from "./Slider";
import Project from "./Project";
import Support from "./Support";
import Card from "./Card";
import Phara from "./Phara";

import About from "./Pages/About";

import { Home } from "react-feather";

function Landing() {
  return (
    <div className=" overflow-hidden">
      <Slider />
      {/* <Card/> */}
      <Support />
      <Hero />
      <Phara />
    </div>
  );
}

export default Landing;
