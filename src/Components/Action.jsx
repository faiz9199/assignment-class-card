import React from "react";
import styled from "styled-components";
import exchange from "../assets/exchange.png";
import edit from "../assets/edit.png";

const Container = styled.div`
  width: 100%;
  margin: 20px 0;
`;
const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const Text = styled.span`
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
`;
const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;

const Items = styled.button`
  margin-bottom: 8px;
  color: #374151;
  background-color: #fff;
  padding: 9px 15px 9px 17px;
  border: 1px solid #d1d5db;
  outline: none;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
function Action() {
  return (
    <React.Fragment>
      <Container>
        <FlexBox>
          <Items>
            <Icon src={exchange}></Icon>
            <Text>Switch organisation</Text>
          </Items>
          <Items>
            <Icon src={edit}></Icon>
            <Text>Edit profile</Text>
          </Items>
        </FlexBox>
      </Container>
    </React.Fragment>
  );
}

export default Action;
