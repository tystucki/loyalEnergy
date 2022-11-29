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
  const [appointment, setAppointment] = useState("");
  const [time, setTime] = useState("");
  const [income, setIncome] = useState("");
  const [credit, setCredit] = useState("");
  const [spouse, setSpouse] = useState("");
  const [lender, setLender] = useState("");
  const [pool, setPool] = useState("");
  const [ev, setEv] = useState("");
  const [occupants, setOccupants] = useState("");
  const [ownerage, setOwnerage] = useState("");
  const [roofage, setRoofage] = useState("");
  const [hoa, setHoa] = useState("");
  const [hoaName, setHoaName] = useState("");
  const [hoaPhone, setHoaPhone] = useState("");
  const [hoaEmail, setHoaEmail] = useState("");
  const [hoaWebsite, setHoaWebsite] = useState("");
  const [hoaPresidentName, setHoaPresidentName] = useState("");
  const [comments, setComments] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/leads", {
        firstName,lastName,address,city,state,
        zipcode,email,phone,useage,appointment,time,income,credit,
        spouse,lender,pool,ev,occupants,ownerage,roofage,
        hoa,hoaName,hoaPhone,hoaEmail,hoaWebsite,hoaPresidentName,
        comments
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
          *<input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="form-input"
          />
          *<input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="form-input lead-names"
          />
        </div>
        <div className="lead-address">
          *<input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="form-input address"
          />
        </div>
        <div className="lead-location">
          *<input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="form-input"
          />
          *<input
            type="text"
            placeholder="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="form-input"
          />
          *<input
            type="text"
            placeholder="Zipcode"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="lead-contact">
          *<input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
          />
          *<input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-input"
          />
        </div>

        <div className="lead-useage">
          *<input
            type="text"
            placeholder="Annual Useage"
            value={useage}
            onChange={(e) => setUseage(e.target.value)}
            className="form-input lead-useage"
          />{" "}
          KWH
          *<input
            type="text"
            placeholder="Appointment (01-01-22)"
            value={appointment}
            onChange={(e) => setAppointment(e.target.value)}
            className="form-input lead-useage"
          />
          *<input
            type="text"
            placeholder="Time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="form-input lead-useage"
          />
        </div>
        <input
            type="text"
            placeholder="Annual Income"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className="form-input lead-useage"
          />
          <input
            type="text"
            placeholder="Credit Score"
            value={credit}
            onChange={(e) => setCredit(e.target.value)}
            className="form-input lead-useage"
          />
          <input
            type="text"
            placeholder="Spouse Attending Appointment"
            value={spouse}
            onChange={(e) => setSpouse(e.target.value)}
            className="form-input lead-useage"
          />
          <input
            type="text"
            placeholder="Lease or Loan?"
            value={lender}
            onChange={(e) => setLender(e.target.value)}
            className="form-input lead-useage"
          />
          <input
            type="text"
            placeholder="Pool on Site?"
            value={pool}
            onChange={(e) => setPool(e.target.value)}
            className="form-input lead-useage"
          />
          <input
            type="text"
            placeholder="Electric Car?"
            value={ev}
            onChange={(e) => setEv(e.target.value)}
            className="form-input lead-useage"
          />
          <input
            type="text"
            placeholder="Occupants in Home"
            value={occupants}
            onChange={(e) => setOccupants(e.target.value)}
            className="form-input lead-useage"
          />
          <input
            type="text"
            placeholder="Estimated Homeowners Age"
            value={ownerage}
            onChange={(e) => setOwnerage(e.target.value)}
            className="form-input lead-useage"
          />
          <input
            type="text"
            placeholder="Estimated Roof Age"
            value={roofage}
            onChange={(e) => setRoofage(e.target.value)}
            className="form-input lead-useage"
          />
          <input
            type="text"
            placeholder="HOA?"
            value={hoa}
            onChange={(e) => setHoa(e.target.value)}
            className="form-input lead-useage"
          />
          <input
            type="text"
            placeholder="HOA NAME"
            value={hoaName}
            onChange={(e) => setHoaName(e.target.value)}
            className="form-input lead-useage"
          />
          <input
            type="text"
            placeholder="HOA Phone Number "
            value={hoaPhone}
            onChange={(e) => setHoaPhone(e.target.value)}
            className="form-input lead-useage"
          />
          <input
            type="text"
            placeholder="HOA Email "
            value={hoaEmail}
            onChange={(e) => setHoaEmail(e.target.value)}
            className="form-input lead-useage"
          />
          <input
            type="text"
            placeholder="HOA Website"
            value={hoaWebsite}
            onChange={(e) => setHoaWebsite(e.target.value)}
            className="form-input lead-useage"
          />
          <input
            type="text"
            placeholder="HOA President Name"
            value={hoaPresidentName}
            onChange={(e) => setHoaPresidentName(e.target.value)}
            className="form-input lead-useage"
          />
          <input
            type="text"
            placeholder="Add a Note "
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            className="form-input lead-useage"
          />
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
