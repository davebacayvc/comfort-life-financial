import React from "react";
import "./CardWithImage.scss";

interface ICardWithImage {
  image?: string;
  name: string;
  description: string;
  icon: JSX.Element;
}
const CardWithImage: React.FC<ICardWithImage> = (props) => {
  return (
    <div className="card-with-image-wrapper">
      {props.icon}
      <div className="card-with-image">
        <img src={props.image} alt={props.image} className="card-image" />
        <div className="card-captions">
          <h5>{props.name}</h5>
        </div>
      </div>
    </div>
  );
};

export default CardWithImage;
