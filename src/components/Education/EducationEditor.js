import React from "react";

import Degree from "./Degree";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const iconPlus = <FontAwesomeIcon icon={faPlus} />;

class EducationEditor extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return(
      <div className="EducationEditor">
        <h2>Education</h2>
        <Degree />
        <button>{iconPlus}</button>
      </div>
    );
  };
}

export default EducationEditor;
