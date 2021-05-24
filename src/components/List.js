import React from "react";
import ListItem from "./ListItem";

//que8
const List = (Props) => {
  return (
    <ul>
      <li>
        <ListItem key={Props.index} todo={Props.todo} id= {Props.id} />

      </li>
    </ul>
  );
};

export default List;
