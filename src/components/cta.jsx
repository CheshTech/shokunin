import React from "react";
import styled from "styled-components";
import {
  Container,
  Button,
  Wrapper,
  Input,
  Column,
  Text
} from "../theme/index";
import { Responsive, Fonts, Colors } from "../theme/styles";

const Grid = styled.div`
  ${Responsive.sm`
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: flex-start;
  grid-gap: ${props => (props.small ? "15px" : "30px")};
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  `}
  ${Responsive.lg`
  width: 100%;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  `}
`;

// const StyledRow = styled(Row)`
//   ${Responsive.sm`
// flex-direction: column;
// width: 80%;
// margin: 0 auto;
// align-items: center;
// `}
//   ${Responsive.lg`
//   flex-direction: row;
// justify-content: space-between;
// width: 80%;
// margin: 0 auto;
// `}
// `;

const StyledText = styled(Text)`
  font-family: ${Fonts.swordsmen};
`;

const StyledButton = styled(Button)`
  background: transparent;
  border: 1px solid ${Colors.white};
  color: ${Colors.white};
  width: 100%;
`;

const ButtonColumn = styled(Column)`
  ${Responsive.sm`
align-items: flex-start;
width: 80%;
`}
  ${Responsive.lg`
  align-items: flex-end;
  width: 80%;
`}
`;

export const Cta = () => {
  return (
    <Wrapper black>
      <Container>
        <Grid>
          <Column alignitems="flex-end">
            <StyledText white width="100%">
              Join our newsletter
            </StyledText>
            <Text white>
              <em>& subscribe for info directly to your inbox!</em>
            </Text>
          </Column>
          <Column width="80%">
            <Input placeholder="Hello There" />
          </Column>
          <ButtonColumn>
            <StyledButton>Sign Up</StyledButton>
          </ButtonColumn>
        </Grid>
      </Container>
    </Wrapper>
  );
};
