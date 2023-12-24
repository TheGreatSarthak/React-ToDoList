import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [itemList, setList] = useState([]);


  function addItem(itemTitle) {
    setList((preItems) => [...preItems, itemTitle]);
  }
  function deleteItem(id) {
    setList((preItems) => {
      return preItems.filter((item, index) => {
        return index != id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea
        addInput={addItem}
      />
      <div>
        <ul>
          {itemList.map((todoItem, itemIndex) => (
            <ToDoItem
              key={itemIndex}
              id={itemIndex}
              name={todoItem}
              isChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
