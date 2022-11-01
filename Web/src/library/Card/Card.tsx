import classNames from "classnames";
import React from "react";
import "./Card.scss";

type CardProps = {
  isFlipped?: boolean;
  variant?: "outlined";
  content: {
    front: {
      title: JSX.Element | string;
      icon: JSX.Element;
    };
    back?: {
      title: JSX.Element | string;
      description: string;
      icon: JSX.Element;
    };
  };
};
const Cards: React.FC<CardProps> = (props) => {
  const frontClassnames = classNames("flip-card-front", {
    outline: props.variant === "outlined",
  });
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className={frontClassnames}>
          {props.content.front.icon && props.content.front.icon}
          <h5>{props.content.front.title}</h5>
        </div>
        <div className="flip-card-back">
          <img src="https://techno.dreamitsolution.net/wp-content/uploads/2020/10/feature3.jpg" />
          {props.content.back?.icon && props.content.back?.icon}
          <h5>{props.content.back?.title}</h5>
          <p>{props.content.back?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
