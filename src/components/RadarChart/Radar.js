import { Radar } from "react-chartjs-2";
import React from "react";
import { data, radarOptions } from "../../data.js";
import useStyles from "./Radar.css.js";

export default function RadarChart() {
  const classes = useStyles();
  return (
    <div className={classes.chart_container}>
      <h1 className={classes.title}>Chart</h1>
      <div className={classes.radar}>
        <Radar data={data} width={400} height={600} options={radarOptions} />
      </div>
    </div>
  );
}
