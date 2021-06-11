import React from "react";

import CvHeader from "./CvHeader";
import CvHistory from "./CvHistory";
import CvSidebar from "./CvSidebar";

import "../../styles/Preview.css";

class Preview extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { name, title, city, email, phone } = this.props.bio.fields;
    const { degrees, jobs } = this.props;
    console.log(degrees);
    console.log(jobs);

    return (
      <div className="Preview">
        <CvHeader name={name.text} title={title.text} />
        <div className="CvMain">
          <div className="historyContainerPreview">
            <div className="historySectionPreview">
              <h2>Education</h2>
              {degrees.map((degree) => {
                const { type, university, date } = degree.fields;
                return (
                  <CvHistory
                    title={type.text}
                    subtitle={university.text}
                    date={date.text}
                    key={degree.id}
                  />
                );
              })}
            </div>
            <div className="historySectionPreview">
              <h2>Experience</h2>
              {jobs.map((job) => {
                const { position, company, city, startDate, endDate } =
                  job.fields;
                return (
                  <CvHistory
                    title={position.text}
                    subtitle={`${company.text}, ${city.text}`}
                    date={`${startDate.text} - ${endDate.text}`}
                    key={job.id}
                  />
                );
              })}
            </div>
          </div>
          <CvSidebar city={city.text} email={email.text} phone={phone.text} />
        </div>
      </div>
    );
  }
}

export default Preview;
