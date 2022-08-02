import React from "react";
import ReactPlayer from "react-player";
import "./tracks.css";

const Tracks = () => {
  return (
    <section id="tracks">
      <header>
        <h1>Tracks</h1>
      </header>
      <div id="tracks-div">
        <div className="track1">
          <ReactPlayer url="https://soundcloud.com/rizoma-records/amordad-sep-scoota-shakti-sample?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" />
        </div>
        <div className="track2">
          <ReactPlayer url="https://soundcloud.com/immortals021/psilocybin?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" />
        </div>
        <div className="track3">
          <ReactPlayer url="https://soundcloud.com/immortals021/kundalini-1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" />
        </div>
        <div className="track4">
          <ReactPlayer url="https://soundcloud.com/immortals021/021-dreaming?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" />
        </div>
        <div className="track5">
          <ReactPlayer url="https://soundcloud.com/immortals021/one-of-those-days?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" />
        </div>
        <div className="track6">
          <ReactPlayer url="https://soundcloud.com/immortals021/temple-of-love?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" />
        </div>
      </div>
    </section>
  );
};

export default Tracks;
