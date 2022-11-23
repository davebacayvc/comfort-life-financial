import React from "react";
import "./Title.scss";

type TitleProps = {
  title: string;
  subtitle?: string;
};
const Title: React.FC<TitleProps> = (props) => {
  return (
    <div className="admin-title-container">
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </div>
  );
};

export default Title;
