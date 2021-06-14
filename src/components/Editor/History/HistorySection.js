import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import HistoryItem from "./HistoryItem";

const iconPlus = <FontAwesomeIcon icon={faPlus} />;

const HistorySection = (props) => {
  const handleChange = (name, value, id) => {
    const { itemsKey, onTextChange } = props;
    onTextChange(name, value, id, itemsKey);
  };

  const addItem = (e) => {
    e.preventDefault();
    const { itemsKey, onAddItem } = props;
    onAddItem(itemsKey);
  };

  const deleteItem = (id) => {
    const { itemsKey, onDeleteItem } = props;
    onDeleteItem(id, itemsKey);
  };

  const { items, header } = props;
  return (
    <div className="HistorySection">
      <h2>{header}</h2>
      {items.map((item) => {
        return (
          <HistoryItem
            item={item}
            key={item.id.toString()}
            onTextChange={handleChange}
            onDeleteItem={deleteItem}
          />
        );
      })}
      <button onClick={addItem}>{iconPlus}</button>
    </div>
  );
};

export default HistorySection;
