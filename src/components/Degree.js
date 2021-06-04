import React from "react";

import Field from "./Field";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const iconDelete = <FontAwesomeIcon icon={faTrash} />

class Degree extends React.Component {
  render() {
    return(
      <form className="Degree">
        <Field
          id = "degreeInput"
          placeholder = "Degree/Certificate"
        />
        <Field
          id = "uniInput"
          placeholder = "University"
        />
        <Field
          id = "dateCompletedInput"
          placeholder = "Date completed"
        />
        <button>{iconDelete}</button>
      </form>
    );
  };
}

export default Degree;
