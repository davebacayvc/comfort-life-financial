import React, { useEffect, useState } from "react";
import { useField } from "formik";
import { TextField, FilledTextFieldProps } from "@mui/material";

interface IFormikTextInput extends FilledTextFieldProps {
  isTextArea?: boolean;
}
const FormikTextInput: React.FC<IFormikTextInput> = (props) => {
  const [field, meta, helper] = useField<string>(props.name ?? "");
  const errorText = meta.error && meta.touched ? meta.error : "";
  const [value, setValue] = useState(props.value || "");

  const handleOnChange = (event: any) => {
    const newValue = event.target.value || "";

    setValue(newValue);
    helper.setValue(newValue);
  };

  useEffect(() => {
    const newValue = (props?.value as string) ?? "";
    setValue(newValue);
    helper.setValue(newValue);
  }, [props?.value]);

  return (
    <React.Fragment>
      <TextField
        {...field}
        {...props}
        value={field.value}
        onChange={handleOnChange}
        helperText={errorText}
        error={!!errorText}
        label={props.label}
        variant="filled"
        fullWidth
        className="filled-input"
      />
    </React.Fragment>
  );
};
export default FormikTextInput;
