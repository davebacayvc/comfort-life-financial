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

  const clonedProps = {
    ...props,
  };

  delete clonedProps.isTextArea;
  return (
    <React.Fragment>
      <TextField
        {...field}
        {...clonedProps}
        value={field.value}
        onChange={handleOnChange}
        helperText={errorText}
        error={!!errorText}
        label={props.label}
        variant="filled"
        fullWidth
        className="filled-input"
        multiline={props.isTextArea}
        rows={props.isTextArea ? 4 : 0}
      />
    </React.Fragment>
  );
};
export default FormikTextInput;
