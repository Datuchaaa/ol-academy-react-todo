// import userEvent from '@testing-library/user-event';
import React, { useState } from "react";
import Task from "./Task";

function Todo() {
  // Declare a new state variable, which we'll call "count"
  const [mainInputValue, setMainInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (mainInputValue === "") {
      return alert("Please Enter Task");
    }
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: mainInputValue,
        isChecked: false,
      },
    ]);

    setMainInputValue("");

    console.log("wwww", mainInputValue);
  };

  const handleRemovetask = (id) => {
    let filtered = tasks.filter((item) => item.id !== id);

    setTasks(filtered);

    console.log("filtered", filtered);
  };

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
    // console.log("eee", e);
    setMainInputValue(e.target.value);
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
            // currentTodo={this.state.selectedForEdit}

            handleRemove={(id) => handleRemovetask(id)}
            handleCheckbox={(id, isCheked) =>
              handleChangeCheckbox(id, isCheked)
            }
          />
        );
      })}
    </div>
  );
}

export default Todo;
