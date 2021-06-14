import React from "react";

import BioEditor from "./Bio/BioEditor";
import HistorySection from "./History/HistorySection";

import "../../styles/Editor.css";

const Editor = (props) => {
  const addItem = (itemsKey) => {
    props.onAddItem(itemsKey);
  };

  const deleteItem = (id, itemsKey) => {
    props.onDeleteItem(id, itemsKey);
  };

  const handleChangeBio = (name, value) => {
    props.onTextChangeBio(name, value);
  };

  const handleChangeHistory = (name, value, id, itemsKey) => {
    props.onTextChangeHistory(name, value, id, itemsKey);
  };

  const { bio, degrees, jobs } = props;
  return (
    <div className="Editor">
      <BioEditor bio={bio} onTextChange={handleChangeBio} />
      <HistorySection
        items={degrees}
        itemsKey="degrees"
        header="Education"
        onAddItem={addItem}
        onDeleteItem={deleteItem}
        onTextChange={handleChangeHistory}
      />
      <HistorySection
        items={jobs}
        itemsKey="jobs"
        header="Experience"
        onAddItem={addItem}
        onDeleteItem={deleteItem}
        onTextChange={handleChangeHistory}
      />
    </div>
  );
};

export default Editor;
