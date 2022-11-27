import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import DashboardNav from "../../../Elements/DashboardNav";

const Form = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [useage, setUseage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/leads", {
        firstName,
        lastName,
        address,
        city,
        state,
        zipcode,
        email,
        phone,
        useage,
      })
      .then(() => {
        navigate("/leads");
      })
      .catch((err) => console.log(err));
  };

  return (

    // FORM RETURN
    <Container>
      <DashboardNav />
      <form className="form add-lead-form" onSubmit={handleSubmit}>
        <div className="title">Lead Creation</div>

        <div className="lead-names">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="form-input"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="form-input lead-names"
          />
        </div>
        <div className="lead-address">
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="form-input address"
          />
        </div>
        <div className="lead-location">
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="form-input"
          />
          <input
            type="text"
            placeholder="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="form-input"
          />
          <input
            type="text"
            placeholder="Zipcode"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="lead-contact">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
          />
          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-input"
          />
        </div>

        <div className="lead-useage">
          <input
            type="text"
            placeholder="Annual Useage"
            value={useage}
            onChange={(e) => setUseage(e.target.value)}
            className="form-input lead-useage"
          />{" "}
          KWH
        </div>
        <button
          onClick={() => {
            navigate("/dashboard");
          }}
          className="form-back-btn"
        >
          GO BACK
        </button>
        <button className="form-btn">SAVE LEAD</button>
      </form>
    </Container>
  );
};

export default Form;

const Container = styled.div`
    display: flex;
    justify-content: center;
    // align-items: center;

    .form {
        margin-top: 10%;
        border: 1px solid black;
        border-radius: 5px;
        box-shadow: 5px 5px 20px #171717;
        width: 800px;
        height: 600px;
    }

    .title {
        height: 50px;
        width: 800px;
        font-size: 1.5rem;
        font-weight: 600;
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .form-input {
        padding: 15px;
        color: black;
        background: #f0f0f0;
        border: none;
        border-radius: 10px;
        height: 40px;
        width: 200px;
        margin: 20px 10px;
    }

    .form-btn {
        background-color: black;
        color: white;
        font-size: 1rem;
        font-weight: 500;
        border: none;
        border-radius: 5px;
        padding: 20px;
        margin: 10px;
        width: 40%;
        cursor: pointer;
    }

    .form-back-btn {
        background-color; dark-grey;
        color: black;
        font-size: 1rem;
        font-weight: 500;
        border: none;
        border-radius: 5px;
        padding: 20px;
        margin: 10px;
        width: 40%;
        cursor: pointer;
    }
`;
