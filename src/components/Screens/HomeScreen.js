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
        backgroundImg="2.png"
      />
      <Section
        backgroundImg="3.png"
      />
      <Section
        backgroundImg="13.png"
      />
      <Section
        backgroundImg="9.png"
      />
      <Section
        backgroundImg="10.png"
      />
      <Section
        backgroundImg="4.png"
      />
       <Section
        backgroundImg="5.png"
      />
       <Section
        backgroundImg="logo2.png"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100%;
  z-index: 10;
  background-color: black;
`;
