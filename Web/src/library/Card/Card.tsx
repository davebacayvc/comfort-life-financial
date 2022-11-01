import React from "react";
import "./Card.scss";

type CardProps = {
  isFlipped?: boolean;
  content: {
    front: {
      title: JSX.Element | string,
      icon: JSX.Element
    },
    back?: {
      title: JSX.Element | string,
      description: string,
      icon: JSX.Element
    },
  }
};
const Cards: React.FC<CardProps> = (props) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {props.content.front.icon && props.content.front.icon}
          <h5>{props.content.front.title}</h5>
        </div>
        <div className="flip-card-back">
          {props.content.back?.icon && props.content.back?.icon}
          <h5>{props.content.back?.title}</h5>
          <p>
            {props.content.back?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
