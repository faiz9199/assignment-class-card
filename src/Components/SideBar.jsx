import React from "react";
import styled from "styled-components";
import calendar from "../assets/Calendar.png";
import arrowIcon from "../assets/Icon.png";
import dollar from "../assets/Currency Dollar.png"
import folder from "../assets/Folder.png"
import hand from "../assets/Hand.png"
import folderOpen from "../assets/Folder open.png"
import chart from "../assets/Chart bar.png"

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Text = styled.span`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: #4b5563;
`;
const Icon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 6px;
`;

const Items = styled.span`
  margin-bottom: 8px;
  color: #374151;
  padding: 9px 15px 9px 17px;
  border: none;
  outline: none;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  cursor: pointer;
  &.active {
    background-color: #e5e7eb;
  }
`;
const arr = [
  {
    id: 1,
    name: "My Calendar",
    icon: calendar,
    active: false,
  },
  {
    id: 2,
    name: "My bookings",
    icon: arrowIcon,
    active: true,
  },
  {
    id: 3,
    name: "Attendence History",
    icon: hand,
    active: false,
  },
  {
    id: 4,
    name: "Billing history",
    icon: dollar,
    active: false,
  },
  {
    id: 5,
    name: "My files",
    icon: folder,
    active: false,
  },
  {
    id: 6,
    name: "My courses",
    icon: folderOpen,
    active: false,
  },
  {
    id: 7,
    name: "Grades",
    icon: chart,
    active: false,
  },
];
function SideBar() {
  return (
    <React.Fragment>
      <Container>
        {arr.map(({ id, name, icon, active }) => (
          <Items key={id} className={active ? "active" : ""}>
            <Icon src={icon}></Icon>
            <Text>{name}</Text>
          </Items>
        ))}
      </Container>
    </React.Fragment>
  );
}

export default SideBar;
