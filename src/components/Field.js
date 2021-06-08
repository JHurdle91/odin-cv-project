import React from "react";

class Field extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  }

  render() {
    return(
      <div className="Field">
        <input
          type="text"
          id={this.props.id}
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
        />
      </div>
    );
  };
}

export default Field;
