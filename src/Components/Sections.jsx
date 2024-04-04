import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  padding: 20px 40px;
`;
const Items = styled.div`
  padding: 8px 12px;
  margin-right: 20px;
  color: #6b7280;
  cursor: pointer;
  &.active {
    background-color: #f3f4f6;
    border-radius: 6px;
    size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #000;
  }
`;

function Sections() {
  return (
    <React.Fragment>
      <Container>
        <Items>Classes</Items>
        <Items>One-to-One</Items>
        <Items className="active">Packages</Items>
        <Items>Courses</Items>
      </Container>
    </React.Fragment>
  );
}

export default Sections;
