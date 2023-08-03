//Default React Imports
import React from "react";

//Styled Components
import {
  BottomLB,
  Box,
  Container,
  LearnMLB,
  LeftArea,
  LeftBox,
  MiddleBox,
  MiddleGhostBox,
  MiddleLB,
  NameLB,
  RightArea,
  RightBox,
  SubLB,
  TopLB,
  Header,
  SubHeader,
  HeaderContainer,
  Plus,
  Image,
} from "./LearnMoreStyles";

//React Icons
import { AiOutlineArrowRight } from "react-icons/ai";

//Pill
import Pill from "../img/Pill.svg";

export default function LearnMore() {
  return (
    <>
      <Container>
        <Box>
          <LeftBox>
            <SubLB>
              <TopLB>“</TopLB>
              <MiddleLB>
                Your genetics load the gun. Your lifestyle pulls the trigger.
              </MiddleLB>
              <BottomLB>”</BottomLB>
              <NameLB>MEHMET OZ</NameLB>
            </SubLB>
            <LearnMLB>
              Learn More <AiOutlineArrowRight />
            </LearnMLB>
          </LeftBox>
          <MiddleGhostBox>
            <MiddleBox></MiddleBox>
          </MiddleGhostBox>
          <RightBox>
            <LeftArea>
              <HeaderContainer>
                <Plus>+</Plus>
                <Header>Effective Research</Header>
              </HeaderContainer>
              <SubHeader>This research affects 99% of the population</SubHeader>
            </LeftArea>
            <RightArea>
              <Image src={Pill} />
            </RightArea>
          </RightBox>
        </Box>
      </Container>
    </>
  );
}
