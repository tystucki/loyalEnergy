import React, { useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import AuthContext from "../../../../store/authContext";
import { useNavigate } from "react-router-dom";
import EventIcon from '@mui/icons-material/Event';
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import DashboardNav from '../../../Elements/DashboardNav';

const UsersCard = () => {
  const { id } = useParams();
  const [lead, setLead] = useState({})
  const { userId, token } = useContext(AuthContext);
  const [leads, setLeads] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get(`/leads/${id}`)
    .then((res) => {
      console.log(res.data);
      setLead(res.data)
    });
  }, []);

  // SETTING UP THE DELETE LEAD FUNCTIONALITY
  const deleteLead = (id) => {
    axios
      .delete(`/leads/${id}`, {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        console.log(res.data)
        setLeads(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
        <DashboardNav />
       <div className="container">
          <div className="header">
            <div className="header-left">
              <h1>
                {lead.firstName} {lead.lastName}
              </h1>
              <br />
              <p>
                {lead.address} {lead.city}, {lead.state} {lead.zipcode}
              </p>
            </div>
            <div className="header-right">
              <h1>{lead.createdAt}</h1>
              <br />
              <p>id: {lead.id}</p>
            </div>
          </div>
          {/* <div className="nav">
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
          </div> */}
          <div className="account-info">
            <div className="contact">
              <h2>
                {lead.firstName} {lead.lastName}
              </h2>
              <br />
              <h2>+1 {lead.phone}</h2>
              <h2>{lead.email}</h2>
            </div>
            <div className="appointment">
                <div className='appointment-box'>
                 <div className='calendar-icon'>
                    <EventIcon style={{ fill: "white" }}
                        fontSize="large" />
                    </div>
                    <h1>{lead.appointment} @ {lead.time} pm</h1>
                </div>
            </div>
          </div>
          <div className='electrical-info'>
            <div className='component-header'>
            <h1>Electrical Information</h1>
                <button>Edit</button>
            </div>
            <br />
            <div className='first-row'>
                <div className='bill'>
                    <h1>Average Bill</h1>
                    <h2>${lead.bill}</h2>
                </div>
                <div className='useage'>
                  <h1>Annual Useage</h1>
                    <h2>{lead.useage} kwh</h2>
                </div>
                <div className=''>
                    <h1>Main Panel Upgrade? (yes or no)</h1>
                    <h2>{lead.mpu}</h2>
                </div>
            </div>

          </div>
          <div className='pre-qual'>
            <div className='component-header'>
                <h1>Prequal Information</h1>
                <button>Edit</button>
            </div>
            <br />
            <div className='first-row'>
                <div className='income'>
                    <h1>Annual Income</h1>
                    <h2>${lead.income}</h2>
                </div>
                <div className='credit'>
                    <h1>Credit Score</h1>
                    <h2>{lead.credit}</h2>
                </div>
                <div className='spouse'>
                    <h1>Spouse Attending Appointment? (yes or no)</h1>
                    <h2>{lead.spouse}</h2>
                </div>
            </div>
            <div className='second-row'>
                <div className='lender'>
                    <h1>Lease or Loan?</h1>
                    <h2>{lead.lender}</h2>
                </div>
                <div className='pool'>
                    <h1>Pool On Site? (yes or no)</h1>
                    <h2>{lead.pool}</h2>
                </div>
                <div className='ev'>
                    <h1>Electric Car? (yes or no)</h1>
                    <h2>{lead.ev}</h2>
                </div>
            </div>
            <div className='third-row'>
                <div className='occupants'>
                    <h1>Occupants In Home</h1>
                    <h2>{lead.occupants}</h2>
                </div>
                <div className='homeowners-age'>
                    <h1>Estimated Homeowners Age</h1>
                    <h2>{lead.ownerage} years old</h2>
                </div>
                <div className='roof-age'>
                    <h1>Estimated Roof Age</h1>
                    <h2>{lead.roofage} years old</h2>
                </div>
            </div>
          </div>
          <div className='hoa-info'>
          <div className='component-header'>
                <h1>HOA Info</h1>
                <button>Edit</button>
            </div>
            <div className='first-row'>
                <div className='hoa'>
                    <h1>HOA? (yes or no)</h1>
                    <h2>{lead.hoa}</h2>
                </div>
                <div className='hoa-name'>
                    <h1>HOA Name</h1>
                    <h2>{lead.hoaName}</h2>
                </div>
                <div className='hoa-phone'>
                    <h1>HOA Phone Number</h1>
                    <h2>{lead.hoaPhone}</h2>
                </div>
            </div>
            <div className='second-row'>
                <div className='hoa-email'>
                    <h1>HOA Email</h1>
                    <h2>{lead.hoaEmail}</h2>
                </div>
                <div className='hoa-website'>
                    <h1>HOA Website</h1>
                    <h2>{lead.hoaWebsite}</h2>
                </div>
                <div className='hoa-president-name'>
                    <h1>President Name</h1>
                    <h2>{lead.hoaPresidentName}</h2>
                </div>
            </div>
          </div>
          <div className='objections'>
            <div className='component-header'>
            <h1>Objections</h1>
            <h2>{lead.objections}</h2>
            <button>Add New</button>
            </div>
          </div>
          <div className='comments'>
            <div className='component-header'>
            <h1>Comments</h1>
            <h2>{lead.comments}</h2>
            <button>Add New</button>
            </div>
          </div>
          <div className='delete-lead'>
            <h1>Delete Lead</h1>
          <button className="button-delete" onClick={() => deleteLead(lead.id) & navigate("/leads")} >
            <DeleteOutlinedIcon />
          </button>
          </div>
        </div>
    </Container>
  )
}

export default UsersCard;

const Container = styled.div`
  height: 100%;
  width: 100%;
  margin-left: 75px;
  padding-top: 100px;
  background-color: #f0f0f0;

    .electrical-info, .pre-qual, .hoa-info,
    .comments, .objections {
    display: flex;
    flex-direction: column;
    width: 80%;
    padding: 25px;
    margin-top: 25px;
    margin-bottom: 25px;
    border: none;
    border-radius: 10px;
    background-color: white;


    button {
        background-color: #1e81b0;
        color: white;
        font-weight: 600;
        padding: 10px 20px;
        border: none;
        border-radius: 10px;
    }
  }

  .comments, .objections {
    h2 {
      font-size: 1rem;
      font-weight: 500;
    }
  }
  .component-header {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .first-row, .second-row, .third-row {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;

    h1 {
        font-size: .8rem;
        color: gray;
        margin-bottom: 10px;
    }
  }
  .income, .credit, .spouse, .lender, .pool, .ev,
  .occupants, .homeowners-age, .roof-age, .hoa, .hoa-name,
   .hoa-phone, .hoa-email, .hoa-website, .hoa-president-name {
    padding: 25px;
    width: 30%;
    background-color: #f0f0f0;
    border: none;
    border-radius: 10px;

    h1{ 
        border-bottom: 1px solid grey;
    }
  }

  .backArrow {
    display: flex;
    margin-left: 125px;
    margin-bottom: 10px;
  }

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
  .appointment {
    display: flex;
    justify-content: space-between;
    height: 200px;
    border: none;
    border-radius: 10px;
    padding: 25px;
    margin-top: 25px;
    box-shadow: 0 5px 5px rgb(0 0 0 / 0.2);
    background-color: white;
  }
  .contact {
    width: 77.5%;
  }
  .appointment {
    width: 20%;
  }
  .appointment, .appointment-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }
  .appointment-box {
    height: 100%;
    width: 100%;
    border: none;
    border-radius: 10px;
    background-color: #1e81b0;

    h1 {
        color: white;
        font-weight: 500;
    }

  }

  .delete-lead {
    border: none;
    padding: 25px; 

    button {
      border: none;
      cursor: pointer;
    }
  }
`;
