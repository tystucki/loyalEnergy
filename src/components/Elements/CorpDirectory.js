import React from "react";
import styled from "styled-components";

const CorpDirectory = () => {
  return (
    <Container>
      <div className="searchbar">
        <div className="searchbar-left">
          <h1>Directory</h1>
        </div>
        <input type="text" placeholder="Search" />
      </div>
      <div className="directory-operations">
        <div className="directory-operations-titles">
          <h1>Queue</h1>
          <h1>Support Provided</h1>
          <h1>Number</h1>
        </div>
        <div className="directory-operations-creation">
          <p>Account Creation</p>
          <p>Welcome Calls, Site Survey, Change Orders and Pre-Sales Support</p>
          <p>844 207-7320</p>
        </div>
        <div className="directory-operations-support">
          <p>Sales Support</p>
          <p>
            Post Sale Project Related Inquiries or Request for Sales
            Representatives
          </p>
          <p>551 454-6438</p>
        </div>
        <div className="directory-operations-management">
          <p>Account Management</p>
          <p>All Customer Facing Inquiries and Questions</p>
          <p>888 685-9464</p>
        </div>
      </div>
      <div className="directory-info">
        <h1>Name</h1>
        <h1>Contact</h1>
        <h1>Territory</h1>
        <h1>Role</h1>
      </div>
    </Container>
  );
};

export default CorpDirectory;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #f0f0f0;

  .directory-operations {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-self: center;
    width: 90%;
    background-color: white;
    border: none;
    padding: 20px;
  }
  .directory-operations-creation,
  .directory-operations-support,
  .directory-operations-management,
  .directory-operations-titles {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border: none;
  }

  .searchbar {
    display: flex;
    justify-content: space-between;
    height: 80px;
    align-self: center;
    width: 90%;
    background-color: #272727;
    border: none;
    border-radius: 10px 10px 0 0;

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

  .directory-info {
    display: flex;
    justify-content: space-around;
    align-self: center;
    width: 90%;
    background-color: #272727;
    border: none;
    margin-bottom: 10px;
    padding: 20px;

    h1 {
      color: white;
    }
  }
`;
