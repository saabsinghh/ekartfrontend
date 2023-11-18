//import { Badge } from "@material-ui/core";
//import {  ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "./responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
  z-index: 4;
  position:sticky;
  top:0;
  background-color:black;
`;

const Wrapper = styled.div`
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`

  align-items: left;
`;

// const Language = styled.span`
//   font-size: 14px;
//   cursor: pointer;
//   ${mobile({ display: "none" })}
// `;

// const SearchContainer = styled.div`
//   border: 0.5px solid lightgray;
//   display: flex;
//   align-items: center;
//   margin-left: 25px;
//   padding: 5px;
// `;

// const Input = styled.input`
//   border: none;
//   ${mobile({ width: "50px" })}
// `;

// const Center = styled.div`
//   flex: 1;
//   text-align: center;
// `;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
  color:white;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
  color:white;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          {/* <Language>EN</Language> */}
          {/* <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer> */}
        </Left>
        <Left>
          <Logo><img src="https://tse2.mm.bing.net/th?id=OIP.HWAytpC-upTEaY_2_rFb8gHaHF&pid=Api&P=0&h=180" alt="logo" style={{width:25,height:25}}/>E-Store</Logo>
        </Left>
        <Right>
          <MenuItem>SIGN IN</MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;