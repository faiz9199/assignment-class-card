import React from "react";
import styled from "styled-components";
import logo from "../assets/Mark.png";
import avatar from "../assets/Avatar.png";
import group from '../assets/Group.png'
import cart from '../assets/cart.png'
import arrowDown from '../assets/arrowDown.png'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  padding: 20px 50px;
  justify-content: space-between;
  border-bottom: 2px solid #E5E7EB;
`;

const LogoImage = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 20px;
`;

const AvatarImage = styled.img`
  width: 40px;
  height: 40px;
`;
const Icon = styled.img`
  width: 24px;
  height: 24px;
`;
const Text = styled.span`
`;
const IconArrow = styled.img`
  width: 10px;
  height: 6px;
`;
const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

function UpperSection() {
  return (
    <React.Fragment>
      <Container>
        <LogoImage src={logo} alt="Logo" />
        <RightContainer>
          <Icon src={group} ></Icon>
          <Icon src={cart} ></Icon>
          <AvatarImage src={avatar} alt="Avatar" />
          <Text>Tom Cook</Text>
          <IconArrow src={arrowDown} ></IconArrow>
        </RightContainer>
      </Container>
    </React.Fragment>
  );
}

export default UpperSection;
