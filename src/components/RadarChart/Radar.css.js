import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  chart_container: {
    width: "64%",
    height: "80vh",
    boxShadow: "0px 3px 11px 6px rgba(34,34,34,0.88)",
    marginRight: "2%",
    borderRadius: "10px",
    color: "#B5B5B6",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      justifyContent: "center",
    },
    marginTop: "7%",
  },
  title: {
    borderBottom: "2px solid #B5B5B6",
    width: "94%",
    marginLeft: "3%",
  },
  radar: {
    height: "75%",
    paddingBottom: "2%",
  },
}));
