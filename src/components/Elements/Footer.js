import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';


function Footer() {

  
  return (
    <Container>
      <FooterSection>
        <div className='companySection'>
        <ul> 
          <h1>Company</h1>
          <p>About Us</p>
          <p>Testimonials</p>
          <p>Locations</p>
          <p>Leadership</p>
          <p>Newsroom</p>
          <p>Careers</p>
        </ul>
        </div>

        <div className='solarSection'>
        <ul>
          <h1>Loyal Solar</h1>
          <p>Guarantee</p>
          <p>Hardware</p>
          <p>Financing</p>
          <p>Tax Incentives</p>
          <p>Roofing</p>
          <p>Process</p>
        </ul>
        </div>

        <div className='contactSection'>
        <ul>
          <h1>Help Center</h1>
          <p>Contact</p>
          <p>Customer Care</p>
        </ul>
        </div>
      </FooterSection>

      <SocialSection>
        <div className='socialSection'>
            <div className='phoneNum'>
              <h1>1-888-5050-4433</h1>
            </div>
            <div className='socials'>
                <FacebookIcon />
                <YouTubeIcon />

            </div>
          </div>
      </SocialSection>

    </Container>
  )
}

export default Footer

const Container = styled.div`
    background-color: white;
    min-height: 60px;
    display: flex;
    // flex-direction: column;
`

const FooterSection = styled.div`
background-color: white;
min-height: 250px;
width: 80%;
display: flex;
justify-content: space-between;
padding: 0 20px;
bottom: 0;
z-index: 1;

.companySection, .solarSection, .contactSection {
  margin-top: 2rem;
}

`

const SocialSection = styled.div`
  margin-top: 2rem;
  width: 60%;
  background-color: white;
`
