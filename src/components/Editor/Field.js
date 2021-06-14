import React from "react";

const Field = (props) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    props.onTextChange(name, value);
  };

  const { field, name } = props;
  const { placeholder, id, text } = field;
  return (
    <div className="Field">
      <input
        type="text"
        placeholder={placeholder}
        id={id}
        name={name}
        value={text}
        onChange={handleChange}
      />
    </div>
  );
};

export default Field;
