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
      {/* <Support /> */}
      <h1 className="text-center mt-10 text-3xl font-bold">OUR PROGRAMS</h1>
      <Hero />
      <Phara />
    </div>
  );
}

export default Landing;
