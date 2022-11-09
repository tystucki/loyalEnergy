import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section 
            title="The Best In Residential Solar"
            description=""
            backgroundImg="solar-panel.jpg"
            leftBtnText="Free Quote" 
            rightBtnText=""
        />
        <Section
            title="Own Your Power"
            description="Quit renting dirty, expensive energy from the power company. Own your power and save."
            backgroundImg="solar-roof.jpg"
            leftBtnText="Learn More"
            rightBtnText=""
        />
        <Section
            title="Zero Dollars Down"
            description="No money out of pocket, simply switch you power bill for a cheaper one."
            backgroundImg="customer.jpg"
            leftBtnText=""
            rightBtnText=""
        />
        <Section
            title="Choose Your Plan"
            description="We offer all the options"
            backgroundImg="logo.png"
            leftBtnText="Get Started"
            rightBtnText=""
        />

    </Container>
  )
}

export default Home

const Container = styled.div`
height: 100vh;
z-index: 10;
`
const Programs = styled.div`

`