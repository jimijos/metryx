import React from "react";
import DataTable from "../DataTable/DataTable";
import RadarChart from "../RadarChart/Radar";
import useStyles from "./Dashboard.css.js";

function Dashboard({ isHidden_pr }) {
  const classes = useStyles();
  return (
    <div className={`${classes.container} ${isHidden_pr && classes.hidden}`}>
      <RadarChart />
      <DataTable />
    </div>
  );
}

export default Dashboard;
