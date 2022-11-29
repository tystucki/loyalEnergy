import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
// import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import AuthContext from "../../../store/authContext";
import DashboardNav from "../../Elements/DashboardNav";

function Dashboard() {
  const { userId } = useContext(AuthContext);
  const [users, setUsers] = useState([]);

  // GETTING TODAYS DATE
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    // SETTING UP THE GET USERS FUNCTIONALITY
  useEffect(() => {
    axios
      .get("/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
        console.log(setUsers);
      });
  }, [userId]);

  const authCtx = useContext(AuthContext);
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/login")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);

  // mapUser FILTERS THROUGH USERs TO FIND THE CURRENT USER
  const mapUser = users
    .filter((user) => {
      return +user.id === +userId;
    })
    .map((user) => {
      return <h1>{user.firstName}</h1>;
    });

  return (
    <Container>
      <DashboardNav />

      <header>
        <div/>
        <div className="header-right">
          <h1>
            <span>Hey,</span> {mapUser}
          </h1>
          <button
            className="logout-btn"
            onClick={() => {
              authCtx.logout();
            }}
          >
            {" "}
            Logout
          </button>
        </div>
      </header>
      <Banner>
        <div className="banner-gradient">
          <div className="banner">
            <h1>Welcome,{mapUser}</h1>
            <h1>{date}</h1>
            {/* <h4>
              <LocationOnOutlinedIcon style={{ fill: "white" }} /> Long Beach,
              California
            </h4> */}
          </div>
        </div>
      </Banner>
      <SubDashboard>
        <div className="first-row">
          <div
            className="leads"
            onClick={() => {
              navigate("/leads");
            }}
          >
            <h1>Leads</h1> <PeopleOutlineOutlinedIcon fontSize="large" />
          </div>
          <div
            className="directory"
            onClick={() => {
              navigate("/directory");
            }}
          >
            <h1>Directory</h1>
            <FolderOpenOutlinedIcon fontSize="large" />{" "}
          </div>
        </div>
      </SubDashboard>
    </Container>
  );
}

export default Dashboard;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #f0f0f0;
  margin-left: 75px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    height: 50px;
    margin: 25px;
  }

  .header-right {
    display: flex;
    align-items: center;
  }

  .logout-btn {
    display: flex;
    justify-content: center;
    width: 50px;
    padding: 10px 50px;
    margin-left: 10px;
    background-color: #272727;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
  span {
    color: #b4b4b4;
  }
`
const Banner = styled.div`
  background-image: url("images/californiaBanner.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 400px;
  width: 80%;
  margin-top: 25px;
  border-radius: 20px;

  h1,
  h4,
  h4 {
    margin-left: 75px;
    color: white;
    font-weight: 600;
  }

  .banner-gradient {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.2);
    background-image: linear-gradient(
      rgba(0, 0, 0, 0.3) 100%,
      rgba(0, 0, 0, 0) 100%
    );
  }
`;

const SubDashboard = styled.div`
  width: 80%;
  height: 300px;

  .first-row {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .second-row {
    display: flex;
    justify-content: space-between;
  }

  .leads,
  .appointments,
  .onboarding,
  .directory {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 49%;
    padding: 25px;
    margin-top: 25px;
    border-radius: 20px;
    background-color: white;
    box-shadow: 0 5px 5px rgb(0 0 0 / 0.2);
    cursor: pointer;
  }
`