import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import PeopleIcon from '@mui/icons-material/People';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
function Dashboard() {
    let navigate = useNavigate();
  return (
    <Container>
        
        <Nav>
            <Link to='/'><ArrowBackOutlinedIcon fontSize='large' /></Link>
            <Link to='/leads'><li>Leads</li></Link>
            <Link to='/newlead'><li classname='newlead'>New Lead</li></Link>
        </Nav>
        <Banner>
            <div className='banner-gradient'>
                <div className='banner'>
                <h4>Welcome, Ty</h4>
                <h1>Thursday, November 17</h1>
                <h4>Long Beach, California</h4>
                </div>
            </div>
        </Banner>
        <SubDashboard>
            <div className='subDashboard'> 
                <div className='leads' onClick={() => {
                    navigate('/leads')}}>
                        <h1>Leads</h1> <PeopleIcon fontSize='large' />
                        </div>
                        <div className='appointments'>
                    <h1>Appointments</h1> <EventAvailableIcon fontSize='large' />
                </div>
            </div>

        </SubDashboard>
    </Container>
  )
}

export default Dashboard

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: #f0f0f0;
    margin-left: 75px;

`

const Nav = styled.div`
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
    display: flex;
    flex-direction: column;
    text-align: start;

    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);
        display: flex;
        color: white;
    }

    arrowBackIcon {
        color: white;
    }
    `
const Banner = styled.div`
    display: flex;
    align-items: center;
    background-image: url('images/californiaBanner.jpeg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 400px;
    width: 80%;
    margin-top: 100px;
    border-radius: 20px;
    
    h1, h4, h4 {
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
        background-color: rgba(0, 0, 0, 0.5);
        background-image: linear-gradient(
            rgba(0, 0, 0, 0.8) 0,
            rgba(0, 0, 0, 0.) 60%,
            rgba(0, 0, 0, 0.8) 100%,
        );
    }

    `

    const SubDashboard = styled.div`
    width: 80%;
    height: 300px;
    
    .subDashboard {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .leads, .appointments {
        background-color: white;
        width: 49%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 25px;
        border-radius: 20px;
        box-shadow: 0 5px 5px rgb(0 0 0 / 0.2);
        cursor: pointer;
    }

    `