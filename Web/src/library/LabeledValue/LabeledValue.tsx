import classNames from "classnames";
import React from "react";
import "./LabeledValue.scss";

interface ILabeledValue {
  title: string;
  subTitle?: string;
  isVisible?: boolean;
  variant?: "light" | "bold";
}

const LabeledValue: React.FC<ILabeledValue> = (props) => {
  const labelValueClassnames = classNames("label-value", {
    "label-value-bold": props.variant === "bold",
    "label-value-light": props.variant === "light",
  });
  if (props.isVisible) {
    return (
      <div className={labelValueClassnames}>
        <h5>{props.title}</h5>
        <p>{props.subTitle}</p>
      </div>
    );
  }

  return <React.Fragment />;
};

LabeledValue.defaultProps = {
  isVisible: true,
  variant: "light",
};

export default LabeledValue;
