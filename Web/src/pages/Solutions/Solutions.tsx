import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import ContactWithUs from "library/ContactWithUs/ContactWithUs";
import HeaderTitle from "library/HeaderTitle/HeaderTitle";
import React from "react";
import WorkingSteps from "./components/WorkingSteps";
import "./Solutions.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LifeInsurance from "./components/LifeInsurance";
import Anuality from "./components/Anuality";

const workingSteps = [
  {
    title: "01",
    subTitle: "Pick a Date",
    description: "",
  },
  {
    title: "02",
    subTitle: "Select a Time",
    description: "",
  },
  {
    title: "03",
    subTitle: "Submit Appointment",
    description: "",
  },
  {
    title: "04",
    subTitle: "Get in touch!",
    description: "",
  },
];

const Solutions = () => {
  return (
    <div className="services-content">
      <div className="welcome-section">
        <img
          src="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/12/h5-bg-slider1.jpg"
          alt="welcome-bg"
        />
        <div className="captions">
          <h5>Choose The Best Financial Service Company in the World.</h5>
          <h1>Lorem ipsum dolor sit amet, consectetur.</h1>
        </div>
      </div>
      <Container>
        <div className="services-card-section">
          <HeaderTitle
            bigTitle="Solutions"
            title="Lores ipsum dolor sit"
            description="We provide the necessary services to you."
          />
        </div>
        <div className="solutions">
          <div className="solutions-item">
            <div className="solution-header">
              <h2>Life Insurance</h2>
              <p>
                Life insurance is, at its most basic level, a commitment made
                between an insurance provider and the policyholder. When the
                individual whose life is being insured passes away, the
                insurance company will pay the person (beneficiary) you specify
                a set amount (death benefit) if you pay a specific amount
                (premium) to the insurance company.
              </p>
            </div>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>More Information</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <LifeInsurance />
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="solutions-item">
            <div className="solution-header">
              <h2>Annualities</h2>
              <p>
                An annuity is a contract with an insurance provider that calls
                for regular payments to be made by the insurer to you, either
                now or in the future. Either a single payment or a series of
                payments are required to purchase an annuity.
              </p>
            </div>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>More Information</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Anuality />
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <ContactWithUs />
      </Container>
      <WorkingSteps
        backgroundImage="/assets/others/event-1.png"
        bigTitle={
          <React.Fragment>
            Easy steps to <span>comfortable future!</span>
          </React.Fragment>
        }
        title="WORKING STEPS"
        steps={workingSteps}
      />
    </div>
  );
};

export default Solutions;
