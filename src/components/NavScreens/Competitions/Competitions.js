import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Section from "../../Elements/HomeScreenSection";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";


function Competitions() {
  return (
    <Container>
      <Header>
        <Link to="/dashboard">
          <ArrowBackOutlinedIcon style={{ fill: "white" }} fontSize="large" />{" "}
        </Link>
        <h1>Current Competitions</h1>
      </Header>
      <Section
        title="Earn Your Spot"
        description="TO QUALIFY: BETWEEN THE DATES OF NOVEMBER 14 - FEBUARY 18
            YOU MUST HAVE 2 POINTS SOLD AND HAVE 1 NEW RECRUIT WITH A SALE"
        backgroundImg="cruise.jpg"
        leftBtnText=""
        rightBtnText=""
      />
      <Header>
        <h1>Past Competitions</h1>
      </Header>
    </Container>
  );
}

export default Competitions;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 160vh;
  background-color: #272727;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
  height: 100px;
  width: 100%;

  h1 {
    color: white;
    font-size: 2rem;
    font-weight: 500;
  }
;


  .sideBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    width: 260px;
    background-color: red;
  }
`;
