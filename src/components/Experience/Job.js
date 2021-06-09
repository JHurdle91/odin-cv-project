import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import Field from "../Field";

const iconDelete = <FontAwesomeIcon icon={faTrash} />

class Job extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.deleteJob = this.deleteJob.bind(this);
  }

  handleChange = (name, value) => {
    const { onTextChange, job } = this.props;
    onTextChange(name, value, job.id);
  }

  deleteJob = (e) => {
    e.preventDefault();
    const { onDeleteJob, job } = this.props;
    onDeleteJob(job.id);
  }

  render() {
    const { job } = this.props;

    return(
      <div className="Job">
        {
          Object.entries(job.fields).map(entry => {
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
        <button onClick={this.deleteJob}>{iconDelete}</button>
      </div>
    );
  };
}

export default Job;
