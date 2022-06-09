import React from "react";
import styled from "styled-components";
import { Container, Wrapper, Column, Text } from "../theme/index";
import { Responsive, Colors } from "../theme/styles";

const Line = styled.div`
  ${Responsive.sm`
display: flex;
  justify-content: space-between;
  align-items: center;
  // display: grid;
  // align-content: center;
  // justify-items: space-between;
  // grid-gap: 25px;
  // grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  width: 100%;
  color: ${Colors.offWhite};
  height: 0px;
  border: 2px dashed #fcfcfc;
  margin: 40px auto 100px auto;
`}
  ${Responsive.lg`
  margin: 160px auto 250px auto;
  `}
`;

const CircleWrapper = styled.div`
  ${Responsive.sm`
    display: flex;
    justify-content: center;
    width: 69px;
    height: 69px;
    padding: 20px;
    margin-bottom: 12px;
    align-items: center;
    border-radius: 50%;
    /* UI Properties */
    background: ${Colors.offWhite};
    box-shadow: 0px 3px 8px ${Colors.blue};
    font: normal normal normal 40px/48px Seven Swordsmen BB;
    letter-spacing: 4px;
    color: ${Colors.blue};
    `}
  ${Responsive.lg`

    width: 131px;
    height: 131px;
    padding: 20px;
    `}
`;

const StyledWrapper = styled(Wrapper)`
  //   padding: 25px 0 75px 0;
`;

const StyledColumn = styled(Column)`
  ${Responsive.sm`
margin: 0px 0 0 0;
`}
  ${Responsive.lg`
margin: 140px 0 0 0;
`}
`;

const StyledText = styled(Text)`
  ${Responsive.sm`
text-align: center;
width: 60%;
color: ${Colors.white};
display: none;
`}
  ${Responsive.md`
text-align: center;
width: 40%;
color: ${Colors.white};
display: inline-block;

`}
`;

const MobileTextColumn = styled(Column)`
  ${Responsive.sm`
display: flex;
margin-top: 60px;
`}
  ${Responsive.lg`
display: none;
margin-top: 0px;
`}
`;

const TitleText = styled(Text)`
  ${Responsive.sm`
margin-bottom: 60px;
color: ${Colors.white};
font-weight: bold;
`}
  ${Responsive.lg`
  margin-bottom: 160px;
`}
`;

export const Steps = () => {
  return (
    <StyledWrapper>
      <Container>
        <TitleText>How it works</TitleText>
        <Line>
          <StyledColumn alignitems="flex-start">
            <CircleWrapper>1</CircleWrapper>

            <StyledText>
              <strong>Step 1:</strong> Description goes here for info
            </StyledText>
          </StyledColumn>
          <StyledColumn alignitems="center">
            <CircleWrapper>2</CircleWrapper>
            <StyledText>
              <strong>Step 2:</strong> Description goes here for info
            </StyledText>
          </StyledColumn>
          <StyledColumn alignitems="flex-end">
            <CircleWrapper>3</CircleWrapper>
            <StyledText>
              <strong>Step 3:</strong> Description goes here for info
            </StyledText>
          </StyledColumn>
        </Line>
        <MobileTextColumn>
          <Text white>
            {" "}
            <strong>Step 1:</strong> Description goes here for info
          </Text>
          <Text margin="10px 0 10px 0" white>
            <strong>Step 2:</strong> Description goes here for info
          </Text>
          <Text white>
            <strong>Step 3:</strong> Description goes here for info
          </Text>
        </MobileTextColumn>
      </Container>
    </StyledWrapper>
  );
};
// <Text white>Step 3: Description goes here for info</Text>
// <Text white>Step 2: Description goes here for info</Text>;
// <Text white>Step 1: Description goes here for info</Text>
// <Column alignitems="flex-start" margin="100px 0 0 0">
//   <CircleWrapper>1</CircleWrapper>

//   <StyledText>
//     <strong>Step 1:</strong> Description goes here for info
//   </StyledText>
// </Column>
// <Column margin="140px 0 0 0">
//   <CircleWrapper>2</CircleWrapper>
//   <StyledText>
//     <strong>Step 2:</strong> Description goes here for info
//   </StyledText>
// </Column>
// <Column alignitems="flex-end" margin="140px 0 0 0">
//   <CircleWrapper>3</CircleWrapper>
//   <StyledText>
//     <strong>Step 3:</strong> Description goes here for info
//   </StyledText>
// </Column>
