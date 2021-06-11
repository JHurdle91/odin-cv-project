import React from "react";

import "../styles/Header.css";

const Header = (props) => {
  const handleChange = (e) => {
    props.onToggle(e.target.checked);
  };

  return (
    <div className="Header">
      <h4>{props.mode} mode</h4>
      <label className="switch">
        <input type="checkbox" onChange={handleChange} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default Header;
