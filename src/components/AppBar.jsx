import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  withStyles,
  IconButton,
  Button,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import {number, string} from "prop-types";

const myAppBar = props =>{
  const {classes} = props;
  return(
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <div className={classes.logo}>
            {/*<a href="localhost:3000/" className={classes.link}>*/}
              <img alt="Smaff_ID" src="./images/Smaff_ID.png" className={classes.image} />
            {/*</a>*/}
          </div>
          {
            props.UserID
              ? <Button href={"localhost:3000/user/" + props.UserID}>ようこそ、{props.UserName} 様</Button>
              : <Button color="inherit" href="localhost:3000/login">Login</Button>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
};

const styles = {
  root:{
    flexGrow: 1,
    justifyContent: "space-around",
  },
  bar:{
    backgroundColor:"#16c7de",
  },
  menuButton: {
    marginleft: -12,
    marginRight: 20,
  },
  logo: {
    flexGrow: 1,
  },
  image:{
    width:300,
  },
};

myAppBar.propTypes={
  classes: PropTypes.object.isRequired,
  UserID:number,
  UserName:string,
};

export default withStyles(styles)(myAppBar);