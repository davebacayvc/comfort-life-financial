import React from "react";
import { Button as MUIButton } from "@mui/material";
import "./Button.scss";
import classNames from "classnames";

type ButtonProps = {
  children: string;
  onClick: () => void;
  className?: string;
};
const Button: React.FC<ButtonProps> = (props) => {
  const buttonClassnames = classNames("custom-button", props.className);
  return (
    <MUIButton className={buttonClassnames} onClick={props.onClick}>
      {props.children}
    </MUIButton>
  );
};

export default Button;
