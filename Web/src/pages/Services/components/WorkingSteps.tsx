import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import "./WorkingSteps.scss";

const workingSteps = [
  {
    title: "01",
    subTitle: "Pick a Date",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
  },
  {
    title: "02",
    subTitle: "Select a Time",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
  },
  {
    title: "03",
    subTitle: "Submit Appointment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
  },
  {
    title: "04",
    subTitle: "Get in touch!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
  },
];
const WorkingSteps = () => {
  return (
    <div
      className="working-steps"
      style={{
        backgroundImage: `url("https://demo.casethemes.net/itfirm/wp-content/uploads/2021/12/h5-bg-section-2.jpg")`,
      }}
    >
      <Container>
        <div className="title">
          <h5>Working Steps</h5>
          <h1>
            Some <span>easy steps</span> to process!
          </h1>
        </div>

        <Grid container spacing={2} className="steps">
          {workingSteps.map((item) => (
            <Grid item sm={6} md={3}>
              <h1>{item.title}</h1>
              <h5>{item.subTitle}</h5>
              <p>{item.description}</p>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default WorkingSteps;
