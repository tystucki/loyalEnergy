import React from 'react'
import styled from 'styled-components'
import Section from '../Elements/Section'
import Header from '../Elements/Header'
import Footer from '../Elements/Footer'


function Home() {
  return (
    
    <Container>
        <Header />
        <Section 
            title="CULTURES BACK"
            description=""
            backgroundImg="solar-panel.jpg"
            leftBtnText="" 
            rightBtnText=""
        />
        <Section
            title="#1 SWAG IN THE INDUSTRY"
            description=""
            backgroundImg="solar-roof.jpg"
            leftBtnText=""
            rightBtnText=""
        />
        <Section
            title="ALL INCLUSIVE TRIPS"
            description=""
            backgroundImg="customer.jpg"
            leftBtnText=""
            rightBtnText=""
        />
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
