import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "./Home.scss";
import { Grid } from "@mui/material";
import Card from "library/Card/Card";
import { Container } from "@mui/system";
import servicesData from "data/services";
import { useState } from "react";
import ContentCard, { ContentCardProps } from "library/ContentCard/ContentCard";
import Video from "./components/Video/Video";
import HeaderTitle from "./components/HeaderTitle/HeaderTitle";
import Button from "library/Button/Button";
import {
  InlineWidget,
  PopupModal,
  useCalendlyEventListener,
} from "react-calendly";
import useResponsive from "hooks/useResponsive";
import Wrapper from "./components/Wrapper/Wrapper";
import React from "react";
import classNames from "classnames";
import Title from "pages/Admin/components/Title/Title";
import CardNumbers from "library/CardNumbers/CardNumbers";
import { formatDate } from "helpers/dateFormatter";

const Home: React.FC = () => {
  const [services] = useState(servicesData);
  const [calendlyModal, setCalendlyModal] = useState(false);
  const isMobileMode = useResponsive("mobile");

  const cardContainerClassnames = classNames("card-container", {
    "card-container-mobile": isMobileMode,
  });

  const servicesProps = {
    isMobileMode,
    header: "30 YEARS OF EXPERIENCE",
    firstTitle: "Preparing For Your Success",
    secondTitle: "Provide Best Finance Solutions.",
    description:
      "We are privileged to work with hundred future-thinking awesome businesses including many of the world’s top hardware and get IT service for your technology.",
    icons: [
      {
        icon: (
          <img src="/assets/icons/thinking-icon.png" alt="description-icon" />
        ),
        title: "Warranty Management",
        description:
          "Morem Ipsum is simply dummy text of the printing and presetting found it agency business.",
      },
      {
        icon: (
          <img src="/assets/icons/thinking-icon.png" alt="description-icon" />
        ),
        title: "Warranty Management",
        description:
          "Morem Ipsum is simply dummy text of the printing and presetting found it agency business.",
      },
      {
        icon: (
          <img src="/assets/icons/thinking-icon.png" alt="description-icon" />
        ),
        title: "Warranty Management",
        description:
          "Morem Ipsum is simply dummy text of the printing and presetting found it agency business.",
      },
      {
        icon: (
          <img src="/assets/icons/thinking-icon.png" alt="description-icon" />
        ),
        title: "Warranty Management",
        description:
          "Morem Ipsum is simply dummy text of the printing and presetting found it agency business.",
      },
      {
        icon: (
          <img src="/assets/icons/thinking-icon.png" alt="description-icon" />
        ),
        title: "Warranty Management",
        description:
          "Morem Ipsum is simply dummy text of the printing and presetting found it agency business.",
      },
    ],
  };

  const appointmentProps: ContentCardProps = {
    header: "SCHEDULE A APPOINTMENT",
    firstTitle: "Lorem ipsum dolor sit amet",
    secondTitle: "Consectetur adipiscing elit",
    isMobileMode: isMobileMode,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    icons: [
      {
        icon: <img src="/assets/icons/clock.png" alt="description-icon" />,
        title: "Warranty Management",
        description:
          "Morem Ipsum is simply dummy text of the printing and presetting found it agency business.",
      },
      {
        icon: <img src="/assets/icons/clock.png" alt="description-icon" />,
        title: "Warranty Management",
        description:
          "Morem Ipsum is simply dummy text of the printing and presetting found it agency business.",
      },
      {
        icon: <img src="/assets/icons/clock.png" alt="description-icon" />,
        title: "Warranty Management",
        description:
          "Morem Ipsum is simply dummy text of the printing and presetting found it agency business.",
      },
      {
        icon: <img src="/assets/icons/clock.png" alt="description-icon" />,
        title: "Warranty Management",
        description:
          "Morem Ipsum is simply dummy text of the printing and presetting found it agency business.",
      },
      {
        icon: <img src="/assets/icons/clock.png" alt="description-icon" />,
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
        <Container className="welcome-section-container">
          <div className="welcome-section-image">
            <img src="/assets/others/happy-fam.png" alt="happy family" />
          </div>
          <div className="welcome-section-captions">
            <h2>We are CFS</h2>
            <p>
              CFS helps individuals and families build a comfortable future by
              advocating Financial Awareness and providing Risk Management
              Solutions.
            </p>
            <p>CFS offers Life Insurance and Annuities.</p>
          </div>
        </Container>
      </div>
      <Wrapper className={cardContainerClassnames}>
        <Container>
          <Grid container spacing={2}>
            {services.slice(0, 4).map((service) => (
              <Grid item xs={6} sm={6} md={3} lg={3} key={service.id}>
                <Card
                  isMobileMode={isMobileMode}
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
      </Wrapper>
      <Wrapper className="endorsement">
        <Container>
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
        </Container>
      </Wrapper>
      <Wrapper className="services">
        <React.Fragment>
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
                    isMobileMode={isMobileMode}
                    content={{
                      front: {
                        title: service.title,
                        icon: (
                          <img
                            src="/assets/icons/money-plant-white.png"
                            width={70}
                            alt="services-plant"
                          />
                        ),
                      },
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
        </React.Fragment>
      </Wrapper>
      <Wrapper className="stragies">
        <Container>
          <Grid container spacing={2} className="endorsement-container">
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <ContentCard
                header="STRATEGIES"
                firstTitle="Wealth Building Strategy"
                secondTitle="Be your own banker to build wealth."
                description="A long-term asset accumulation strategy should have the potential to outpace inflation and take into consideration how different products and account types are taxed. When determining the best strategy for you, it's important to determine how long you may live in retirement and how much it will cost to live comfortably during those years."
                isMobileMode={isMobileMode}
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
      </Wrapper>
      <Wrapper
        className="solutions"
        style={{
          backgroundImage: `url("https://techno.dreamitsolution.net/wp-content/uploads/2020/12/slider05-1.jpg")`,
        }}
      >
        <Container>
          <HeaderTitle
            title="Solutions"
            bigTitle="Let's get started"
            hasBorder={true}
          />
          <p className="description">
            There's a lot to know, and we have the information to help you make
            informed decision about your financial future. Let's take a closer
            look at what it means to have a annuity or life insurance, and why
            both are important.
          </p>
          <Grid container spacing={2} className="solution-grid">
            <Grid item xs={12} lg={6}>
              <div className="solution-item">
                <h2>What is Life Insurance?</h2>
                <img src="https://picsum.photos/536/354" />
              </div>
            </Grid>
            <Grid item xs={12} lg={6}></Grid>
            <Grid item xs={12} lg={6}>
              <div className="solution-item">
                <h2>What is an Annuity?</h2>
                <img src="https://picsum.photos/536/354" />
              </div>
            </Grid>
            <Grid item xs={12} lg={6}></Grid>
          </Grid>
        </Container>
      </Wrapper>
      <Wrapper>
        <React.Fragment>
          <Container>
            <Grid container spacing={2} className="appointment-container">
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <ContentCard {...appointmentProps} />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <InlineWidget
                  url="https://calendly.com/dave-bacay-vc/call-us-testing"
                  styles={{
                    height: "800px",
                    width: "100%",
                    marginBottom: "-5rem",
                  }}
                />
              </Grid>
            </Grid>
          </Container>
        </React.Fragment>
      </Wrapper>
    </div>
  );
};

export default Home;
