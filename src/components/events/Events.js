import React from "react";
import "./events.css";
import event1 from "../../assets/event1.png";
import event2 from "../../assets/event2.jpg";
import event3 from "../../assets/event3.jpg";
import event4 from "../../assets/event4.jpg";

const Events = () => {
  return (
    <div id="events">
      <div className="header">
        <h1>Upcoming Events</h1>
      </div>
      <div className="events-div">
        <img src={event1} alt="" />
        <img src={event2} alt="" />
        <img src={event3} alt="" />
        <img src={event4} alt="" />
      </div>
    </div>
  );
};

export default Events;
