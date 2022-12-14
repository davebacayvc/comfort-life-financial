import React from "react";
import { Button as MUIButton, ButtonProps } from "@mui/material";
import "./Button.scss";
import classNames from "classnames";

type ButtonDefaultProps = ButtonProps & {
  children: string;
  onClick: () => void;
  className?: string;
};
const Button: React.FC<ButtonDefaultProps> = (props) => {
  const buttonClassnames = classNames("custom-button", props.className, {
    "custom-button-disabled": props.disabled,
  });
  return (
    <MUIButton {...props} className={buttonClassnames}>
      {props.children}
    </MUIButton>
  );
};

export default Button;
