import React from "react";

import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "400px",
    backgroundImage: `url(${"images/comp4.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  blogTitle: {
    marginTop: 70,
    background: "black",
    opacity: 0.5,
    padding: "10px",
    borderRadius: "5px",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.container} maxWidth="xl">
        <Typography variant="h1" component="h2" className={classes.blogTitle}>
          Blog React App
        </Typography>
      </div>
    </React.Fragment>
  );
}
