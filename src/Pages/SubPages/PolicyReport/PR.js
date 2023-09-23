import React, { useState } from 'react';
import styled from 'styled-components';

const Tab = styled.button`
  padding: 10px;
  margin: 10px;
  background: ${(props) => (props.active ? '#007BFF' : '#6C757D')};
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s ease;
  &:hover {
    background: ${(props) => (props.active ? '#0069D9' : '#5A6268')};
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Content = styled.div`
  padding: 20px;
  background: #f8f9fa;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.15);
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

function PR() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div>
      <Tab active={activeTab === 1} onClick={() => setActiveTab(1)}>
        Tab 1
      </Tab>
      <Tab active={activeTab === 2} onClick={() => setActiveTab(2)}>
        Tab 2
      </Tab>
      <Content>
        {activeTab === 1 ? (
          <>
            <p>This is some content for Tab 1.</p>
            <Image
              src="url_to_your_image_for_tab_1"
              alt="description_of_image_1"
            />
          </>
        ) : (
          <>
            <p>This is some content for Tab 2.</p>
            <Image
              src="url_to_your_image_for_tab_2"
              alt="description_of_image_2"
            />
          </>
        )}
      </Content>
    </div>
  );
}

export default PR;
