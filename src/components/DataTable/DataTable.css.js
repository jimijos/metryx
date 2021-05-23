import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  table_container: {
    width: "33%",
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
  tableCell: {
    color: "#B5B5B6",
    "&:hover": {
      color: "#fff",
    },
  },
  tableBodyRow: {
    transition: "all 0.4s ease-in-out",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#4B4B4C !important",
    },
  },

  title: {
    borderBottom: "2px solid #B5B5B6",
  },
}));
