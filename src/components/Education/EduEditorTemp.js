import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import DegreeTemp from "./DegreeTemp";

const iconPlus = <FontAwesomeIcon icon={faPlus} />;

class EduEditorTemp extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.deleteDegree = this.deleteDegree.bind(this);
    this.addDegree = this.addDegree.bind(this);
  }

  handleChange = (name, value, id) => {
    this.props.onTextChange(name, value, id);
  };

  addDegree = (e) => {
    e.preventDefault();
    this.props.onAddDegree();
  };

  deleteDegree = (id) => {
    this.props.onDeleteDegree(id);
  }

  render() {
    const { degrees } = this.props;

    return(
      <div className="EducationEditor">
        <h2>Education</h2>
        {
          degrees.map((degree) => {
            return(
              <DegreeTemp
                degree={degree}
                key={degree.id.toString()}
                onTextChange={this.handleChange}
                onDeleteDegree={this.deleteDegree}
              />
            );
          })
        }
        <button onClick={this.addDegree}>{iconPlus}</button>
      </div>
    );
  };
}

export default EduEditorTemp;
