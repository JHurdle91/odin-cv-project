import React from "react";

import Job from "./Job";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const iconPlus = <FontAwesomeIcon icon={faPlus} />;

class ExperienceEditor extends React.Component {
  render() {
    return(
      <div className="ExperienceEditor">
        <h2>Experience</h2>
        <Job />
        <button>{iconPlus}</button>
      </div>
    );
  };
}

export default ExperienceEditor;
