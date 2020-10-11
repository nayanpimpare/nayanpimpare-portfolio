import React from "react";
import "../../styles.css";
import { Typography, Grid } from "@material-ui/core/";

export const About = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <div className="fontColor">
            <Typography
              align="center"
              paragraph={true}
              variant="h3"
              gutterBottom
            >
              About Me
            </Typography>
            <Typography paragraph={true} variant="h6">
              Hi! I'm Nayan Pimpare. I currently work full-time as a Software
              Engineer, I went through a successful career change in 2018. This
              is my personal website where I share everything I know.
            </Typography>
            <Typography paragraph={true} variant="h5">
              Here are a few random things I like:
              <ul>
                <li>
                  <span>
                    📚 <strong>Books: </strong>
                  </span>
                </li>
                <li>
                  <span>
                    🎵 <strong>Songs: </strong>
                  </span>
                </li>
                <li>
                  <span>
                    🎮 <strong>Games: </strong>
                    Couter Strike, NFS
                  </span>
                </li>
              </ul>
            </Typography>
            <Typography paragraph={true} variant="h5" gutterBottom>
              <p style={{ fontWeight: "bold" }}>Get in touch</p>
              <Typography paragraph={true} variant="h6" gutterBottom>
                I hope you love the site, and if there's anything you want to
                talk about with me feel free to drop me a line by email. I'm
                happy to hear your comments, feedback, suggestions, or just say
                hi! (Emails regarding ads, sponsored posts, link-sharing, etc.
                will be ignored.)
              </Typography>
            </Typography>
          </div>
          <div>
            <Typography variant="h4">
              <a
                style={{
                  textDecoration: "none",
                  background: "linear-gradient(transparent 70%,#bac8ff 0)"
                }}
                className="fontColor"
                href="mailto:npimpare@gmail.com"
              >
                npimpare@gmail.com
              </a>
            </Typography>
            <Typography variant="h5" className="fontColor">
              +91-9595795354
            </Typography>
            <ul className="fontColor">
              <li>
                <strong>🐙 GitHub: </strong>
                <a
                  style={{
                    textDecoration: "none",
                    background: "linear-gradient(transparent 70%,#bac8ff 0)"
                  }}
                  className="fontColor"
                  href="https://github.com/nayanpimpare"
                >
                  @nayanpimpare
                </a>
              </li>
              <li>
                <strong>🐦 Twitter: </strong>
                <a
                  style={{
                    textDecoration: "none",
                    background: "linear-gradient(transparent 70%,#bac8ff 0)"
                  }}
                  className="fontColor"
                  href="https://www.google.com/"
                >
                  @nayanpimpare
                </a>
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  );
};
