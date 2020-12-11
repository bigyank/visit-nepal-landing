import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Services that we provide</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="night.png"
              text="Choose your own Adventures"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="guide.png"
              text="Hire the guide you feel comfortable with"
              label="Guide"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="blog.png"
              text="Share your experiences with the world"
              label="Review"
              path="/services"
            />
            <CardItem
              src="list.png"
              text="Add destinations to your bucket lists"
              label="Bucket List"
              path="/products"
            />
            <CardItem
              src="map.png"
              text="map to help you guide"
              label="Map"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
