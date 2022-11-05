import { Formik } from "formik";
import "./Form.scss";
import * as Yup from "yup";
import { useState } from "react";
import { Grid } from "@mui/material";

type EmailData = {
  fullName: string;
  mobileNumber: string;
  emailAddress: string;
  subject: string;
  message: string;
};

interface ILabeledInput {
  name: string;
  label: string;
  value: string;
  colDef: {
    xs: number;
    md: number;
    lg: number;
  };
  isTextArea?: boolean;
}
const Form = () => {
  const [showToast, setShowToast] = useState(false);

  const initialValues = {
    fullName: "",
    mobileNumber: "",
    emailAddress: "",
    subject: "",
    message: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full name field is required."),
    emailAddress: Yup.string()
      .email("Invalid email address")
      .required("Email address field is required."),
    mobileNumber: Yup.string().required("Mobile Number field is required."),
    subject: Yup.string().required("Subject field is required."),
    message: Yup.string().required("Message field is required."),
  });
  return (
    <div className="distributor-form">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(data: EmailData, { setSubmitting }) => {
          setSubmitting(true);
          setTimeout(() => {
            setShowToast(true);
            console.log(data);
            setSubmitting(false);
          }, 5000);
        }}
      >
        {({
          values,
          isSubmitting,
          handleChange,
          handleSubmit,
          handleBlur,
          errors,
        }) => {
          const labeledInput: ILabeledInput[] = [
            {
              name: "fullName",
              label: "Full Name",
              value: values.fullName,
              colDef: {
                xs: 12,
                md: 12,
                lg: 12,
              },
            },
            {
              name: "mobileNumber",
              label: "Mobile Number",
              value: values.mobileNumber,
              colDef: {
                xs: 12,
                md: 6,
                lg: 6,
              },
            },
            {
              name: "emailAddress",
              label: "Email Address",
              value: values.emailAddress,
              colDef: {
                xs: 12,
                md: 6,
                lg: 6,
              },
            },
            {
              name: "subject",
              label: "Subject",
              value: values.subject,
              colDef: {
                xs: 12,
                md: 6,
                lg: 12,
              },
            },
            {
              name: "message",
              label: "Message",
              value: values.message,
              colDef: {
                xs: 12,
                md: 6,
                lg: 12,
              },
              isTextArea: true,
            },
          ];
          return (
            <form onSubmit={handleSubmit}>
              <Grid container>
                {labeledInput.map((data, index) => (
                  <Grid item {...{ ...data.colDef }} key={index}>
                    {/* <LabeledInput
                      name={data.name}
                      label={data.label}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={data.value as any}
                      type={data.isTextArea ? "textarea" : "text"}
                      errors={errors}
                    /> */}
                  </Grid>
                ))}
              </Grid>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Form;
