import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './PR.css';
import SubNavbar from '../Components/SubNavbar/SubNavbar';

const Banner = styled.div`
  background: url('https://thepointsguy.global.ssl.fastly.net/us/originals/2023/03/Really-Cool.jpeg?width=1920')
    no-repeat center center;
  background-size: cover;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const TabContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  justify-items: center;
  padding: 0 10px;

  @media (max-width: 855px) {
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
  }
`;

const Tab = styled.button`
  text-decoration: none;
  box-shadow: 10px 10px #000;
  border: 2px solid #000 !important;
  transition: all ease-in 0.2s !important;
  padding: 15px 60px;
  font-size: 30px;
  font-weight: bold;
  color: white;
  background: ${(props) => (props.active ? '#8f311c' : '#a58681')};

  &:hover {
    box-shadow: none;
    transform: translateY(4px) !important;
    transition: all ease-in 0.2s;
    opacity: 1 !important;
    background: ${(props) => (props.active ? '#a58681' : '#5A6268')};
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Content = styled.div`
  padding: 20px;
  display: flex;
  background-color: #dda7a2;
`;

const ContentDivider = styled.div`
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  background-color: #a58681;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

function PR() {
  const [activeTab, setActiveTab] = useState(1);
  const [direction, setDirection] = useState();
  const prevTabRef = useRef();

  useEffect(() => {
    prevTabRef.current = activeTab;
  });

  const prevTab = prevTabRef.current;

  return (
    <div>
      <SubNavbar />
      <div
        style={{
          gap: '50px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          width: '100%',
          height: '100dvh',
          backgroundColor: '#dda7a2',
          marginTop: '50px',
        }}
      >
        <Banner>
          <Title>Policy Report</Title>
        </Banner>
        <TabContainer>
          <Tab
            active={activeTab === 1}
            onClick={() => {
              setActiveTab(1);
              setDirection('right');
            }}
          >
            Tab 1
          </Tab>
          <Tab
            active={activeTab === 2}
            onClick={() => {
              setActiveTab(2);
              setDirection('left');
            }}
          >
            Tab 2
          </Tab>
          <Tab
            active={activeTab === 3}
            onClick={() => {
              setActiveTab(3);
              setDirection('left');
            }}
          >
            Tab 3
          </Tab>
          <Tab
            active={activeTab === 4}
            onClick={() => {
              setActiveTab(4);
              setDirection('left');
            }}
          >
            Tab 4
          </Tab>
          <Tab
            active={activeTab === 5}
            onClick={() => {
              setActiveTab(5);
              setDirection('left');
            }}
          >
            Tab 5
          </Tab>
        </TabContainer>
        <TransitionGroup className={`transition-group ${direction}`}>
          <CSSTransition
            key={activeTab}
            timeout={{ enter: 300, exit: 300 }}
            classNames={'slide'}
          >
            <section className="route-section">
              <Content>
                {activeTab === 1 ? (
                  <ContentDivider>
                    <p>This is some content for Tab 1.</p>
                    <Image
                      src="url_to_your_image_for_tab_1"
                      alt="description_of_image_1"
                    />
                  </ContentDivider>
                ) : activeTab === 2 ? (
                  <ContentDivider>
                    <p>This is some content for Tab 2.</p>
                    <Image
                      src="url_to_your_image_for_tab_2"
                      alt="description_of_image_2"
                    />
                  </ContentDivider>
                ) : activeTab === 3 ? (
                  <ContentDivider>
                    <p>This is some content for Tab 3.</p>
                    <Image
                      src="url_to_your_image_for_tab_2"
                      alt="description_of_image_2"
                    />
                  </ContentDivider>
                ) : activeTab === 4 ? (
                  <ContentDivider>
                    <p>This is some content for Tab 4.</p>
                    <Image
                      src="https://thepointsguy.global.ssl.fastly.net/us/originals/2023/03/Really-Cool.jpeg?width=1920"
                      alt="description_of_image_2"
                    />
                  </ContentDivider>
                ) : (
                  <ContentDivider>
                    <p>This is some content for Tab 5.</p>
                    <Image
                      src="url_to_your_image_for_tab_2"
                      alt="description_of_image_2"
                    />
                  </ContentDivider>
                )}
              </Content>
            </section>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}

export default PR;
