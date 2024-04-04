import "./App.css";
import styled from "styled-components";
import Sections from "./Components/Sections";
import Profile from "./Components/Profile";
import Action from "./Components/Action";
import SideBar from "./Components/SideBar";
import RighContainer from "./Components/RighContainer";
import UpperSection from './Components/UpperSection'

const Container = styled.div`
  margin: 40px 50px 0 50px;
  display: flex;
  flex-direction: row;
`;
const LeftContainer = styled.div`
  width: 278px;
`;

function App() {
  return (
    <>
      <UpperSection/>
      <Sections />
      <Container>
        <LeftContainer>
          <Profile />
          <Action />
          <SideBar />
        </LeftContainer>
        <RighContainer />
      </Container>
    </>
  );
}

export default App;
