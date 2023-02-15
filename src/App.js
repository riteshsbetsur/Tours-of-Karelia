import React from "react";
import Expect from "./components/expectPage/Expect";
import Footer from "./components/footer/Footer";
import Gallery from "./components/galleryPage/Gallery";
import LightHouseImg from "./components/homePage/LightHouseImg";
import Comp_1 from "./components/Comp_1/Comp_1";
import Comp_3 from "./components/Comp_3/Comp_3";
import Comp2 from "./components/Comp_2/Comp2";
import "./Global.css";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar/>
      <LightHouseImg />
      <Expect />
      <Gallery />
      <Comp_3 />
      <Comp_1 />
      {/* <Comp_2 /> */}
      <Comp2/>
      <Footer />
    </div>
  );
};

export default App;
