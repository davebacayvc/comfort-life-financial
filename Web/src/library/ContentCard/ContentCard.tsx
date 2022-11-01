import "./ContentCard.scss";
import React from "react";

interface ContentCardProps {
  header?: string;
  firstTitle?: string;
  secondTitle?: string;
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
      <div className="divider"/>
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
    </div>
  );
};

ContentCard.defaultProps = {
  header: "30 YEARS OF EXPERIENCE",
  firstTitle: "Preparing For Your Success",
  secondTitle: "Provide Best Finance Solutions.",
  description:
    "We are privileged to work with hundred future-thinking awesome businesses including many of the world’s top hardware and get IT service for your technology.",
  icons: [
    {
      icon: <img src="/assets/icons/thinking-icon.png" />,
      title: "Warranty Management",
      description:
        "Morem Ipsum is simply dummy text of the printing and presetting found it agency business.",
    },
    {
      icon: <img src="/assets/icons/thinking-icon.png" />,
      title: "Warranty Management",
      description:
        "Morem Ipsum is simply dummy text of the printing and presetting found it agency business.",
    },
    {
      icon: <img src="/assets/icons/thinking-icon.png" />,
      title: "Warranty Management",
      description:
        "Morem Ipsum is simply dummy text of the printing and presetting found it agency business.",
    },
    {
      icon: <img src="/assets/icons/thinking-icon.png" />,
      title: "Warranty Management",
      description:
        "Morem Ipsum is simply dummy text of the printing and presetting found it agency business.",
    },
    {
      icon: <img src="/assets/icons/thinking-icon.png" />,
      title: "Warranty Management",
      description:
        "Morem Ipsum is simply dummy text of the printing and presetting found it agency business.",
    },
  ],
};

export default ContentCard;
