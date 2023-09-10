import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";

// react icons
import { AiFillCaretDown } from "react-icons/ai";
import { DropDownButton } from "./DropDownStyles";

const Dropdown = ({ options, navItemName, routes }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="dropdown"
      onMouseEnter={() => setIsOpen(true)} // Open dropdown on mouse enter
      onMouseLeave={() => setIsOpen(false)} // Close dropdown on mouse leave
    >
      <DropDownButton>{navItemName}</DropDownButton>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li key={index} className="dropdown-item">
              <Link className="link-styles" to={routes[index]}>
                {option}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
