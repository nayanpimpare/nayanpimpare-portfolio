import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Paper,
  Tabs,
  Tab,
  Typography,
  Box,
  Grid,
  GridList,
} from "@material-ui/core/";
import SwipeableViews from "react-swipeable-views";
import ProjectCard from "../ProjectCard/ProjectCard";

export const Project = () => {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div>
      <Paper>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="React" />
          <Tab label="Redux" />
          <Tab label="Hooks" />
        </Tabs>
      </Paper>
      <Grid>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div>
              <Grid container>
                <Grid xs={12}>
                  <span className="card">
                    <ProjectCard
                      image="" //"../Photos/WatherAppPoster.png"
                      heading="Weather Application"
                      content="You can find your nearest weather detail on your mobile or desktop"
                      projectLink="https://www.google.com/"
                    />
                  </span>
                  <span className="card">
                    <ProjectCard
                      image=""
                      heading="Weather Application"
                      content="You can find your nearest weather detail on your mobile or desktop"
                      // projectLink="https://www.google.com/"
                    />
                  </span>
                </Grid>
              </Grid>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <ProjectCard />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <ProjectCard
              image=""
              heading="Hooks Application"
              content="Simple counter application using new react (Hooks)"
              // projectLink="https://www.google.com/"
            />
          </TabPanel>
        </SwipeableViews>
      </Grid>
    </div>
  );
};

export const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};
