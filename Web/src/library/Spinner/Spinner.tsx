import { CircularProgress, CircularProgressProps } from "@mui/material";
import React from "react";
import "./Spinner.scss";

interface ISpinner {
  isVisible: boolean;
  defaultProps?: CircularProgressProps;
}
const Spinner: React.FC<ISpinner> = (props) => {
  if (props.isVisible) {
    return (
      <div className="spinner-container">
        <CircularProgress {...props.defaultProps} />
      </div>
    );
  }

  return <React.Fragment />;
};

Spinner.defaultProps = {
  isVisible: false,
};

export default Spinner;
