import React from "react";
import styled from "styled-components";
import Section from "../Elements/HomeScreenSection";
import Header from "../Elements/Header";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container>
      <Header />

      <Section
        title="THE SHOW GOES ON"
        description=""
        backgroundImg="banner.jpeg"
        leftBtnText=""
        rightBtnText=""
      />

      <Link to="/products">
        <Section
          title=""
          description=""
          backgroundImg="partOne.jpeg"
          leftBtnText=""
          rightBtnText=""
        />
        <br />
      </Link>
      <Section
        title=""
        description=""
        backgroundImg="partTwo.jpeg"
        leftBtnText=""
        rightBtnText=""
      />
      <br />
      <Section
        title=""
        description=""
        backgroundImg="partThree.jpeg"
        leftBtnText=""
        rightBtnText=""
      />
      <br />
      <Section
        title=""
        description=""
        backgroundImg="logo.png"
        leftBtnText=""
        rightBtnText=""
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  z-index: 10;
`;
