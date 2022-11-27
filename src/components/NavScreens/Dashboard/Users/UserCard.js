import { useState, useEffect, useContext } from "react";
import AuthContext from "../../../../store/authContext";
import styled from "styled-components";
import axios from "axios";
import DashboardNav from "../../../Elements/DashboardNav";

const UserCard = () => {
  const { userId } = useContext(AuthContext);
  const [users, setUsers] = useState([]);

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

  const mapUser = users
    .filter((user) => {
      return +user.id === +userId;
    })
    .map((user) => {
      return (
        <div className="container">
          <div className="header">
            <div className="header-left">
              <h1>
                {user.firstName} {user.lastName}
              </h1>
              <br />
              <p>
                {user.address} {user.city}, {user.state} {user.zipcode}
              </p>
            </div>
            <div className="header-right">
              <h1>{user.role}</h1>
              <br />
              <p>ID: {+userId}</p>
            </div>
          </div>
          <div className="nav">
            <div className="overview">
              <h1>Overview</h1>
            </div>
            <div className="leads">
              <h1>Leads</h1>
            </div>
            <div className="sales">
              <h1>Sales</h1>
            </div>
            <div className="files">
              <h1>Files</h1>
            </div>
          </div>
          <div className="account-info">
            <div className="contact">
              <h2>
                {user.firstName} {user.lastName}
              </h2>
              <br />
              <h2>{user.phone}</h2>
              <h2>{user.email}</h2>
            </div>
            <div className="performance">
              <h2>Performance Card</h2>
              <p>{user.updatedAt}</p>
            </div>
          </div>
        </div>
      );
    });

  return (
    <Container>
      <DashboardNav />
      {mapUser}
    </Container>
  );
};

export default UserCard;

const Container = styled.div`
  // align-items: center;
  // align-self: center;
  // justify-content: center;
  height: 100vh;
  width: 100%;
  margin-left: 75px;
  padding-top: 100px;
  background-color: #f0f0f0;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px;
    text-align: left;
    border: none;
    border-radius: 10px;
    width: 80%;
    background-color: white;
  }

  .nav {
    display: flex;
    width: 80%;
    justify-content: space-between;
  }
  .overview,
  .leads,
  .sales,
  .files {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    background-color: white;
    padding: 25px;
    margin-top: 25px;
    border: none;
    border-radius: 10px;
  }

  .overview:hover,
  .leads:hover,
  .sales:hover,
  .files:hover {
    background-color: #272727;
    h1 {
      color: white;
    }
  }

  .account-info {
    display: flex;
    width: 80%;
    justify-content: space-between;
  }

  .contact,
  .performance {
    display: flex;
    justify-content: space-between;
    height: 300px;
    border: none;
    border-radius: 10px;
    padding: 25px;
    margin-top: 25px;
    box-shadow: 0 5px 5px rgb(0 0 0 / 0.2);
    background-color: white;
  }
  .contact {
    width: 60%;
  }
  .performance {
    width: 35%;
    display: flex;
  }
`;
