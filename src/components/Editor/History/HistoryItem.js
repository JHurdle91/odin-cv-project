import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import Field from "../Field";

const iconDelete = <FontAwesomeIcon icon={faTrash} />;

const HistoryItem = (props) => {
  const handleChange = (name, value) => {
    const { onTextChange, item } = props;
    onTextChange(name, value, item.id);
  };

  const deleteItem = (e) => {
    e.preventDefault();
    const { onDeleteItem, item } = props;
    onDeleteItem(item.id);
  };

  return (
    <div className="HistoryItem">
      {Object.entries(props.item.fields).map((entry) => {
        const [key, field] = entry;

        return (
          <Field
            name={key}
            field={field}
            key={field.id}
            onTextChange={handleChange}
          />
        );
      })}
      <button onClick={deleteItem}>{iconDelete}</button>
    </div>
  );
};

export default HistoryItem;
