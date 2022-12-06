import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DashboardNav from "../../Elements/DashboardNav";
import styled from "styled-components";

const Trainings = () => {
  let navigate = useNavigate();

  return (
    <Container>
      <DashboardNav />
      <Link to="/">
        <img src="/images/logo.png" alt="" />
      </Link>
      <div
        className="backArrow"
        onClick={() => {
          navigate("/dashboard");
        }}
      >
      </div>
      <Header>
        <h1>Trainings:</h1>
      </Header>
      <Banner>
          
      </Banner>
      <Body>
        <div className="row1">
          <div>

          </div>
        </div>
     
      </Body>
      <Footer>

      </Footer>
    </Container>
  );
};

export default Trainings;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #f0f0f0;
  margin-left: 125px;

  img {
    display: flex;
    height: 100px;
    padding: 0 40px;
    top: 0;
    left: 0;
  }

  .backArrow {
    display: flex;
    position: fixed;
    margin-left: 5px;
    padding: 10px;
    cursor: pointer;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  width: 90%;
  height: 100px;
  padding: 20px;
  border-radius: 10px 10px 0 0;
  background-color: #272727;

  h1 {
    color: white;
    font-size: 1.5rem;
  }
`;
const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  background-image: url("images/10.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  border-radius: 0 0 10px 10px;
  height: 500px;
  width: 90%;
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  align-self: center;
  margin-top: 15px;
  border: none;
  border-radius: 10px 10px 0 0;
  width: 90%;
  height: 500px;
  background-color: #272727;

`
const Footer = styled.div`
display: flex;
justify-content: center;
align-items: center; 
align-self: center;
margin-top: 15px;
width: 90%;
height: 100px;
background-color: #272727;
border: none;
border-radius: 0 0 10px 10px;
`