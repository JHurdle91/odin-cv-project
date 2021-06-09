import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import Job from "./Job";

const iconPlus = <FontAwesomeIcon icon={faPlus} />;

class ExperienceEditor extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.deleteJob = this.deleteJob.bind(this);
    this.addJob = this.addJob.bind(this);
  }

  handleChange = (name, value, id) => {
    this.props.onTextChange(name, value, id);
  };

  addJob = (e) => {
    e.preventDefault();
    this.props.onAddJob();
  };

  deleteJob = (id) => {
    this.props.onDeleteJob(id);
  }

  render() {
    const { jobs } = this.props;

    return(
      <div className="ExperienceEditor">
        <h2>Experience</h2>
        {
          jobs.map((job) => {
            return(
              <Job
                job={job}
                key={job.id.toString()}
                onTextChange={this.handleChange}
                onDeleteJob={this.deleteJob}
              />
            );
          })
        }
        <button onClick={this.addJob}>{iconPlus}</button>
      </div>
    );
  };
}

export default ExperienceEditor;
