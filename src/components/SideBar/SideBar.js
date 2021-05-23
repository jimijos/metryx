import { Container } from "@material-ui/core";
import React from "react";
import { labels, getIcon } from "../../data";

import useStyles from "./SideBar.css.js";

function SideBar({ isHidden_pr }) {
  const classes = useStyles();
  return (
    <Container
      className={`${classes.sidebar} ${isHidden_pr && classes.hidden}`}
    >
      {labels.map((label) => (
        <div
          key={Math.random()}
          className={`${classes.p} ${isHidden_pr && classes.hidden_p}`}
        >
          {getIcon(label.name)}
          <span className={classes.icon}>{!isHidden_pr && label.name}</span>
        </div>
      ))}
    </Container>
  );
}

export default SideBar;
