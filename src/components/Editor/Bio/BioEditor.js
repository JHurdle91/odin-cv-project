import React from "react";

import Field from "../Field";

const BioEditor = (props) => {
  const handleChange = (name, value) => {
    props.onTextChange(name, value);
  };

  return (
    <div className="BioEditor">
      <h2>Personal Information</h2>
      {Object.entries(props.bio.fields).map((entry) => {
        const [key, field] = entry;
        return (
          <Field
            name={key}
            field={field}
            key={field.id}
            onTextChange={handleChange}
          />
        );
      })}
    </div>
  );
};

export default BioEditor;
