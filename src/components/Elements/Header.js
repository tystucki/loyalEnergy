import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';
import { selectNavOptions } from '../navSlice';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';


function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const navOptions = useSelector(selectNavOptions)

  return (
    <Container>
        <Link to='/'>
        <img src='/images/logo.png' alt='' />
        </Link>

        <Menu>
            <h2>What</h2>
            <h2>Why</h2>
            <h2>How</h2>
        {/* {navOptions && navOptions.map((nav, index) => (
                <h2 key={index}>{nav}</h2>))} */}
        </Menu>

        <CallButton><PhoneIcon />888.5050.4433</CallButton>
            <RightMenu>
                <CustomMenu onClick={() => setBurgerStatus(true)} />
             </RightMenu>
        
        <BurgerNav show={burgerStatus}>
            <CloseWrapper>
                <CustomClose onClick={() => setBurgerStatus(false)} />
            </CloseWrapper>
            {/* {navOptions && navOptions.map((nav, index) => (
                <li key={index}>{nav}</li>
            ))} */}
            <Link to='/calendar'><li>Calendar</li></Link>
            <Link to='/competitions'><li>Competitions</li></Link>
            <Link to='/shop'><li>Shop</li></Link>
            <Link to='/trainings'><li>Trainings</li></Link>


        </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
    background-color: white;
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;

    img {
        height: 100px;
    }
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    
    h2 {
        font-weight: 800;
        cursor: pointer;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: no-wrap;
        color: #000;
        font-size: 16px
    }

    @media(max-width: 768px) {
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-weight: 800;
        text-transform: uppercase;
        margin-right: 10px;
        color: #000;
    }
    `

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: #fff;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.5s ease-out;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);
        
        a {
            font-weight: 600;

        }
    }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
    
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

const CallButton = styled.div`
    background-color: #ED413C;
    color: #fff;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 999px;
    padding: 10px 35px;
    margin-right: 2%;
`

