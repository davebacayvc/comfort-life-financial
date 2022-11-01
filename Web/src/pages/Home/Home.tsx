import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "./Home.scss";
import { Grid } from "@mui/material";
import Card from "library/Card/Card";
import { Container } from "@mui/system";
import servicesData from "data/services";
import { useState } from "react";
import ContentCard from "library/ContentCard/ContentCard";
import Video from "./components/Video/Video";
import HeaderTitle from "./components/HeaderTitle/HeaderTitle";

const Home: React.FC = () => {
  const [services, setServices] = useState(servicesData);

  return (
    <div className="home-container">
      <AwesomeSlider bullets={false} animation="cubeAnimation">
        <div data-src="https://techno.dreamitsolution.net/wp-content/uploads/2020/10/slider2.png" />
      </AwesomeSlider>
      <Container>
        <div className="card-container">
          <Grid container spacing={2}>
            {services.slice(0, 4).map((service) => (
              <Grid item xs={6} sm={6} md={3} lg={3} key={service.id}>
                <Card
                  content={{
                    front: { title: service.title, icon: service.icon },
                    back: {
                      title: service.title,
                      description: service.description,
                      icon: service.icon,
                    },
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </div>
        <div className="endorsement">
          <Grid container spacing={2} className="endorsement-container">
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <img
                src="https://techno.dreamitsolution.net/wp-content/uploads/2020/10/about-img.png"
                alt="test"
                className="endorsement-image"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <ContentCard />
            </Grid>
          </Grid>
        </div>
      </Container>
      <div className="services">
        <Video />
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <HeaderTitle
                title="Services"
                bigTitle="Provide Exclusive Services"
              />
            </Grid>
            {services.slice(0, 8).map((service) => (
              <Grid item xs={6} sm={6} md={3} lg={3} key={service.id}>
                <Card
                  content={{
                    front: { title: service.title, icon: service.icon },
                    back: {
                      title: service.title,
                      description: service.description,
                      icon: service.icon,
                    },
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Home;
