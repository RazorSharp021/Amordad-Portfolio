import "./App.css";
import React from "react";
import Home from "./components/home/Home";
import Bio from "./components/bio/Bio";
import Tracks from "./components/tracks/Tracks";
import Events from "./components/events/Events";
// import ImageSlider from "./components/slider/ImageSlider";

function App() {
  return (
    <>
      <Home />
      <Bio />
      <Tracks />
      <Events />
    </>
  );
}

export default App;
