import React from "react";

import Field from "../Field";

class BioEditor extends React.Component {
  render() {
    return(
      <div className="BioEditor">
        <h2>Personal Information</h2>
        <form>
          <Field
            id = "nameInput"
            placeholder = "Name"
          />
          <Field
            id = "titleInput"
            placeholder = "Title"
          />
          <Field
            id = "cityInput"
            placeholder = "City"
          />
          <Field
            id = "emailInput"
            placeholder = "Email Address"
          />
          <Field
            id = "phoneInput"
            placeholder = "Phone Number"
          />
        </form>
      </div>
    );
  };
}

export default BioEditor;
