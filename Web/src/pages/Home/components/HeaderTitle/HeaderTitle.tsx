import React from "react";
import "./HeaderTitle.scss";

type HeaderTitleProps = {
  title: string;
  bigTitle: string;
};
const HeaderTitle: React.FC<HeaderTitleProps> = (props) => {
  return (
    <div className="header-title">
      <h5>{props.title}</h5>
      <h1>{props.bigTitle}</h1>
      <div className="divider" />
    </div>
  );
};

export default HeaderTitle;
