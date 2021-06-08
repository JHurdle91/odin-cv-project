import React from "react";

import Field from "../Field";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const iconDelete = <FontAwesomeIcon icon={faTrash} />

class Degree extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.deleteDegree = this.deleteDegree.bind(this);
  }

  handleChange = (name, value) => {
    const { onTextChange, degree } = this.props;
    onTextChange(name, value, degree.id);
  }

  deleteDegree = (e) => {
    e.preventDefault();
    const { onDeleteDegree, degree } = this.props;
    onDeleteDegree(degree.id);
  }

  render() {
    const { degree } = this.props;

    return(
      <div className="Degree">
        {
          Object.entries(degree.fields).map(entry => {
            const [key, field] = entry;

            return(
              <Field
                name={key}
                field={field}
                key={field.id}
                onTextChange={this.handleChange}
              />
            );
          })
        }
        <button onClick={this.deleteDegree}>{iconDelete}</button>
      </div>
    );
  };
}

export default Degree;
