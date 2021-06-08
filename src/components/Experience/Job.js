import React from "react";

import Field from "../Field";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const iconDelete = <FontAwesomeIcon icon={faTrash} />

class Job extends React.Component {
  render() {
    return(
      <form className="Job">
        <Field
          id = "positionInput"
          placeholder = "Position"
        />
        <Field
          id = "companyInput"
          placeholder = "Company"
        />
        <Field
          id = "jobCityInput"
          placeholder = "City"
        />
        <Field
          id = "startDateInput"
          placeholder = "Start Date"
        />
        <Field
          id = "endDateInput"
          placeholder = "End Date"
        />
        <button>{iconDelete}</button>
      </form>
    );
  };
}

export default Job;
