import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import Field from "../Field";

const iconDelete = <FontAwesomeIcon icon={faTrash} />;

class HistoryItem extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  handleChange = (name, value) => {
    const { onTextChange, item } = this.props;
    onTextChange(name, value, item.id);
  };

  deleteItem = (e) => {
    e.preventDefault();
    const { onDeleteItem, item } = this.props;
    onDeleteItem(item.id);
  };

  render() {
    const { item } = this.props;

    return (
      <div className="HistoryItem">
        {Object.entries(item.fields).map((entry) => {
          const [key, field] = entry;

          return (
            <Field
              name={key}
              field={field}
              key={field.id}
              onTextChange={this.handleChange}
            />
          );
        })}
        <button onClick={this.deleteItem}>{iconDelete}</button>
      </div>
    );
  }
}

export default HistoryItem;
