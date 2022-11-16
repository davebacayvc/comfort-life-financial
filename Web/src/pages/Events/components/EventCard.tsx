import classNames from "classnames";
import Button from "library/Button/Button";
import React, { useRef, useState } from "react";
import "./EventCard.scss";
import { Grid } from "@mui/material";
import DrawerBase, { Anchor } from "library/Drawer/Drawer";
import * as Yup from "yup";
import { Formik } from "formik";
import FormikTextInput from "library/Formik/FormikInput";
import Promt from "library/Prompt/Promt";
import Spinner from "library/Spinner/Spinner";
import Toast from "library/Toast/Toast";
import emailjs from "@emailjs/browser";
import { ILabeledInput } from "pages/Contact/components/Form/Form";

export type EventCardVariant = "light" | "dark";

interface IEventCard {
  image: string;
  title: string;
  description: string;
  date: string;
  id: string;
  variant: EventCardVariant;
}
const EventCard: React.FC<IEventCard> = (props) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const eventCardCn = classNames("event-card", {
    "event-card-light": props.variant === "light",
    "event-card-dark": props.variant === "dark",
  });

  const [showToast, setShowToast] = useState(false);
  const initialValues = {
    fullName: "",
    mobileNumber: "",
    emailAddress: "",
    agentNumber: "",
    invitee: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full name field is required."),
    emailAddress: Yup.string()
      .email("Invalid email address")
      .required("Email address field is required."),
    mobileNumber: Yup.string().required("Mobile Number field is required."),
  });

  const form = useRef<any>();

  const emailJSCredsAdmins = {
    service: "service_rs7qsgl",
    template: "template_86hqhae",
    publicKey: "HoGq2N35u7XA9JbtF",
  };

  const emailJSCredsUsers = {
    service: "service_0cqfh79",
    template: "template_86hqhae",
    publicKey: "HoGq2N35u7XA9JbtF",
  };
  return (
    <React.Fragment>
      <div
        style={{ backgroundImage: `url(${props.image})` }}
        className={eventCardCn}
      >
        <div className="event-card-content">
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <Button onClick={() => setShowDrawer(true)}>BOOK NOW</Button>
        </div>
      </div>

      <DrawerBase
        anchor={Anchor.Right}
        onClose={() => setShowDrawer(false)}
        open={showDrawer}
        title="BOOK EVENT"
        footer={
          <div>
            <Button onClick={() => console.log("test")}>CANCEL</Button>
            <Button onClick={() => console.log("test")}>BOOK NOW</Button>
          </div>
        }
      >
        <div>
          <img src="/assets/others/event-1.png" alt="event-1" width="100%" />
          <div className="event-captions">
            <h2>Christmas Party</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut.
            </p>
          </div>
          <div className="form-instructions">
            <h2>FILLUP FORM</h2>
            <p>(*) fields are required.</p>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(data: any, { setSubmitting, resetForm }) => {
              setSubmitting(true);
              emailjs
                .sendForm(
                  emailJSCredsAdmins.service,
                  emailJSCredsAdmins.template,
                  form.current,
                  emailJSCredsAdmins.publicKey
                )
                .then(
                  (result) => {
                    console.log(result.text);
                  },
                  (error) => {
                    console.log(error.text);
                    setSubmitting(false);
                  }
                )
                .then((result) => {
                  emailjs
                    .sendForm(
                      emailJSCredsUsers.service,
                      "template_xswefxu",
                      form.current,
                      emailJSCredsUsers.publicKey
                    )
                    .then(
                      (result) => {
                        console.log(result.text);
                        console.log(result);
                        console.log(form.current);
                        setSubmitting(false);
                        setShowToast(true);
                        resetForm();
                      },
                      (error) => {
                        console.log(error.text);
                        setSubmitting(false);
                      }
                    );
                });
            }}
          >
            {({
              values,
              handleSubmit,
              dirty,
              resetForm,
              isSubmitting,
              errors,
            }) => {
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
                  label: "Agent Number",
                  value: values.agentNumber,
                  colDef: {
                    xs: 12,
                    md: 6,
                    lg: 12,
                  },
                },
                {
                  name: "invitee",
                  label: "Who Invite You?",
                  value: values.invitee,
                  colDef: {
                    xs: 12,
                    md: 6,
                    lg: 12,
                  },
                  isTextArea: true,
                },
              ];
              return (
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
                        />
                      </Grid>
                    ))}
                  </Grid>
                  <Promt isDirty={dirty} />
                  <Spinner isVisible={isSubmitting} />
                  <Toast setter={setShowToast} isVisible={showToast} />
                </form>
              );
            }}
          </Formik>
        </div>
      </DrawerBase>
    </React.Fragment>
  );
};

export default EventCard;
