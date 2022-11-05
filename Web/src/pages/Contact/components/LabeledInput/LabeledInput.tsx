import { FilledTextFieldProps } from "@mui/material";
import FormikTextInput from "library/Formik/FormikInput";
import LabeledValue from "library/LabeledValue/LabeledValue";
import React from "react";
import "./LabeledInput.scss";

interface ILabeledInput extends FilledTextFieldProps {
  label: string;
}
const LabeledInput: React.FC<ILabeledInput> = (props) => {
  return (
    <div className="labeled-input">
      <LabeledValue title={props.label} />
      <FormikTextInput {...props} variant="filled" />
    </div>
  );
};

export default LabeledInput;
