import React from 'react';
import styled from 'styled-components';
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';


const DashboardNav = () => {
  return (
    <Nav>
        <div className="nav-top">
          <Link to="/">
            <ArrowBackOutlinedIcon style={{ fill: "white" }} fontSize="large" />
          </Link>
          <Link to="/dashboard">
            <li>
              {" "}
              <HomeOutlinedIcon
                style={{ fill: "white" }}
                fontSize="large"
              />{" "}
              <br /> Dashboard
            </li>
          </Link>
          <Link to="/leads">
            <li>
              {" "}
              <PeopleOutlineOutlinedIcon
                style={{ fill: "white" }}
                fontSize="large"
              />{" "}
              <br /> Accounts
            </li>
          </Link>
          <Link to="/training">
            <li>
              {" "}
              <SchoolOutlinedIcon
                style={{ fill: "white" }}
                fontSize="large"
              />{" "}
              <br /> Training
            </li>
          </Link>
          <Link to="">
            <li>
              {" "}
              <EmojiEventsOutlinedIcon
                style={{ fill: "white" }}
                fontSize="large"
              />{" "}
              <br /> Competitions
            </li>
          </Link>
          <Link to="/myaccount">
            <li>
              {" "}
              <SettingsIcon
                style={{ fill: "white" }}
                fontSize="large"
              />{" "}
              <br /> My Account
            </li>
          </Link>
        </div>
        <div className="nav-bottom">
          <Link to="/newlead">
            <li classname="newlead">
              <AddCircleOutlineOutlinedIcon
                style={{ fill: "white" }}
                fontSize="large"
              />
            </li>
          </Link>
        </div>
      </Nav>
      
  )
}

export default DashboardNav


const Nav = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
position: fixed;
top: 0;
bottom: 0;
left: 0;
background-color: #272727;
border: 2px solid white;
border-radius: 0 20px 20px 0;
width: 150px;
z-index: 16;
list-style: none;
padding: 20px;
text-align: start;

li {
  padding: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-bottom {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
}
`