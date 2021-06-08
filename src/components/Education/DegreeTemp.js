import React from "react";

import FieldTemp from "../FieldTemp";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import uniqid from "uniqid";

const iconDelete = <FontAwesomeIcon icon={faTrash} />

class DegreeTemp extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { onTextChange, parent } = this.props;
    const { name, value } = e.target;

    onTextChange(name, value, parent.id);
  }

  render() {
    const { parent } = this.props;

    return(
      <div className="DegreeTemp">
        {Object.keys(parent.fields).map((key) => {
          const field = parent.fields[key];

          return(
            <FieldTemp
              name={key}
              parent={field}
              key={field.id}
              onTextChange={this.handleChange}
            />
          );
        })}
        <button>{iconDelete}</button>
      </div>
    );
  };
}

export default DegreeTemp;
