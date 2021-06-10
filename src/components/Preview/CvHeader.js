import React from "react";

const CvHeader = (props) => {
  const { name, title } = props;
  return (
    <div className="CvHeader">
      <h2>{name}</h2>
      <h3>{title}</h3>
    </div>
  );
}

export default CvHeader;
