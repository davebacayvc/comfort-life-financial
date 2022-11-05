import { Container, Grid } from "@mui/material";
import Banner from "library/Banner/Banner";
import Inquiries from "./components/Inquiries/Inquiries";
import "./Contact.scss";

const Contact = () => {
  return (
    <div>
      <Banner
        bigTitle="Contact Us"
        title="Share your suggestions and feedback with us."
        hasBorder={true}
      />
      <Container>
        <Grid container>
          <Grid xs={12} md={8} lg={8}>
            asd
          </Grid>
          <Grid xs={12} md={4} lg={4}>
            <Inquiries />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Contact;
