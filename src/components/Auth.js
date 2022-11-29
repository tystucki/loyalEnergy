import { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../store/authContext";
import styled from "styled-components";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [admin, setAdmin] = useState("");
  const [territory, setTerritory] = useState("");
  const [role, setRole] = useState("");

  const [register, setRegister] = useState(false);

  const authCtx = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();

    const body = {
      username,
      password,
      firstName,
      lastName,
      dob,
      address,
      city,
      state,
      zipcode,
      email,
      phone,
      admin,
      territory,
      role,
    };

    axios
      .post(register ? "/register" : "/login", body)
      .then(({ data }) => {
        authCtx.login(data.token, data.exp, data.userId);
        console.log("AFTER AUTH", data);
      })
      .catch((err) => {
        setPassword("");
        setUsername("");
        setFirstName("");
        setDob("");
        setAddress("");
        setCity("");
        setState("");
        setZipcode("");
        setEmail("");
        setPhone("");
        setAdmin("");
        setTerritory("");
        setRole("");
      });
  };

  return (
    <Container>
      <form className="form auth-form" onSubmit={submitHandler}>
        {/* <img src="/images/logo.png" alt="" /> */}
        <input className="form-input" type="username" placeholder="username" values={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input className="form-input" type="password" placeholder="password" values={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {register ? (
          <>
            <input className="form-input" type="text" placeholder="first name" values={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input className="form-input" type="text" placeholder="last name" values={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input className="form-input" type="text" placeholder="dob" values={dob}
              onChange={(e) => setDob(e.target.value)}
            />
            <input className="form-input" type="text" placeholder="address" values={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <input className="form-input"  type="text"  placeholder="city"  values={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input className="form-input" type="text" placeholder="state" values={state}
              onChange={(e) => setState(e.target.value)}
            />
            <input className="form-input" type="text" placeholder="zipcode" values={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
            />
            <input className="form-input" type="text" placeholder="phone" values={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input className="form-input" type="text" placeholder="email" values={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input className="form-input" type="text" placeholder="Territory" values={territory}
              onChange={(e) => setTerritory(e.target.value)}
            />
            <input className="form-input" type="text" placeholder="Role" values={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </>
        ) : null}

        <button className="form-btn">{register ? "Onboard" : "Login"}</button>
      </form>
      <div className="form-div2">
        <button className="form-btn2" onClick={() => setRegister(!register)}>
          {register ? "Login" : "Onboard"}
        </button>
      </div>
    </Container>
  );
};

export default Auth;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #272727;
  background-image: url("images/11.png");
  background-size: cover;

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 350px;
    height: 800px;
    border-radius: 10px;
    background-color: none;
    background-repeat: none;
  }

  input {
    width: 60%;
    height: 30px;
    margin-bottom: 8px;
    padding: 10px;
    background-color: #f0f0f0;
    border: 1.5px solid #cfcfcf;
    border-radius: 2.5px;
    font-size: 14px;
    font-weight: 500;
  }

  .form-btn {
    width: 60%;
    height: 35px;
    margin: 10px;
    padding: 10px;
    background-color: #ed413c;
    border: none;
    border-radius: 2.5px;
    font-size: 14px;
    font-weight: 500;
    color: white;
    cursor: pointer;
  }

  .form-div2 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75px;
    width: 350px;
    margin: 10px;
    border-radius: 10px;
    background-color: none;
  }

  .form-btn2 {
    width: 30%;
    height: 35px;
    margin: 10px;
    padding: 10px;
    background-color: #517eab;
    border: none;
    border-radius: 2.5px;
    font-size: 14px;
    font-weight: 500;
    color: white;
    cursor: pointer;
  }
`;
