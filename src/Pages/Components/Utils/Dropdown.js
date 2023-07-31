import React, { useState } from "react";
import "./Dropdown.css";

// react icons
import { AiFillCaretDown } from "react-icons/ai";
import { DropDownButton } from "./DropDownStyles";

const Dropdown = ({ options, navItemName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <DropDownButton onClick={handleToggle}>{navItemName}</DropDownButton>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li key={index} className="dropdown-item">
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
