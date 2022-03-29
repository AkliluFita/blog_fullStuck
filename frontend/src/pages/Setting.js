import React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Posts from "../components/Posts";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import styled from "@emotion/styled";
import SinglePost from "../components/SinglePost";
import Update from "../components/Update";

const MyContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  // border: "1px solid black",
}));

const Div = styled("div")(({ theme }) => ({
  display: "flex",
  minHeight: "600px",
}));

export default function Setting() {
  return (
    <div>
      <TopBar />
      <MyContainer>
        <Div>
          <Update />
          <SideBar />
        </Div>
        <Footer />
      </MyContainer>
    </div>
  );
}
