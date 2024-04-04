import React from "react";
import styled from "styled-components";
import clipboard from "../assets/clipboard.png";
import download from '../assets/download.png'

const Container = styled.div`
  width: 100%;
  margin-left: 50px;
`;
const Title = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  margin: 15px;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  padding: 12px;
  border-radius: 6px;
`;
const First = styled.div``;
const Last = styled.div`
  margin-left: 10px;
  width: 100%;
`;

const ImageWrapper = styled.div`
  background-color: #f3f4f6;
  padding: 15px 14px;
  border-radius: 6px;
`;
const Image = styled.img`
  width: 14px;
  height: 16px;
`;
const IconImage = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 8px;
`;
const Flex = styled.div`
  display: flex;
  flex-direction: row;
  &.offset {
    margin: 10px 0;
  }
`;
const Name = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  flex: 1;
`;
const Button = styled.div`
  outline: none;
  border: 1px solid #d1d5db;
  background-color: #fff;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  padding: 9px 17px;
  margin-right: 10px;
  align-items: center;
`;
const data = [
  {
    id: 1,
    top: "Subject",
    last: "Design for intermediates - L1",
  },
  {
    id: 2,
    top: "Sessions",
    last: "10 sessions",
  },
  {
    id: 3,
    top: "Invoice",
    last: "13",
  },
  {
    id: 4,
    top: "Valid till",
    last: "Feb 15, 2024 (23 days left)",
  },
];
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;
const TopText = styled.div`
  font-weight: 400;
  color: #6b7280;
  size: 14px;
  line-height: 20px;
`;

const LastText = styled.div`
  font-weight: 400;
  color: #111827;
  size: 14px;
  line-height: 20px;
`;
const GrayBox = styled.div`
  padding: 8px 12px;
  border-radius: 6px;
  background-color: #f3f4f6;
`;
const SmallText = styled.div`
  font-size: 14px;
  color: #111827;
  line-height: 20px;
  font-weight: 400;
  margin-bottom: 4px;
  &.green {
    color: #008638;
  }
`;
const CheckBox = styled.input`
  margin: 2px 4px 2px 0;
  width: 16px;
  height: 16px;
  border-radius: 4px;
`;
const GreenCheckBox = styled.input`
  margin: 2px 4px 2px 0;
  width: 16px;
  height: 16px;
  border-radius: 4px;
  background-color: #008638;
  accent-color: green;

`;
const RedCheckBox = styled.input`
  margin: 2px 4px 2px 0;
  width: 16px;
  height: 16px;
  border-radius: 4px;
  background-color: #008638 !important;
  accent-color: red;
`;
function RighContainer() {
  return (
    <React.Fragment>
      <Container>
        <Title>My bookings</Title>
        <FlexRow>
          <First>
            <ImageWrapper>
              <Image src={clipboard} />
            </ImageWrapper>
          </First>
          <Last>
            <Flex>
              <Name>Graphic design (full course)</Name>
              <Flex>
                <Button>
                  <IconImage src={download} /> Invoice PDF
                </Button>
                <Button>
                  <IconImage src={download} /> Receipt PDF
                </Button>
              </Flex>
            </Flex>
            <Flex className="offset">
              {data.map(({ id, last, top }) => (
                <TextContainer key={id}>
                  <TopText>{top}</TopText>
                  <LastText>{last}</LastText>
                </TextContainer>
              ))}
            </Flex>
            <GrayBox>
              <SmallText>Balance 6</SmallText>
              <Flex>
                {Array.from({ length: 11 }).map((v, i) => (
                  <CheckBox type="checkbox" key={i} />
                ))}
              </Flex>
              <SmallText>Scheduled 3</SmallText>
              <Flex>
                {Array.from({ length: 3 }).map((v, i) => (
                  <CheckBox type="checkbox" key={i} />
                ))}
              </Flex>
              <SmallText className="green">Attended 5</SmallText>
              <Flex>
                <GreenCheckBox type="checkbox" />
                <GreenCheckBox type="checkbox" />
                <GreenCheckBox type="checkbox" />
                <GreenCheckBox type="checkbox" />
                <RedCheckBox type="checkbox" />
              </Flex>
            </GrayBox>
          </Last>
        </FlexRow>
      </Container>
    </React.Fragment>
  );
}

export default RighContainer;
