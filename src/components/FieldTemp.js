import React from "react";

import uniqid from "uniqid";

class FieldTemp extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTextChange(e);
  }

  render() {
    const { parent, name } = this.props;
    const { placeholder, id, text } = parent;

    return(
      <div className="FieldTemp">
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

export default FieldTemp;
