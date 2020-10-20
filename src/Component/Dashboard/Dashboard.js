import React from "react";
import "../../styles.css";
import { Grid, Typography, Button } from "@material-ui/core/";
import GetAppIcon from "@material-ui/icons/GetApp";

export const Dashboard = () => {
  return (
    <div>
      <div>
        <Grid container spacing={3}>
          <Grid item xs={7}>
            <div>
              <div>
                <div className="seftIntro">
                  <Typography
                    className="seftIntro"
                    align="left"
                    paragraph={true}
                    variant="h3"
                    gutterBottom
                  >
                    Hey! I'm Nayan Pimpare. <br />
                    I'm a Software Developer.
                  </Typography>
                </div>
                <Typography
                  align="left"
                  paragraph={true}
                  variant="h5"
                  gutterBottom
                  style={{
                    color: "#868e96",
                    fontWeight: 400,
                    marginBottom: "2.5rem",
                    lineHeight: 1.6,
                  }}
                >
                  This website is my <span>🌱</span> digital garden—a compendium
                  of the things I have learned and created over the years, and
                  anything else I want to write about. You can read my blog,
                  view my guides & tutorials, or learn more about me.
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={5}>
            <div className="marginTop-10">
              <div>
                <img
                  className="dashboardImage"
                  src="/Photos/ProfilePhoto.png"
                  alt="ProfilePhoto"
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div style={{ marginTop: "-11%" }}>
        <Grid container spacing={3}>
          <Grid xs={12}>
            <Button
              variant="contained"
              size="large"
              color="primary"
              style={{ marginRight: "1%" }}
            >
              <GetAppIcon />
              <a
                href="/Resume/Nayan_Resume.pdf"
                target="_blank"
                className="removeTextDecoration"
              >
                Download Resume
              </a>
            </Button>
            <Button variant="contained" size="large" color="primary">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfJFbS-9b1MJL4LBA_QtIIl89xE1IKjBd8VxkieLsFeIQnQiQ/viewform?usp=sf_link"
                target="_blank"
                className="removeTextDecoration"
              >
                Give Feedback
              </a>
            </Button>
          </Grid>
          {/* <Grid xs={7}></Grid> */}
        </Grid>
      </div>
    </div>
  );
};
