import React, { useState } from "react";

function App() {
  const [itemTitle, setItem] = useState("");
  const [itemList, setList] = useState([{
    id: 0,
    name: "Add Items",
  }]);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setItem(newValue);
  };

  function addItem() {
    setList((preItems) => [...preItems, {id: preItems.length+1,name: itemTitle}]);
    setItem("");
  }

//   function deleteItem(deleteId){
//     const deleteIndex=itemList.indexOf({id: deleteId});
//     const newList=itemList.splice(deleteIndex,1);
//     setList(newList);
//   }

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
          {itemList.map((todoItem) => (
              <li>{todoItem.name}
              {/* <button onClick={deleteItem(todoItem.id)}> */}
              <img src="trash.svg" />
              {/* </button> */}
              </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
