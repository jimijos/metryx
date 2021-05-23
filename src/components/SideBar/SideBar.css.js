import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  sidebar: {
    backgroundColor: "#222222",
    paddingTop: "9%",
    width: "160px",
    left: "0%",
    minHeight: "100vh",
    height: "100%",
    position: "fixed",
    bottom: "0",
    color: "#fff",
    paddingLeft: "8px",
    transition: "all 0.5s",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "60px",
    },
  },
  p: {
    paddingTop: "30px",
    transition: "all 0.5s",
    display: "flex",
    justifyContent: "flex-start",
    "&:hover": {
      color: "crimson",
      overflowX: "hidden",
    },
    "&:hover > span": {
      color: "rgba(181, 181, 182, 1)",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "20px 20px 15px 20px",
    },
  },
  hidden: {
    left: "-35px",
    [theme.breakpoints.down("md")]: {
      left: 0,
    },
  },
  hidden_p: {
    transition: "all 0.5s",
    [theme.breakpoints.down("lg")]: {
      paddingTop: "30px",
    },
    [theme.breakpoints.up("lg")]: {
      justifyContent: "center",
    },
  },
  icon: {
    color: "crimson",
    paddingLeft: "10px",
    textTransform: "uppercase",
    [theme.breakpoints.down("md")]: {
      visibility: "hidden",
    },
  },
}));
