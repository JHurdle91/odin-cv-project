import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import HistoryItem from "./HistoryItem";

const iconPlus = <FontAwesomeIcon icon={faPlus} />;

class HistorySection extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  handleChange = (name, value, id) => {
    const { itemsKey, onTextChange } = this.props;
    onTextChange(name, value, id, itemsKey);
  };

  addItem = (e) => {
    e.preventDefault();
    const { itemsKey, onAddItem } = this.props;
    onAddItem(itemsKey);
  };

  deleteItem = (id) => {
    const { itemsKey, onDeleteItem } = this.props;
    onDeleteItem(id, itemsKey);
  }

  render() {
    const { items, header } = this.props;

    return(
      <div className="HistorySection">
        <h2>{header}</h2>
        {
          items.map((item) => {
            return(
              <HistoryItem
                item={item}
                key={item.id.toString()}
                onTextChange={this.handleChange}
                onDeleteItem={this.deleteItem}
              />
            );
          })
        }
        <button onClick={this.addItem}>{iconPlus}</button>
      </div>
    );
  };
}

export default HistorySection;
