import React from "react";

import {
  AppBar,
  Avatar,
  Box,
  Button,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
// import { alpha } from "@mui/material/styles";
// import { styled } from "@mui/system";
import { logoutCall } from "../apiCall";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  topbar: {
    height: "70px",
    // border: "1px solid black",
  },

  toolbar: {
    display: "flex",
    justifyContent: "space-around",
  },

  logoLg: {
    flex: 3,
  },

  search: {
    flex: 5,
    display: "flex",
    alignItems: "center",
    borderRadius: "5px",
    backgroundColor: "whitesmoke",
  },

  icons: {
    flex: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
}));

export default function TopBar() {
  const PF = process.env.REACT_APP_PUBLIC_URL;
  const classes = useStyles();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutCall();
    navigate("/login");
  };

  return (
    <React.Fragment>
      <div className={classes.topbar}>
        <AppBar>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h5" className={classes.logoLg}>
              Abdu Logo
            </Typography>

            {/* <Typography variant="h5" className={classes.logoSm}>
              Abdu
            </Typography> */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Link to="/">
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  HOME
                </Button>
              </Link>

              <Button sx={{ my: 2, color: "white", display: "block" }}>
                ABOUT
              </Button>
              <Link to="/write">
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  WRITE
                </Button>
              </Link>
            </Box>
            <div className={classes.search}>
              <Search />
              <InputBase placeholder="Search…" className={classes.input} />
            </div>
            {/* <Search
              className={classes.searchIcon}
              // onClick={() => setOpen(!open)}
            /> */}
            <div className={classes.icons}>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {/* <Link to="/login">
                  <Button sx={{ my: 2, color: "white", display: "block" }}>
                    LOGIN
                  </Button>
                </Link> */}

                <Button
                  sx={{ my: 2, color: "white", display: "block" }}
                  onClick={handleLogout}
                >
                  LOGOUT
                </Button>

                {/* <Link to="/register">
                  <Button sx={{ my: 2, color: "white", display: "block" }}>
                    REGISTER
                  </Button>
                </Link> */}
              </Box>

              <Link to="/setting">
                <Avatar alt="img" src={`${PF}/p5.png`} />
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </React.Fragment>
  );
}
