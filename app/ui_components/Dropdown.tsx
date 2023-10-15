import React, { useState, useRef } from "react";
// import "./Dropdown.css"; // Create your own CSS styles
import styles from "../page.module.css";

const Dropdown: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = (event: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  // Attach a click event listener to the document to close the dropdown when clicking outside of it
  React.useEffect(() => {
    document.addEventListener("click", closeDropdown);
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  const items = ["Item 1", "Item 2", "Item 3"];

  return (
    <div ref={dropdownRef} className={styles.custom__dropdown}>
      <div
        className={`${styles.dropdown__toggle} ${
          isDropdownOpen ? styles.open : ""
        }`}
        onClick={toggleDropdown}
      >
        {selectedItem || "All Products"}
      </div>
      {isDropdownOpen && (
        <ul className={styles.dropdown__menu}>
          {items.map((item, index) => (
            <li key={index} onClick={() => handleItemClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
