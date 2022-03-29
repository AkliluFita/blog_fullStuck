import React from "react";

import { makeStyles } from "@mui/styles";
// import { Container } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "80px",
    background: "blue",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.container}>Footer</div>
    </React.Fragment>
  );
}
