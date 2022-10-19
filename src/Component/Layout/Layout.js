import React from "react";
import { Dashboard } from "../Dashboard/Dashboard";
import { Header } from "../Header/Header";
import { About } from "../About/About";
import { Project } from "../Project/Project";
import { Contact } from "../Contact/Contact";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Grid } from "@material-ui/core/";

export const Layout = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <marquee>Website is under development..!!!</marquee>
        <Grid container spacing={3}>
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>
            <Switch>
              <Route exact path="/">
                <Dashboard />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/project">
                <Project />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </div>
    </BrowserRouter>
  );
};
