import React from "react";

import BioEditor from "./Bio/BioEditor";
import HistorySection from "./History/HistorySection";

import "../../styles/Editor.css";

class Editor extends React.Component {
  constructor() {
    super();

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleChangeBio = this.handleChangeBio.bind(this);
    this.handleChangeHistory = this.handleChangeHistory.bind(this);
  }

  addItem = (itemsKey) => {
    this.props.onAddItem(itemsKey);
  }

  deleteItem = (id, itemsKey) => {
    this.props.onDeleteItem(id, itemsKey);
  }
  
  handleChangeBio = (name, value) => {
    this.props.onTextChangeBio(name, value);
  };

  handleChangeHistory = (name, value, id, itemsKey) => {
    this.props.onTextChangeHistory(name, value, id, itemsKey);
  }

  render() {
    const { bio, degrees, jobs } = this.props;
    return (
      <div className="Editor">
        <BioEditor
          bio={bio}
          onTextChange={this.handleChangeBio}
        />
        <HistorySection
          items={degrees}
          itemsKey='degrees'
          header='Education'
          onAddItem={this.addItem}
          onDeleteItem={this.deleteItem}
          onTextChange={this.handleChangeHistory}
        />
        <HistorySection
          items={jobs}
          itemsKey='jobs'
          header='Experience'
          onAddItem={this.addItem}
          onDeleteItem={this.deleteItem}
          onTextChange={this.handleChangeHistory}
        />
      </div>
    );
  }
}

export default Editor;
