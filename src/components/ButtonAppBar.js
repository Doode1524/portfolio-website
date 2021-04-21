import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
//   app_bar: {
//     backgroundColor: "#928983",
//   },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            Joe Castronovo
          </Typography>
          <Button color="inherit" href="/">
              <PermIdentityIcon />
                About
          </Button>
          <Button color="inherit" href="/projects">
              <PlayCircleOutlineIcon />
                Projects
          </Button>
          <Button color="inherit" href="/contact">
              <MailOutlineIcon />
                Contact
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
