// import userEvent from '@testing-library/user-event';
import React, { useState,  } from 'react';
import Task from "./Task";

function Todo() {
  // Declare a new state variable, which we'll call "count"
  const [mainInputValue, setMainInputValue] = useState(0);
  const [tasks, setTasks] = useState([{tasks:[]}])

 const handleAddTask = () => {
    if (setMainInputValue.mainInputValue === "") {
      return alert("Please Enter Task");
    }
    setTasks({
      tasks: [
        ...tasks,
        {
          id: tasks.length,
          title: mainInputValue,
          isChecked: false,
        },
      ],
    });

    setMainInputValue({ mainInputValue: "" });

    console.log("wwww", mainInputValue);
  };

  const handleRemovetask = (id) => {
    let filtered = tasks.filter((item) => item.id !== id);

    setTasks({
      tasks: filtered,
    });

    console.log("filtered", filtered);
  }

  function handleChangeCheckbox(id, isChecked) {
    let updatedList = tasks.map((item) => {
      if (item.id === id) {
        item.isChecked = isChecked;
      }
      return item;
    });
    console.log("id", id);
    console.log("checked", isChecked);
    console.log("updated list", updatedList);

    setTasks({
      tasks: updatedList,
    });
  }

  function onChangeInputValue(e) {
    setMainInputValue({ mainInputValue: e.target.value });
  }


  return (
    <div>
        <ul>
          <li>
            <div className="input-wrapper">
              <input
                placeholder="Enter task"
                onChange={(event) => onChangeInputValue(event)}
                value={mainInputValue}
                type="text"
              />
              <button onClick={() => handleAddTask("")}>➕</button>

              <div></div>
            </div>
          </li>
        </ul>

        {tasks.map((item) => {
          return (
            <Task
              key={item.id}
              item={item}
              //   currentTodo={this.state.selectedForEdit}
              handleUpdate={this.handleUpdateTodo}
              handleRemove={(id) => this.handleRemovetask(id)}
              handleCheckbox={(id, isCheked) =>
                this.handleChangeCheckbox(id, isCheked)
              }
            />
          );
        })}
      </div>
  );
}


 


export default Todo;
