//Default React Imports
import React, { useState } from "react";

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
  LearnMRB,
} from "./LearnMoreStyles";
import styled from "styled-components";

//React Icons
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsFillPlayBtnFill } from "react-icons/bs";

//Pill
import Pill from "../img/Pill.svg";

//Popup Video
import VideoPopup from "../Utils/VideoPopup/VideoPopup";

export default function LearnMore() {
  const [isVideoPopupOpen, setIsVideoPopupOpen] = useState(false);

  const openVideoPopup = () => {
    setIsVideoPopupOpen(true);
  };

  const closeVideoPopup = () => {
    setIsVideoPopupOpen(false);
  };
  return (
    <>
      <MiddleGhostBox>
        <MiddleBox onClick={openVideoPopup}>
          {" "}
          <BsFillPlayBtnFill />
        </MiddleBox>
      </MiddleGhostBox>
      <Container>
        <Box>
          <LeftBox>
            <SubLB>
              <TopLB></TopLB>
              <MiddleLB>
                Your genetics load the gun. Your lifestyle pulls the trigger.
              </MiddleLB>
              <BottomLB></BottomLB>
              <NameLB>MEHMET OZ</NameLB>
            </SubLB>
            <LearnMLB>
              Learn More <AiOutlineArrowRight />
            </LearnMLB>
          </LeftBox>
          <RightBox>
            <LeftArea>
              <HeaderContainer>
                <Plus>+</Plus>
                <Header>Effective Research</Header>
              </HeaderContainer>
              <SubHeader>This research affects 99% of the population</SubHeader>
              <LearnMRB>
                Learn More <AiOutlineArrowRight />
              </LearnMRB>
            </LeftArea>
            <RightArea>
              <Image src={Pill} />
            </RightArea>
          </RightBox>
        </Box>
      </Container>
      <VideoPopup
        videoId="ZjkyMNDjsp0" // YouTube video ID The shit after the "v" in the youtube url
        isOpen={isVideoPopupOpen}
        onClose={closeVideoPopup}
      />
    </>
  );
}
