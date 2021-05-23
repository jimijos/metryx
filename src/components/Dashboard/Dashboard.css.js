import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  container: {
    backgroundColor: "#303133",
    width: "90%",
    position: "relative",
    left: "160px",
    minHeight: "100vh",
    height: "100%",
    display: "flex",
    padding: "0% 1% 0% 1%",
    justifyContent: "left",
    transition: "0.5s",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  image: {
    padding: "1%",
    width: "60%",
  },
  hidden: {
    left: "70px",
    width: "95%",
  },
}));
