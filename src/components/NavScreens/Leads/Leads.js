import {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import AuthContext from '../../../store/authContext'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

const Leads = () => {
    let navigate = useNavigate();
    const {userId} = useContext(AuthContext)
    const [leads, setLeads] = useState([])

    useEffect(() => {
        axios.get('/leads')
        .then(res => {setLeads(res.data)})
        .catch(err => {
            console.log(err)
        })
    }, [userId])

    const mappedLeads = leads.map(lead => {
        return (
                <div key={lead.id} className='lead-card'>
                    <div className='lead-name'>
                        <h2>{lead.firstName} {lead.lastName}</h2>
                        <h4>ID: {lead.id}</h4>
                    </div>
                    <div className='lead-location'>
                        <h2>{lead.address}</h2>
                        <h4>{lead.city} {lead.state} {lead.zipcode}</h4>
                     
                    </div>
                    <div className='lead-contact'>
                        <h2>{lead.phone}</h2>
                        <h4>{lead.email}</h4>
                    </div>
                    <div className='lead-useage'>
                        <p>{lead.useage} KWH / year</p>
                    </div>
                </div>
        )
    })
        return mappedLeads.length >= 1 ? (

           <Container>
                <Link to='/'>
                    <img src='/images/logo.png' alt='' />
                </Link> 
                <div className='backArrow' onClick={() => {navigate('/dashboard')}}>
                <ArrowBackOutlinedIcon fontSize='large' />
                </div>
                <div className='searchbar'>
                    <div className='searchbar-left'>Accounts</div>
                    <input
                        type='text'
                        placeholder='Search'
                        />
                    </div>
                {mappedLeads}
            </Container>
            ) : (
            <Container>
                <h1>You have no leads yet!</h1>
            </Container>
            )
        }

export default Leads;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    background-color: #f0f0f0;

    img {
        position: fixed;
        display: flex;
        height: 100px;
        padding: 0 20px;
        top: 0;
        left: 0;      
    }

    .backArrow {
        display: flex;
        margin-left: 5px;
        padding: 10px;
        cursor: pointer;
    }

    .searchbar {
        display: flex;
        justify-content: space-between;
        height: 80px;
        background-color: white;
        align-self: center;
        margin: 10px;
        width: 90%;
        background-color: white;
        border: none;
        border-radius: 10px;
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
        font-size: .9rem;
        font-weight: 600;
    }
    h4 {
        font-size: .9rem;
        font-weight: 400;
        color: grey;
    }

    .lead-name {

    }
    .lead-location {

    }
    .lead-contact {
        
    }
    .lead-useage {

    }

`
