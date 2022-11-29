import { useState, useEffect, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import AuthContext from "../../../../store/authContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CorpDirectory from "../../../Elements/CorpDirectory";

const Directory = ({user}) => {
  let navigate = useNavigate();
  function handleClick(id) {
    navigate(`/user/${id}`)
  }
  const { userId, token } = useContext(AuthContext);
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

  const deleteUser = (id) => {
    axios
      .delete(`/users/${id}`, {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const mappedUsers = users.map((user) => {
    return (
      <div key={user.id} className="lead-card">
        <div className="lead-name">
          <h2>
            {user.firstName} {user.lastName}
          </h2>
          <h4>ID: {user.id}</h4>
        </div>
        <div className="lead-location">
          <h2>{user.phone}</h2>
          <h4>{user.email}</h4>
        </div>
        <div className="lead-territory">
          <h2>{user.territory}</h2>
        </div>
        <div className="lead-role">
          <h2>{user.role}</h2>
          <button className="next">
          <NavigateNextIcon style={{ fill: "white" }} onClick={() => handleClick(user.id)} />
          </button>
        </div>
      </div>
    );
  });
  return mappedUsers.length >= 1 ? (
    <Container>
      {/* <DashboardNav /> */}
      <Link to="/">
        <img src="/images/logo.png" alt="" />
      </Link>
      <div
        className="backArrow"
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        <ArrowBackOutlinedIcon fontSize="large" />
      </div>

      <CorpDirectory />
      {mappedUsers}
    </Container>
  ) : (
    <Container>
      <h1>No Directory Found</h1>
    </Container>
  );
};

export default Directory;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #f0f0f0;

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

  input {
    margin-right: 50px;
    width: 20%;
    height: 60%;
    align-self: center;
    background-color: #f0f0f0;
    border: none;
    border-radius: 10px;
    padding: 25px;
  }

  .lead-card {
    display: flex;
    justify-content: space-around;
    align-self: center;
    width: 90%;
    background-color: white;
    border-bottom: 1px solid lightgray;
    padding: 20px;

    .lead-name,
    .lead-location,
    .lead-territory,
    .lead-role {
      width: 20%;
    }

    .lead-role {
      .next {
        background-color: #1e81b0;
        padding: 5px 20px;
        border: none;
        border-radius: 10px;
        margin-top: 5px;
      }
    }
 
  h2 {
    font-size: 0.9rem;
    font-weight: 600;
  }

  h4 {
    font-size: 0.9rem;
    font-weight: 400;
    color: grey;
  }

  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
  }
`;
