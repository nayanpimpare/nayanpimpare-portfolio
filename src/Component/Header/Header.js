import React from "react";
import { AppBar, Toolbar, Typography, Button, Grid } from "@material-ui/core/";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div style={{ paddingBottom: "6%" }}>
      <Grid container spacing={3}>
        <AppBar position="static">
          <Toolbar>
            {/* <Grid item xs={1}></Grid> */}
            <Grid item xs={5}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Typography
                  style={{
                    textAlign: "left",
                    color: "white"
                  }}
                  variant="h6"
                >
                  <span>
                    <HomeRoundedIcon fontSize="large" viewBox="2 -3 24 20" />
                    Nayan Pimpare
                  </span>
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={7}>
              <div style={{ textAlign: "right" }}>
                <Link
                  to="/about"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <Button color="inherit">About</Button>
                </Link>
                <Link
                  to="/project"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <Button color="inherit">Project</Button>
                </Link>
                <Link
                  to="/contact"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <Button color="inherit">Contact</Button>
                </Link>
              </div>
            </Grid>
            {/* <Grid item xs={1}></Grid> */}
          </Toolbar>
        </AppBar>
      </Grid>
    </div>
  );
};
