import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { Menu, MenuOpen } from "@material-ui/icons";
import useStyles from "./Header.css.js";

function Header({ hideSideBar_F, isHidden_pr }) {
  const classes = useStyles();
  return (
    <AppBar position="fixed" fullwidth="true">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={hideSideBar_F}
        >
          {isHidden_pr ? <Menu /> : <MenuOpen />}
        </IconButton>

        <Typography variant="h6" className={classes.title}>
          Health Data
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
