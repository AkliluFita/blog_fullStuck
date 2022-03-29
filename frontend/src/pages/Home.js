// import { Container } from "@mui/material";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Posts from "../components/Posts";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
// import { makeStyles } from "@mui/styles";
import styled from "@emotion/styled";

// const useStyles = makeStyles((theme) => ({
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     border: "1px solid black",
//   },
//   header: {},
//   main: {
//     display: "flex",
//     minHeight: "600px",
//   },
//   footer: {},
// }));

const MyContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  // border: "1px solid black",
}));

const Div = styled("div")(({ theme }) => ({
  display: "flex",
  minHeight: "600px",
}));

export default function Home() {
  return (
    <React.Fragment>
      <TopBar />
      <MyContainer>
        <Header />
        <Div>
          <Posts />
          <SideBar />
        </Div>
        <Footer />
      </MyContainer>
    </React.Fragment>
  );
}
