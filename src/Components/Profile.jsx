import React from "react";
import styled from "styled-components";
import profile from "../assets/profile.png";
import dropdown from "../assets/dropdown.png";
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const LeftContainer = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  border: 2px solid #0369a1;
`;

const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  flex: 1;
`;
const RightContainer = styled.img``;
const MiddleTop = styled.div`
  line-height: 24.2px;
  font-weight: 600;
  color: #39404f;
  font-size: 20px;
`;
const MiddleBottom = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 16.94px;
`;
function Profile() {
  return (
    <React.Fragment>
      <Container>
        <LeftContainer src={profile}></LeftContainer>
        <MiddleContainer>
          <MiddleTop>Suraj Talreja</MiddleTop>
          <MiddleBottom>surajvtalreja@gmail.com</MiddleBottom>
        </MiddleContainer>
        <RightContainer src={dropdown}></RightContainer>
      </Container>
    </React.Fragment>
  );
}

export default Profile;
