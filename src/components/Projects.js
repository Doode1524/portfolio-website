import React from 'react'
import Videos from './Videos'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


    function createData(title, date, github, youtube, description ) {
        return {title, date, github, youtube, description };
      }
      
      const projects = [
        createData('React BlackJack', 'April 2021', "https://github.com/Doode1524/ReactJack-frontend", "https://www.youtube.com/embed/NPp_AITIQ-M", "A casino style BlackJack game built using a Rails API backend, React/Redux frontend, and a 3rd party API"),
        createData('React BlackJack', 'April 2021', "https://github.com/Doode1524/ReactJack-frontend", "https://www.youtube.com/embed/NPp_AITIQ-M", "A casino style BlackJack game built using a Rails API backend, React/Redux frontend, and a 3rd party API"),
        createData('React BlackJack', 'April 2021', "https://github.com/Doode1524/ReactJack-frontend", "https://www.youtube.com/embed/NPp_AITIQ-M", "A casino style BlackJack game built using a Rails API backend, React/Redux frontend, and a 3rd party API"),
        createData('React BlackJack', 'April 2021', "https://github.com/Doode1524/ReactJack-frontend", "https://www.youtube.com/embed/NPp_AITIQ-M", "A casino style BlackJack game built using a Rails API backend, React/Redux frontend, and a 3rd party API"),
        createData('React BlackJack', 'April 2021', "https://github.com/Doode1524/ReactJack-frontend", "https://www.youtube.com/embed/NPp_AITIQ-M", "A casino style BlackJack game built using a Rails API backend, React/Redux frontend, and a 3rd party API"),
        createData('React BlackJack', 'April 2021', "https://github.com/Doode1524/ReactJack-frontend", "https://www.youtube.com/embed/NPp_AITIQ-M", "A casino style BlackJack game built using a Rails API backend, React/Redux frontend, and a 3rd party API"),
  
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
                    {projects.map((project) => <Videos title={project.title} date={project.date} github={project.github} youtube={project.youtube} description={project.description} />)}
                </Grid>
            </Grid>
        </div>  
    )
}

export default Projects
