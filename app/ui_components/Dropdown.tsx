import React, { useState, useRef } from "react";
// import "./Dropdown.css"; // Create your own CSS styles
import styles from "../page.module.css";
import DownArrow from "../components/icons/ArrowDown";

export interface DropdownProps {
  selectedItem: string | null;
  setSelectedItem: (value: React.SetStateAction<string | null>) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  selectedItem,
  setSelectedItem,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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

  // event listener to the document to close the dropdown when clicking outside of it
  React.useEffect(() => {
    document.addEventListener("click", closeDropdown);
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  const items = ["All products", "smartphones", "laptops", "skincare"];
  // console.log(selectedItem);
  return (
    <>
      <div ref={dropdownRef} className={styles.custom__dropdown}>
        <div
          className={`${styles.dropdown__toggle} ${
            isDropdownOpen ? styles.open : ""
          }`}
          onClick={toggleDropdown}
        >
          <div style={{ display: "flex", gap: "8px" }}>
            <p>{selectedItem || "All Products"}</p>
            <p>
              <DownArrow />
            </p>
          </div>
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
      <div className={styles.container__toggle__mobile}>
        <ul className={styles.dropdown__toggle__mobile}>
          {items.map((item, index) => (
            <li
              key={index}
              onClick={() => handleItemClick(item)}
              className={styles.dropdown__card__button}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
