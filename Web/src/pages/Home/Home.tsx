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
import Button from "library/Button/Button";
import { PopupModal, useCalendlyEventListener } from "react-calendly";
import useResponsive from "hooks/useResponsive";

const Home: React.FC = () => {
  const [services, setServices] = useState(servicesData);
  const [calendlyModal, setCalendlyModal] = useState(false);
  const isMobileMode = useResponsive("mobile");

  const servicesProps = {
    header: "30 YEARS OF EXPERIENCE",
    firstTitle: "Preparing For Your Success",
    secondTitle: "Provide Best Finance Solutions.",
    description:
      "We are privileged to work with hundred future-thinking awesome businesses including many of the world’s top hardware and get IT service for your technology.",
    icons: [
      {
        icon: <img src="/assets/icons/thinking-icon.png" />,
        title: "Warranty Management",
        description:
          "Morem Ipsum is simply dummy text of the printing and presetting found it agency business.",
      },
      {
        icon: <img src="/assets/icons/thinking-icon.png" />,
        title: "Warranty Management",
        description:
          "Morem Ipsum is simply dummy text of the printing and presetting found it agency business.",
      },
      {
        icon: <img src="/assets/icons/thinking-icon.png" />,
        title: "Warranty Management",
        description:
          "Morem Ipsum is simply dummy text of the printing and presetting found it agency business.",
      },
      {
        icon: <img src="/assets/icons/thinking-icon.png" />,
        title: "Warranty Management",
        description:
          "Morem Ipsum is simply dummy text of the printing and presetting found it agency business.",
      },
      {
        icon: <img src="/assets/icons/thinking-icon.png" />,
        title: "Warranty Management",
        description:
          "Morem Ipsum is simply dummy text of the printing and presetting found it agency business.",
      },
    ],
  };

  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: () => console.log("test"),
  });

  return (
    <div className="home-container">
      <div className="welcome-section">
        <AwesomeSlider bullets={false} animation="cubeAnimation">
          <div>
            {!isMobileMode && (
              <div className="slider-captions">
                <h5>Welcome to Comfort Life Financial</h5>
                <h1>We are creative financial for your life.</h1>
              </div>
            )}
            <img src="https://techno.dreamitsolution.net/wp-content/uploads/2020/10/slider2.png" />
          </div>
          <div>
            {!isMobileMode && (
              <div className="slider-captions">
                <h5>Test Welcome to Comfort Life Financial</h5>
                <h1>We are creative financial for your life.</h1>
              </div>
            )}
            <img src="https://techno.dreamitsolution.net/wp-content/uploads/2020/10/slider2.png" />
          </div>
        </AwesomeSlider>
      </div>
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
              <ContentCard {...servicesProps} />
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
                  variant="outlined"
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
      <div className="stragies">
        <Container>
          <Grid container spacing={2} className="endorsement-container">
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <ContentCard
                header="STRATEGIES"
                firstTitle="Wealth Building Strategy"
                secondTitle="Be your own banker to build wealth."
                description="A long-term asset accumulation strategy should have the potential to outpace inflation and take into consideration how different products and account types are taxed. When determining the best strategy for you, it's important to determine how long you may live in retirement and how much it will cost to live comfortably during those years."
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <img
                src="/assets/others/strategies.png"
                alt="test"
                className="endorsement-image"
              />
            </Grid>
          </Grid>
        </Container>
      </div>
      <div
        className="contact"
        style={{ backgroundImage: `url("/assets/others/bg.png")` }}
      >
        <Container>
          <HeaderTitle
            title="+880 013 143 206"
            bigTitle="To Make Requests For The Further Information"
            hasBorder={false}
          />
          <Button onClick={() => setCalendlyModal(true)}>Contact Us</Button>
          <PopupModal
            url="https://calendly.com/dave-bacay-vc/call-us-testing"
            onModalClose={() => setCalendlyModal(false)}
            open={calendlyModal}
            /*
             * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
             * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
             */
            rootElement={document.getElementById("root") as any}
          />
        </Container>
      </div>
    </div>
  );
};

export default Home;
