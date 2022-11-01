import "./ContentCard.scss";
import React from "react";

interface ContentCardProps {
  header: string;
  firstTitle: string;
  secondTitle: string;
  description?: string;
  icons?: {
    icon: JSX.Element;
    title: string;
    description: string;
  }[];
}
const ContentCard: React.FC<ContentCardProps> = (props) => {
  return (
    <div className="content-card">
      <h5 className="header">{props.header}</h5>
      <div className="content-card-title">
        <h1>{props.firstTitle}</h1>
        <h3>{props.secondTitle}</h3>
      </div>
      <div className="divider" />
      {props.icons && (
        <div className="content-card-icons">
          {props.icons?.map((icon, index) => (
            <div className="content-card-icons" key={index}>
              {icon.icon}
              <div>
                <h5>{icon.title}</h5>
                <p>{icon.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {props.description && <p className="description">{props.description}</p>}
    </div>
  );
};

export default ContentCard;
