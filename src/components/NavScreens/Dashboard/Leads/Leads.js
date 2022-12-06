import { useState, useEffect, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import AuthContext from "../../../../store/authContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import DashboardNav from "../../../Elements/DashboardNav"

const Leads = () => {
  let navigate = useNavigate();
  function handleClick(id) {
    navigate(`/leads/${id}`)
  }
  const { userId, token } = useContext(AuthContext);
  const [leads, setLeads] = useState([]);

  // SETTING UP THE GET LEADS FUNCTIONALITY
  useEffect(() => {
    axios.get("/leads")
      .then((res) => {
        setLeads(res.data);
      })
      .catch((err) => {
        console.log(err);
        console.log(setLeads);
      });
  }, [userId]);

  // MAPPING THROUGH LEADS TO GET THE IMFORMATION I WANT DISPLAYED
  const mappedLeads = leads.map((lead) => {
    return (
      <div key={lead.id} className="lead-card">
        <div className="lead-name">
          <h2>{}</h2>
          <h2>
            {lead.firstName} {lead.lastName}
          </h2>
          <h4>ID: {lead.id}</h4>
        </div>
        <div className="lead-location">
          <h2>{lead.address},</h2>
          <h4>
            {lead.city}, {lead.state} {lead.zipcode}
          </h4>
        </div>
        <div className="lead-contact">
          <h2>{lead.phone}</h2>
          <h4>{lead.email}</h4>
        </div>
        <div className="lead-useage">
          <p>{lead.useage} KWH / year</p>
        </div>
        <button className="next">
          <NavigateNextIcon style={{ fill: "white" }} onClick={() => handleClick(lead.id)} />
          </button>
      </div>
    );
  });

  
  return mappedLeads.length >= 1 ? (
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
      <div className="searchbar">
        <div className="searchbar-left">
          <h1>Accounts:</h1>
        </div>
        <input type="text" placeholder="Search" />
      </div>
      {mappedLeads}
    </Container>
  ) : (
    <Container>
      <h1>You have no leads yet!</h1>
    </Container>
  );
};

export default Leads;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  margin-left: 125px;
  background-color: #f0f0f0;

  .next {
    background-color: #1e81b0;
    padding: 5px 20px;
    border: none;
    border-radius: 10px;
    margin-top: 5px;
  }

  img {
    position: fixed;
    display: flex;
    height: 100px;
    padding: 0 20px;
    margin-left: 150px;
    top: 0;
    left: 0;
  }
  .searchbar {
    display: flex;
    justify-content: space-between;
    height: 80px;
    background-color: #272727;
    align-self: center;
    margin: 10px;
    width: 90%;
    border: none;
    border-radius: 10px;

    h1 {
      color: white;
    }
  }
  .searchbar-left {
    margin-left: 50px;
    align-self: center;
    font-size: 1.5rem;
    font-weight: 600;
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
    margin: 10px;
    width: 90%;
    background-color: white;
    border: none;
    border-radius: 10px;
    padding: 20px;
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
