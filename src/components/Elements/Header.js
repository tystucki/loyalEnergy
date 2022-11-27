import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../store/authContext";

function Header() {
  const authCtx = useContext(AuthContext);

  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
      <Link to="/">
        <img src="/images/logo.png" alt="" />
      </Link>

      <Menu>
        <h2>Earn Your Spot</h2>
      </Menu>

      <CallButton>
        <LocalPhoneOutlinedIcon style={{ fill: "white" }} />
        888.5050.4433
      </CallButton>
      <RightMenu>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        <Link to="/dashboard">
          <li>Dashboard</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
        <button
          className="logout-btn"
          onClick={() => {
            authCtx.logout();
          }}
        >
          {" "}
          Logout
        </button>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  background-color: white;
  min-height: 60px;
  position: relative;
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
`;

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
    font-size: 16px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 800;
    text-transform: uppercase;
    margin-right: 10px;
    color: #000;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.5s ease-out;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    display: flex;
  }

  .logout-btn {
    display: flex;
    justify-content: center;
    align-self: center;
    width: 50px;
    padding: 10px 50px;
    margin: 25px;
    background-color: #272727;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CallButton = styled.div`
  background-color: #ed413c;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 999px;
  padding: 10px 35px;
  margin-right: 2%;
`;
