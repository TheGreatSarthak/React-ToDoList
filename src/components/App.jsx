import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [itemTitle, setItem] = useState("");
  const [itemList, setList] = useState([]);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setItem(newValue);
  };

  function addItem() {
    setList((preItems) => [...preItems, itemTitle]);
    setItem("");
  }
  function deleteItem(id) {
    setList((preItems)=>{
        return preItems.filter(
            (item,index)=>{
                return index!=id;
            }
        );
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={itemTitle} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
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
