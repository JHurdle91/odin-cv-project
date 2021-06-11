import React from "react";

const CvHistory = (props) => {
  const { title, subtitle, date } = props;
  return (
    <div className="CvHistory">
      <div className="dateSidebar">
        <div>{date}</div>
      </div>
      <div className="historyItemPreview">
        <div className="historyItemTitle">{title}</div>
        <div className="historyItemSubtitle">{subtitle}</div>
      </div>
    </div>
  );
};

export default CvHistory;
