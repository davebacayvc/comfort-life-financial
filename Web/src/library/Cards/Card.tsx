import React from "react";
import "./Card.scss";
import PublicIcon from "@mui/icons-material/Public";

type CardProps = {
  isFlipped?: boolean;
  children: JSX.Element;
};
const Cards: React.FC<CardProps> = (props) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h5>Services 1</h5>
        </div>
        <div className="flip-card-back">
          <h5>Services 1</h5>
          <p>
            Whether bringing new and amazing products and an services to market
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
