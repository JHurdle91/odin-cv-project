import React from "react";

class Field extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }

  render() {
    return(
      <div className="Field">
        <input
          type="text"
          id={this.props.id}
          placeholder={this.props.placeholder}
        />
        {/* (TODO: add to <input>) onChange={this.handleChange} */}
      </div>
    );
  };
}

export default Field;
