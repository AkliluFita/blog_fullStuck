import React from "react";

import Footer from "../components/Footer";
import TopBar from "../components/TopBar";
import styled from "@emotion/styled";

import WritePost from "../components/WritePost";

const MyContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  // border: "1px solid black",
}));

export default function Write() {
  return (
    <div>
      <TopBar />
      <MyContainer>
        <WritePost />
        <Footer />
      </MyContainer>
    </div>
  );
}
