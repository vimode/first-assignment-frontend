import { useRef } from "react";
import "./inputCheckbox.css";

export default function InputCheckBox({ title, attribute, checked, onChange }) {
  const checkboxRef = useRef();

  //	Overwrites the default browser behavior; remove focus from the checkbox when it is clicked
  function handleCheckboxClick() {
    if (checkboxRef.current) {
      checkboxRef.current.blur();
    }
  }

  return (
    <div className="input-container">
      <label htmlFor={attribute}>
        {title}
        <div className="checkbox-container">
          <input
            type="checkbox"
            id={attribute}
            name={attribute}
            checked={checked}
            onChange={onChange}
            ref={checkboxRef}
            onClick={handleCheckboxClick}
          />
          <span className="checkmark-svg-container">
            <svg
              width="17"
              height="12"
              viewBox="0 0 19 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 7.6L7.03451 12.9672C7.05497 12.9854 7.08626 12.9837 7.1047 12.9635L18 1"
                stroke="#878787"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </div>
      </label>
    </div>
  );
}
