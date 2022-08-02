import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <section className="navbar">
      <div className="navbar-div">
        <a href="#home">Home</a>
        <a href="#bio">Bio</a>
        <a href="#tracks">Tracks</a>
        <a href="#events">Events</a>
        <a href="#djmixes">Dj Mixes</a>
        <a href="#photos">Photos</a>
        <a href="#videos">Videos</a>
      </div>
    </section>
  );
};

export default Navbar;
