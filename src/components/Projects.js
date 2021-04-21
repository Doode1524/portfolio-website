import React from "react";
import Videos from "./Videos";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function createData(title, date, github, youtube, description) {
  return { title, date, github, youtube, description };
}

const projects = [
  createData(
    "React BlackJack",
    "April 2021",
    "https://github.com/Doode1524/ReactJack-frontend",
    "https://www.youtube.com/embed/NPp_AITIQ-M",
    "A casino style BlackJack game built using a Rails API backend, React/Redux frontend, and a 3rd party API"
  ),
  createData(
    "JavaScript Chess",
    "March 2021",
    "https://github.com/Doode1524/JS-Chess",
    "https://www.youtube.com/embed/qFeGooqH4KU",
    "A full CRUD JS-frontend Chess game where you can track games and user wins via Rails API backend"
  ),
  createData(
    "DivisioN",
    "February 2021",
    "https://github.com/Doode1524/rails-CMS",
    "https://www.youtube.com/embed/AL-as789LSs",
    "Get real-time news articles from major sources from around the world, and chat with other users in this full CRUD rails app."
  ),
  createData(
    "Legends!",
    "January 2021",
    "https://github.com/Doode1524/legends-project",
    "https://www.youtube.com/embed/0ym2Yxfh3gQ",
    "A Sinatra League of Legends simulator where users can create teams and duel other users teams, tracking their win/loss records"
  ),
  createData(
    "Legends CLI",
    "December 2020",
    "https://github.com/Doode1524/Phase1_Project",
    "https://www.youtube.com/embed/LYFhBCzdONE",
    "A casino style BlackJack game built using a Rails API backend, React/Redux frontend, and a 3rd party API"
  ),
  createData(
    "React BlackJack",
    "April 2021",
    "https://github.com/Doode1524/ReactJack-frontend",
    "https://www.youtube.com/embed/NPp_AITIQ-M",
    "A casino style BlackJack game built using a Rails API backend, React/Redux frontend, and a 3rd party API"
  ),
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Projects = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <h1>Projects:</h1>
        <Grid container item xs={12} spacing={3}>
          {projects.map((project) => (
            <Videos
              title={project.title}
              date={project.date}
              github={project.github}
              youtube={project.youtube}
              description={project.description}
            />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Projects;
