import React, { useState } from "react";
import styled from "styled-components";

//Images
import Image1 from "../img/1658410385342.jpg";
import Image2 from "../img/gallery1.jpg";
import Image3 from "../img/—Pngtree—3d dna helix sequence element_5340349.png";

// Sample methodology data (you can replace this with your own data)
const methodologyData = [
  {
    id: 1,
    title: "Step 1",
    image: Image1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo eget lectus congue iaculis.",
  },
  {
    id: 2,
    title: "Step 2",
    image: Image2,
    text: "Phasellus sit amet nibh at elit auctor aliquet a id orci.",
  },
  {
    id: 3,
    title: "Step 1",
    image: Image1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo eget lectus congue iaculis.",
  },
  {
    id: 4,
    title: "Step 2",
    image: Image2,
    text: "Phasellus sit amet nibh at elit auctor aliquet a id orci.",
  },
  {
    id: 5,
    title: "Step 1",
    image: Image1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo eget lectus congue iaculis.",
  },
  {
    id: 6,
    title: "Step 2",
    image: Image2,
    text: "Phasellus sit amet nibh at elit auctor aliquet a id orci.",
  },
  // Add more methodology data with unique information
];

const MethodologyWrapper = styled.div`
  overflow: hidden;
`;

const MethodologySection = styled.section`
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two columns */
  gap: 20px;
`;

const MethodologyBox = styled.div`
  position: relative; /* Needed for positioning the dropdown */
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
`;

const MethodologyDropdown = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
  position: absolute;
  top: 100%; /* Position the dropdown below the box */
  left: 0;
  width: 250px; /* Fixed width for the dropdown */
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  z-index: 1; /* Ensure the dropdown appears above other elements */
  margin-top: 10px; /* Add some spacing between the box and the dropdown */
  transform: translateX(-50%); /* Center the dropdown horizontally */
  left: 50%; /* Center the dropdown horizontally */
`;

const MethodologyTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
`;

const MethodologyImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const MethodologyDescription = styled.p`
  font-size: 14px;
  color: #666;
`;

const Methodology = () => {
  const [activeBoxId, setActiveBoxId] = useState(null);

  const handleBoxClick = (id) => {
    setActiveBoxId((prevId) => (prevId === id ? null : id));
  };

  const handleDropdownClick = (e) => {
    e.stopPropagation(); // Prevent the box click event from being triggered
  };

  return (
    <MethodologyWrapper>
      <MethodologySection>
        {methodologyData.map((item) => (
          <MethodologyBox
            key={item.id}
            onClick={() => handleBoxClick(item.id)}
            active={activeBoxId === item.id}
          >
            <MethodologyTitle>{item.title}</MethodologyTitle>
            <MethodologyImage src={item.image} alt={item.title} />
            <MethodologyDropdown
              show={activeBoxId === item.id}
              onClick={handleDropdownClick}
            >
              <MethodologyTitle>{item.title}</MethodologyTitle>
              <MethodologyImage src={item.image} alt={item.title} />
              <MethodologyDescription>
                {item.description}
              </MethodologyDescription>
            </MethodologyDropdown>
          </MethodologyBox>
        ))}
      </MethodologySection>
    </MethodologyWrapper>
  );
};

export default Methodology;
