import { Grid } from "@mui/material";
import React, { Dispatch, SetStateAction, useRef } from "react";
import "./EventForm.scss";
import * as Yup from "yup";
import { Formik } from "formik";
import FormikTextInput from "library/Formik/FormikInput";
import Promt from "library/Prompt/Promt";
import Spinner from "library/Spinner/Spinner";
import { ILabeledInput } from "pages/Contact/components/Form/Form";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import generateRandomChars from "helpers/generateRandomChars";
import { MAIN_LOCALHOST } from "constants/constants";
import paths from "constants/routes";
import Button from "library/Button/Button";

type EventValues = {
  fullName: string;
  mobileNumber: string;
  emailAddress: string;
  agentNumber: string;
  invitee: string;
  remarks: string;
};

type EventFormProps = {
  setClipboardValue: Dispatch<SetStateAction<any>>;
  setShowDialog: Dispatch<SetStateAction<any>>;
  image: string;
  title: string;
  description: string;
  date: string | Date;
  id: string;
};
const EventForm: React.FC<EventFormProps> = (props) => {
  const form = useRef<any>();
  const initialValues: EventValues = {
    fullName: "",
    mobileNumber: "",
    emailAddress: "",
    agentNumber: "",
    invitee: "",
    remarks: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full name field is required."),
    emailAddress: Yup.string()
      .email("Invalid email address")
      .required("Email address field is required."),
    mobileNumber: Yup.string().required("Mobile Number field is required."),
  });
  return (
    <div className="event-form-container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(data: EventValues, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          setTimeout(() => {
            console.log(data);
            setSubmitting(false);
            resetForm();
            props.setClipboardValue(
              `${MAIN_LOCALHOST}${paths.event_invites.replace(
                ":id",
                props.id
              )}?ref=${generateRandomChars(7)}`
            );
            props.setShowDialog(true);
          }, 3000);
        }}
      >
        {({ values, handleSubmit, dirty, isSubmitting }) => {
          const labeledInput: ILabeledInput[] = [
            {
              name: "fullName",
              label: "Full Name *",
              value: values.fullName,
              colDef: {
                xs: 12,
                md: 12,
                lg: 12,
              },
            },
            {
              name: "mobileNumber",
              label: "Mobile Number *",
              value: values.mobileNumber,
              colDef: {
                xs: 12,
                md: 6,
                lg: 6,
              },
            },
            {
              name: "emailAddress",
              label: "Email Address *",
              value: values.emailAddress,
              colDef: {
                xs: 12,
                md: 6,
                lg: 6,
              },
            },
            {
              name: "agentNumber",
              label: "Agent ID Number",
              value: values.agentNumber,
              colDef: {
                xs: 12,
                md: 6,
                lg: 12,
              },
            },
            {
              name: "invitee",
              label: "Who Invited You?",
              value: values.invitee,
              colDef: {
                xs: 12,
                md: 6,
                lg: 12,
              },
            },
            {
              name: "remarks",
              label: "Remarks",
              value: values.remarks,
              colDef: {
                xs: 12,
                md: 6,
                lg: 12,
              },
              isTextArea: true,
            },
          ];

          const onSubmitHandler = () => {
            handleSubmit();
          };
          return (
            <div>
              <div className="form-instructions">
                <h2>FILLUP FORM</h2>
                <p>(*) fields are required.</p>
              </div>

              <form onSubmit={handleSubmit} className="form" ref={form}>
                <Grid container spacing={2}>
                  {labeledInput.map((data, index) => (
                    <Grid item {...{ ...data.colDef }} key={index}>
                      <FormikTextInput
                        label={data.label}
                        variant="filled"
                        fullWidth
                        className="filled-input"
                        name={data.name}
                        isTextArea={data.isTextArea}
                      />
                    </Grid>
                  ))}
                </Grid>
                <Promt isDirty={dirty} />
                <Spinner isVisible={isSubmitting} />
                <Button variation="dark" type="submit">
                  Submit
                </Button>
              </form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default EventForm;
