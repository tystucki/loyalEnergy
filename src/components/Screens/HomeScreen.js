import React from 'react'
import styled from 'styled-components'
import Section from '../Elements/Section'
import Header from '../Elements/Header'
// import Footer from '../Elements/Footer'
import { Link } from 'react-router-dom';


function Home() {
  return (
    
    <Container>
        <Header />

        <Link to='/products'>
        <Section 
            title="CULTURES BACK"
            description=""
            backgroundImg="partOne.jpeg"
            leftBtnText="click here" 
            rightBtnText="more info"
        />
        <br />
        </Link>
        <Section
            title="No Backend Checks"
            description=""
            backgroundImg="partTwo.jpeg"
            leftBtnText=""
            rightBtnText=""
        />
        <br />
        <Section
            title="Fastest Installs"
            description=""
            backgroundImg="partThree.jpeg"
            leftBtnText=""
            rightBtnText=""
        />
        <br />
        <Section
            title="INDUSTRY LEADING SOFTWARE"
            description=""
            backgroundImg="logo.png"
            leftBtnText="Get Started"
            rightBtnText=""
        />

        {/* <Footer /> */}
    </Container>


  )
}

export default Home

const Container = styled.div`
height: 100vh;
z-index: 10;
`
