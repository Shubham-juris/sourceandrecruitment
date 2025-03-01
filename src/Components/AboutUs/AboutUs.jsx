import React from "react";
import { Container, Typography, Grid, Paper } from "@mui/material";
import contactImage from "../../assets/AboutUs.jpg";

const AboutUs = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#6d5b4b" }}
      >
        ABOUT US
      </Typography>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ overflow: "hidden", borderRadius: 2 }}>
            <img
              src={contactImage}
              alt="About Us"
              style={{ width: "100%", height: "auto" }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" sx={{ color: "#4a4a4a", lineHeight: 1.7 }}>
          At Source and Recruitment we're dedicated to matching skilled professionals with top administrative positions. With a track record of success spanning several years, we've become a trusted partner for both employers and job seekers in the administrative field.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;