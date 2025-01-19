import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Slider from "./Components/Slider";
import Phara from "./Components/Phara";
import Landing from "./Components/Landing";
import ScrollToTop from "./Components/ScrollTop";
import About from "./Components/Pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "react-feather";
import Economic from "./Components/Pages/Economic";
import CleanWater from "./Components/Pages/CleanWater";
import Zakat from "./Components/Pages/Zakat";
import DeepWater from "./Components/Pages/DeepWater";
import WaterStation from "./Components/Pages/WaterStation";
import Sadaqa from "./Components/Pages/Sadaqa";
import Ramadan from "./Components/Pages/Ramazan";
import WaterWell from "./Components/Pages/Waterwell";
import WaterLife from "./Components/Pages/WaterLife";
import Masjid from "./Components/Pages/Masjid";
import Qurbani from "./Components/Pages/Qurbani";
import HandPump1 from "./Components/Pages/HandPump1";
import HandePump from "./Components/Pages/HandePump";
import Espoir from "./Components/Pages/espoir";
import Waterwellforcommunity from "./Components/Pages/waterwellforcommunity";

function App() {
  return (
    <div className=" overflow-hidden font-serif">
      <BrowserRouter>
        <ScrollToTop />
        <Header />

        <Routes>
          <Route index element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/waterwellforcommunity"
            element={<Waterwellforcommunity />}
          />
          <Route path="/handpump" element={<HandePump />} />
          <Route path="/qurbani" element={<Qurbani />} />
          <Route path="/home" element={<Slider />} />
          <Route path="/Economic" element={<Economic />} />
          <Route path="/CleanWater" element={<CleanWater />} />
          <Route path="/Zakat" element={<Zakat />} />
          <Route path="/DeepWater" element={<DeepWater />} />
          <Route path="/WaterStation" element={<WaterStation />} />
          <Route path="/Sadaqa" element={<Sadaqa />} />
          <Route path="/WaterWell" element={<WaterWell />} />
          <Route path="/WaterLife" element={<WaterLife />} />
          <Route path="/ramadan" element={<Ramadan />} />
          <Route path="/masjid" element={<Masjid />} />
          <Route path="/handpumb" element={<HandPump1 />} />
          <Route path="/espoir" element={<Espoir />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
