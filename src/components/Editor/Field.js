import React from "react";

class Field extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.props.onTextChange(name, value);
  }

  render() {
    const { field, name } = this.props;
    const { placeholder, id, text } = field;

    return(
      <div className="Field">
        <input
          type="text"
          placeholder={placeholder}
          id={id}
          name={name}
          value={text}
          onChange={this.handleChange}
        />
      </div>
    );
  };
}

export default Field;