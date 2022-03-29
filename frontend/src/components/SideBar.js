import React from "react";
import { makeStyles } from "@mui/styles";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
// import { Container } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  sidebar: {
    flex: "20%",
    // border: "1px solid beige",
    display: "flex",
    flexDirection: "column",
    padding: "5px",
    textAlign: "center",
  },
  card: {
    background: "#dadaa4",
  },
}));
export default function SideBar() {
  const PF = process.env.REACT_APP_PUBLIC_URL;
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.sidebar}>
        <Typography variant="h4">About Me</Typography>
        <Card sx={{ maxWidth: 345 }} className={classes.card}>
          <CardMedia
            component="img"
            height="230"
            image={`http://localhost:8000/media/posts/myP1.jpg`}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
      </div>
    </React.Fragment>
  );
}
