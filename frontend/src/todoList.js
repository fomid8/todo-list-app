import React, { useState } from "react";

import "./index.css";
import "font-awesome/css/font-awesome.min.css";
import { ListInputUI } from "./ListInput";
import { ListDisplay } from "./listDisplay";

export function ToDoList({data}) {
  const [state, setState] = useState({
    items: data,
    nextItem: "",
  });
  const itemAdder = () => {
    if (state.nextItem) {
      setState((prevState) => ({
        nextItem: "",
        items: prevState.items?.concat({
          description: state.nextItem,
          isCompleted: false,
        }),
      }));
    }
  };

  const itemRemover = (removeIndex) => {
   //todo remove item by index from list
  };

  const itemCompleter = (event, indexToComplete) => {
    function completeItem(myarray, indexToComplete) {
      return myarray.map(function (elem, index) {
        if (index === indexToComplete) elem.isCompleted = !elem.isCompleted;
        return elem;
      });
    }
    const editedItems = completeItem(state.items, indexToComplete);

    setState((prevState) => ({
      nextItem: prevState.nextItem,
      items: [...editedItems],
    }));
  };

  const itemInputChange = (e) => {
    setState((prevState) => ({
      nextItem: e.target.value,
      items: prevState.items,
    }));
  };

  return (
    <div className="listContainer">
      <ListInputUI
        itemAdder={itemAdder}
        getInputValue={itemInputChange}
        nextItem={state.nextItem}
      />
      <ListDisplay
        listItems={state.items}
        itemRemover={itemRemover}
        itemCompleter={itemCompleter}
      />
    </div>
  );
}




