import React from "react";
import logo from "../../assets/logo.png";
import Navbar from "../navbar/Navbar";
import "./home.css";

const Home = () => {
  return (
    <section id="home">
      <div className="nav-div">
        <Navbar />
      </div>

      <div className="home-div">
        <img src={logo} alt="" />
        <h2>Psychedelic Trance Dj/Producers based in Sydney Australia </h2>
      </div>
    </section>
  );
};

export default Home;
