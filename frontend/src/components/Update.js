import { Box, Button, TextField, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  update: {
    flex: "80%",
    padding: "15px",
    background: "#fdfdfb",
  },
  profilePic: {
    padding: "3px",
    border: "2px solid #d3d377",
    borderRadius: "10px",
  },
  ProfileForm: {
    display: "flex",
    alignItems: "center",
  },

  updateForm: {
    marginTop: "20px",
    // border: "1px solid black",
    padding: "10px",
  },
  inputControl: {
    marginTop: "25px",
  },
  actionBtn: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default function Update() {
  const PF = process.env.REACT_APP_PUBLIC_URL;
  const classes = useStyles();
  return (
    <div className={classes.update}>
      <Typography variant="h6" component="h6" className={classes.title}>
        Update your account
      </Typography>
      <Box
        sx={{
          width: 800,
          maxWidth: "100%",
        }}
        className={classes.updateForm}
      >
        <div className={classes.ProfileForm}>
          <Typography>Profile Picture:</Typography>
          <img
            src={`${PF}/p5.png`}
            alt=""
            width="50px"
            className={classes.profilePic}
          />
        </div>
        <div>
          <TextField fullWidth label="Name" id="fullWidth" margin="normal" />
          <TextField fullWidth label="Email" id="fullWidth" margin="normal" />
          <TextField
            fullWidth
            label="Password"
            id="fullWidth"
            margin="normal"
          />
        </div>
        <div className={classes.actionBtn}>
          <Button variant="contained">Publish</Button>
          <Button variant="outlined" startIcon={<DeleteIcon />} color="error">
            Delete an account
          </Button>
        </div>
      </Box>
    </div>
  );
}
