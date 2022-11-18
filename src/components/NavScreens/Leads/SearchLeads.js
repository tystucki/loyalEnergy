import React, { useState } from 'react';
import Leads from './Leads';
import styled from 'styled-components';

const SearchLeads = ({leads}) => {
    const [search, setSearch] = useState('')

    const leadDisplay = leads
    .filter((lead) => {
        let firstName = lead.firstName.toLowerCase()
        let searchParams = search.toLowerCase()
        return firstName.includes(searchParams)
    })
    .map((lead) => {
        return <Leads lead={lead} />
    })
    
  return (
    <div className='display-leads'>
        <div className='search-lead'>
            <input className='search-input'
             type='text'
             value={search}
             placeholder='Search for a lead'
             onChange={(e) => setSearch(e.target.value)}
         /> 
        </div>
        <Container>
            {leadDisplay}
        </Container>
            
      
    </div>
  )
}

export default SearchLeads;

const Container = styled.div`
.container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    /* background-color: red; */
}

.search-lead {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
}
.search-input { 
        width: 500px;
        height: 40px;
        border-radius: 999px;
        border: none;
        background-color: red;
        text-align: left;
        color: white;
        
    }

`
