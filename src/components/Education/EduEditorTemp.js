import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import uniqid from "uniqid";

import DegreeTemp from "./DegreeTemp";

const iconPlus = <FontAwesomeIcon icon={faPlus} />;

class EduEditorTemp extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.addDegree = this.addDegree.bind(this);
  }

  handleChange = (name, value, id) => {
    this.props.onTextChange(name, value, id);
  };

  addDegree = (e) => {
    e.preventDefault();
    this.props.onAddDegree();
  };

  render() {
    const { degrees } = this.props;

    return(
      <div className="EducationEditor">
        <h2>Education</h2>
        <form onSubmit={this.addDegree}>
          {degrees.map((degree) => {
            return(
              <DegreeTemp
                degree={degree}
                key={degree.id.toString()}
                onTextChange={this.handleChange}
              />
            );
          })}
          <button type="submit">{iconPlus}</button>
        </form>
      </div>
    );
  };
}

export default EduEditorTemp;
