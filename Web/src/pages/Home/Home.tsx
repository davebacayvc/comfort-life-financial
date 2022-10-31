import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "./Home.scss";
import { Grid } from "@mui/material";
import Cards from "library/Cards/Card";
import { Container } from "@mui/system";
import PublicIcon from "@mui/icons-material/Public";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <AwesomeSlider bullets={false} animation="cubeAnimation">
        <div data-src="https://techno.dreamitsolution.net/wp-content/uploads/2020/10/slider2.png" />
      </AwesomeSlider>
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={6} md={3} lg={3}>
            <Cards>
              <PublicIcon />
            </Cards>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3}>
            <Cards>
              <span>test</span>
            </Cards>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3}>
            <Cards>
              <span>test</span>
            </Cards>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3}>
            <Cards>
              <span>test</span>
            </Cards>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
