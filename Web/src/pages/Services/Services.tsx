import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import services from "data/services";
import CardWithImage from "library/CardWithImage/CardWithImage";
import ContactWithUs from "library/ContactWithUs/ContactWithUs";
import HeaderTitle from "library/HeaderTitle/HeaderTitle";
import WorkingSteps from "./components/WorkingSteps";
import "./Services.scss";

const Services = () => {
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
            bigTitle="Services"
            title="Lores ipsum dolor sit"
            description="We provide the necessary services to you."
          />
          <Grid container spacing={2}>
            {services.map((item) => (
              <Grid item xs={6} sm={6} md={3}>
                <CardWithImage
                  image={item.image}
                  name={item.title}
                  description={item.description}
                  icon={item.icon}
                />
              </Grid>
            ))}
          </Grid>
        </div>
        <ContactWithUs />
      </Container>
      <WorkingSteps />
    </div>
  );
};

export default Services;
