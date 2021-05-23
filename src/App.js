import { Container } from "@material-ui/core";
import { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Loding from "./components/Loading";
import useStyles from "./App.css.js";

function App() {
  const classes = useStyles();
  const [isHidden, setIsHidden] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const hideSideBar = () => {
    setIsHidden((prev) => !prev);
  };

  return (
    <>
      {loading && <Loding />}
      <Header hideSideBar_F={hideSideBar} isHidden_pr={isHidden} />
      <Container maxWidth={false} className={classes.root}>
        <SideBar className={classes.sidebar} isHidden_pr={isHidden} />
        <Dashboard isHidden_pr={isHidden} />
      </Container>
    </>
  );
}

export default App;
