import React, { useState } from 'react';
import Modal from 'react-modal';
import {
  BodyContainer,
  BottomBox,
  BottomText,
  Container,
  Container1,
  TextBox,
  TextBoxInfo,
  TextBoxTitle,
  TextContainer,
  TitleContainer,
  Titletxt,
  TopBar,
  TopBox,
  TopText,
} from './DesignChangeStyles';

import IGEMLOGO from '../../../Img/mgemlogo.png';

import { RxCross2 } from 'react-icons/rx';

Modal.setAppElement('#root'); // replace '#root' with the id of your app's root element

export default function DesignChange() {
  const [topBoxModalIsOpen, setTopBoxModalIsOpen] = useState(false);
  const [bottomBoxModalIsOpen, setBottomBoxModalIsOpen] = useState(false);

  return (
    <div
      style={{
        height: '100dvh',
      }}
    >
      <Container>
        <TitleContainer>
          <TopBar src={IGEMLOGO} />
          <Titletxt>Design Changes For Project</Titletxt>
        </TitleContainer>
        <BodyContainer>
          <TopBox onClick={() => setTopBoxModalIsOpen(true)}>
            <TopText>Learn why we are just sensing butyrate</TopText>
            <BottomText>Butyrate Sensing System</BottomText>
          </TopBox>

          <Modal
            isOpen={topBoxModalIsOpen}
            onRequestClose={() => setTopBoxModalIsOpen(false)}
            style={{
              overlay: {
                zIndex: 999,
              },
            }}
          >
            <Container1>
              <TitleContainer>
                <TopBar src={IGEMLOGO} />

                <Titletxt>Design Changes For Project</Titletxt>
              </TitleContainer>
              <TextContainer>
                <TextBox>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                    }}
                  >
                    <TextBoxTitle>Butyrate Testing in Lab</TextBoxTitle>
                    <div
                      style={{
                        color: '#971a35',
                        fontSize: '30px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                      }}
                      onClick={() => setTopBoxModalIsOpen(false)}
                    >
                      <RxCross2 />
                    </div>
                  </div>
                  <TextBoxInfo>
                    Though this project features several metabolites and their
                    sensing systems, including butyrate, indole, hydrogen
                    peroxide, tetrafolate, and tetrathionate, only the butyrate
                    sensing system was chosen to be designed and tested in a
                    laboratory setting. This decision was made due to the time
                    and financial limitations of this project. Given the time
                    constraints involved in the laboratory, including member
                    training, experiment planning, and obtaining results, the
                    choice was made to focus solely on the butyrate sensing
                    system. Furthermore, due to limited resources and funding,
                    it was not possible to purchase the reagents required to
                    fully test each sensing system. As a result, due to the
                    existing research regarding butyrate and MDD, it was chosen
                    as the metabolite of focus within the laboratory.
                  </TextBoxInfo>
                </TextBox>
              </TextContainer>
            </Container1>
          </Modal>
          <BottomBox onClick={() => setBottomBoxModalIsOpen(true)}>
            <TopText>
              Learn why we are measuring fluorescence and not sgRNA and BE2
              induced mutations
            </TopText>
            <BottomText>Fluorescence Testing System</BottomText>
          </BottomBox>
          <Modal
            isOpen={bottomBoxModalIsOpen}
            onRequestClose={() => setBottomBoxModalIsOpen(false)}
            style={{
              overlay: {
                zIndex: 999,
              },
            }}
          >
            <Container1>
              <TitleContainer>
                <TopBar src={IGEMLOGO} />
                <Titletxt>Design Changes For Project</Titletxt>
              </TitleContainer>
              <TextContainer>
                <TextBox>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                    }}
                  >
                    <TextBoxTitle>Measuring Fluorescence in Lab </TextBoxTitle>
                    <div
                      style={{
                        color: '#971a35',
                        fontSize: '30px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                      }}
                      onClick={() => setBottomBoxModalIsOpen(false)}
                    >
                      <RxCross2 />
                    </div>
                  </div>
                  <TextBoxInfo>
                    This project features the use of fluorescent markers to
                    measure metabolite changes within the gut. While the use of
                    Clustered Regularly Interspaced Short Palindromic Repeats
                    (CRISPR)-Cas9 has gained popularity as a method for
                    recording metabolite concentrations, a fluorescence-based
                    approach was employed due to time and financial constraints.
                    Due to uncertainties with equipment accessibility (ie.
                    Sanger Sequencing) and funding the sensing systems tested in
                    lab reported using fluorescence as equipment to measure
                    fluorescence was readily available. Therefore, fluorescence
                    testing required less time to complete, allowing results to
                    be obtained in a cost-effective, timely manner.
                  </TextBoxInfo>
                </TextBox>
              </TextContainer>
            </Container1>
          </Modal>
        </BodyContainer>
      </Container>
    </div>
  );
}
