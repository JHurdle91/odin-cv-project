import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <label class="switch">edit/preview
          <input type="checkbox" />
          <span class="slider round"></span>
        </label> 
      </div>
    );
  };
}

export default Header;
