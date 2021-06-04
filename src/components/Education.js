import React from "react";

import Degree from "./Degree";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const iconPlus = <FontAwesomeIcon icon={faPlus} />

class Education extends React.Component {
  render() {
    return(
      <div className="Education">
        <h2>Education</h2>
        <Degree />
        <button>{iconPlus}</button>
      </div>
    );
  };
}

export default Education;
