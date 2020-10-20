import React from "react";
import "../../styles.css";
import { Typography, Grid, Divider } from "@material-ui/core/";

export const About = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className="fontColor">
            <Typography
              paragraph={true}
              variant="h3"
              gutterBottom
              style={{ fontWeight: "bold" }}
            >
              About me
            </Typography>
            <Typography paragraph={true} variant="h6">
              Hi! I'm Nayan Pimpare. I currently work full-time as a Software
              Engineer, I went through a successful career change in 2018. This
              is my personal website where I share everything I know.
            </Typography>
            <Typography paragraph={true} variant="h5">
              Here are a few random things I like:
            </Typography>
            <Typography paragraph={true} variant="h5">
              <ul>
                <li style={{ fontSize: "1.25rem" }}>
                  📚<strong>Books: </strong>
                </li>
                <li style={{ fontSize: "1.25rem" }}>
                  🎵 <strong>Songs: </strong>
                </li>
                <li style={{ fontSize: "1.25rem" }}>
                  🎮 <strong>Games: </strong>
                </li>
              </ul>
            </Typography>
            <Typography paragraph={true} variant="h5" gutterBottom>
              <p style={{ fontWeight: "bold" }}>Get in touch</p>
              <Divider />
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
            <ul className="fontColor">
              <li style={{ fontSize: "1.25rem" }}>
                <strong>Email: </strong>
                <span>
                  <a
                    style={{
                      textDecoration: "none",
                      color: "#5c7cfa",
                      fontWeight: 700,
                    }}
                    // className="fontColor"
                    href="mailto:npimpare@gmail.com"
                  >
                    npimpare@gmail.com
                  </a>
                </span>
              </li>
              <li style={{ fontSize: "1.25rem" }}>
                <strong>GitHub: </strong>
                <a
                  style={{
                    textDecoration: "none",
                    color: "#5c7cfa",
                    fontWeight: 700,
                  }}
                  // className="fontColor"
                  href="https://github.com/nayanpimpare"
                >
                  @nayanpimpare
                </a>
              </li>
              <li style={{ fontSize: "1.25rem" }}>
                <strong>Twitter: </strong>
                <a
                  style={{
                    textDecoration: "none",
                    color: "#5c7cfa",
                    fontWeight: 700,
                  }}
                  href="https://www.google.com/"
                >
                  @nayanpimpare
                </a>
              </li>
            </ul>
          </div>

          <div className="fontColor">
            <Typography paragraph={true} variant="h5" gutterBottom>
              <p style={{ fontWeight: "bold" }}>Timeline</p>
              <Divider />
              <Typography paragraph={true} variant="h6" gutterBottom>
                <ul className="fontColor">
                  <li style={{ fontSize: "1.25rem" }}>
                    1994: Born in Taloda, MH, the elder one boy.
                  </li>
                  <li style={{ fontSize: "1.25rem" }}>
                    2015-2018: Master of computer application from Institute of
                    Management and Career Course’s (IMCC) with 62%.
                  </li>
                  <li style={{ fontSize: "1.25rem" }}>
                    2011-2014: Bachelor of computer application from Modern
                    College, Pune with 53.60%.
                  </li>
                  <li style={{ fontSize: "1.25rem" }}>
                    2010-2011: Pre-University Course (HSC) from New High School,
                    Taloda with 60.07%.
                  </li>
                  <li style={{ fontSize: "1.25rem" }}>
                    2008-2009: School Maharashtra State Board (SSC) From Sheth
                    K. D. High School, Taloda with 65.62%.
                  </li>
                </ul>
              </Typography>
            </Typography>
          </div>
          <div
            style={{
              border: "1px solid",
              height: "auto",
              backgroundColor: "#eee",
              width: "100%",
            }}
          >
            <img src="" alt="My photo" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
