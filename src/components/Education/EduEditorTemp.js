import React from "react";

import DegreeTemp from "./DegreeTemp";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import uniqid from "uniqid";

const iconPlus = <FontAwesomeIcon icon={faPlus} />;

class EduEditorTemp extends React.Component {
  constructor() {
    super();

    this.state = {
      degree: {
        id: uniqid(),
        fields: {
          type: {
            text: '',
            placeholder: 'Degree/Certificate',
            id: uniqid(),
          },
          university: {
            text: '',
            placeholder: 'University',
            id: uniqid(),
          },
          date: {
            text: '',
            placeholder: 'Date completed',
            id: uniqid(),
          },
        },
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.addDegree = this.addDegree.bind(this);
    this.addDegreePressed = this.addDegreePressed.bind(this);
    //this.addDegree();
  }

  handleChange = (name, value, id) => {
    this.props.onTextChange(name, value, id);
  };

  addDegreePressed = (e) => {
    e.preventDefault();
    this.addDegree();
  };

  addDegree = () => {
    const { id, fields } = this.state.degree;
    const { type, university, date } = fields;

    this.props.onAddDegree(id, fields);

    this.setState({
      degree: {
        id: uniqid(),
        fields: {
          type: {
            text: '',
            placeholder: type.placeholder,
            id: uniqid(),
          },
          university: {
            text: '',
            placeholder: university.placeholder,
            id: uniqid(),
          },
          date: {
            text: '',
            placeholder: date.placeholder,
            id: uniqid(),
          },
        },
      },
    });
  };

  render() {

    const { degrees } = this.props;

    return(
      <div className="EducationEditor">
        <h2>Education</h2>
        <form onSubmit={this.addDegreePressed}>
          {degrees.map((item) => {
            return(
              <DegreeTemp
                parent={item}
                key={item.id.toString()}
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
