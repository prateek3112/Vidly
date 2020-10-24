import React from "react";

const ListGroup = (props) => {
  const { items, valueProperty, textProperty, onItemSelect ,selectedItem } = props;
  return (
    <ul className="list-group">
      
      {items.map((item) => (
        <li
          key={item[valueProperty]}
          onClick={() => onItemSelect(item)}
          className={selectedItem === item? "list-group-item clickable active": "list-group-item clickable"}        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: 'name',
  valueProperty:"_id"
};

export default ListGroup;
