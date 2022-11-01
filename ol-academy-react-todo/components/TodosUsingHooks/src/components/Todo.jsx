// import userEvent from '@testing-library/user-event';
// import { isDisabled } from "@testing-library/user-event/dist/utils";
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
        isDisabled: true,
        isEnabled: false,
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

  const handleIsDonetask= (id) => {
    let isDone = tasks.filter((item) => item.id !== id);

    setTasks(isDone);

    console.log("DONEED", isDone);
  }

  const handleEditTask = (id, isDisabled) => {
    let updatedList = tasks.map((item) => {
      if (item.id === id) {
        item.isDisabled = isDisabled;
      }
      return item;
    });

    setTasks(updatedList);
  };

  const handleUpdateTask = (id, isEnabled) => {
    console.log(id, isEnabled);
    let updatedList = tasks.map((item) => {
      if (item.id === id) {
        item.isDisabled = isEnabled;
      }
      return item;
    });
    console.log(updatedList);
    setTasks(updatedList);
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

    setTasks(updatedList);
  }

  function onChangeInputValue(e) {
    // console.log("eee", e);
    setMainInputValue(e.target.value);
  }

  const handleDeleteAllTask = (id) => {
    console.log("delete All tasks");
    let deletedAllTasks = tasks.filter((item) => item.id === id);
    setTasks(deletedAllTasks);

  };

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
            <button className="btn-add" onClick={() => handleAddTask("")}>➕</button>
            <button
              className="btn-delete-all"
              onClick={() => handleDeleteAllTask()}
            >
              Delete All Tasks
            </button>
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
            handleISDone={(id) => handleIsDonetask(id)}
            handleCheckbox={(id, isChecked) =>
              handleChangeCheckbox(id, isChecked)
            }
            handleEdit={(id, isDisabled) => handleEditTask(id, isDisabled)}
            handleUpdate={(id, isEnabled) => handleUpdateTask(id, isEnabled)}
          />
        );
      })}
    </div>
  );
}

export default Todo;
