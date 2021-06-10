import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const CvSidebar = (props) => {
  const iconLocation = <FontAwesomeIcon icon={faMapMarkerAlt} />;
  const iconEnvelope = <FontAwesomeIcon icon={faEnvelope} />;
  const iconPhone = <FontAwesomeIcon icon={faPhone} />;
  const { city, email, phone } = props;
  return (
    <div className="CvSidebar">
      <div>{iconLocation} {city}</div>
      <div>{iconEnvelope} {email}</div>
      <div>{iconPhone} {phone}</div>
    </div>
  );
}

export default CvSidebar;
