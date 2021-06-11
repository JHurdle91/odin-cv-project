import React from "react";

import Field from "../Field";

class BioEditor extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (name, value) => {
    this.props.onTextChange(name, value);
  };

  render() {
    const { bio } = this.props;

    return (
      <div className="BioEditor">
        <h2>Personal Information</h2>
        {Object.entries(bio.fields).map((entry) => {
          const [key, field] = entry;

          return (
            <Field
              name={key}
              field={field}
              key={field.id}
              onTextChange={this.handleChange}
            />
          );
        })}
      </div>
    );
  }
}

export default BioEditor;
