import React from "react";

import CvHeader from "./CvHeader";
import CvHistory from "./CvHistory";
import CvSidebar from "./CvSidebar";

import "../../styles/Preview.css";

class Preview extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }

  render() {
    const { name, title, city, email, phone } = this.props.bio.fields;
    return (
      <div className="Preview">
        <CvHeader
          name={name.text}
          title={title.text}
        />
        <div className="CvMain">
          {/* TODO:
            - iterate through degrees and jobs
            - only 1 <CvHistory /> section
              - contains all degrees and jobs
          */}
          <CvHistory
            city={city.text}
            email={email.text}
            phone={phone.text}
          />
          <CvSidebar
            city={city.text}
            email={email.text}
            phone={phone.text}
          />
        </div>
      </div>
    );
  }
}

export default Preview;
