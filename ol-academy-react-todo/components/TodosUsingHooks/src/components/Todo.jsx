import React, { useState } from "react";
import Task from "./Task";

function Todo() {
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
        position: tasks.length,
      },
    ]);

    setMainInputValue("");
  };

  const handleRemovetask = (id) => {
    let filtered = tasks.filter((item) => item.id !== id);

    setTasks(filtered);
  };

  const handleIsDonetask = (id) => {
    let isDone = tasks.filter((item) => item.id !== id);
    setTasks(isDone);
  };

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
    let updatedList = tasks.map((item) => {
      if (item.id === id) {
        item.isDisabled = isEnabled;
      }
      return item;
    });

    setTasks(updatedList);
  };

  function handleChangeCheckbox(id, isChecked) {
    let updatedList = tasks.map((item) => {
      if (item.id === id) {
        item.isChecked = isChecked;
      }
      return item;
    });

    setTasks(updatedList);
  }

  function onChangeInputValue(e) {
    setMainInputValue(e.target.value);
  }

  const handleDeleteAllTask = (id) => {
    let deletedAllTasks = tasks.filter((item) => item.id === id);
    setTasks(deletedAllTasks);
  };

  const deleteMarkedItems = (del) => {
    del === "deletemarked" &&
      setTasks(tasks.filter((item) => !item.isChecked));
  };

  const handlePositionChange = (task, type) => {
    if (type === "down" && task.position === tasks.length - 1) {
      return;
    }

    if (type === "up" && task.position === 0) {
      return;
    }

    let _tasks = [...tasks];
    const sibling =
      type === "up" ? tasks[task.position - 1] : tasks[task.position + 1];

    let temp = task.position;
    task.position = sibling.position;
    sibling.position = temp;

    _tasks = tasks.sort((a, b) => (a.position > b.position ? 1 : -1));

    setTasks([..._tasks]);
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
            <button className="btn-add" onClick={() => handleAddTask("")}>
              ➕
            </button>
            <button
              className="btn-delete-all"
              onClick={() => handleDeleteAllTask()}
            >
              Delete All Tasks
            </button>
            <button
              onClick={() => deleteMarkedItems("deletemarked")}
              className="btn-delete-all"
            >
              Delete Checked
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
            handleRemove={(id) => handleRemovetask(id)}
            handleISDone={(id) => handleIsDonetask(id)}
            handleCheckbox={(id, isChecked) =>
              handleChangeCheckbox(id, isChecked)
            }
            handlePosition={(task, type) => handlePositionChange(task, type)}
            handleEdit={(id, isDisabled) => handleEditTask(id, isDisabled)}
            handleUpdate={(id, isEnabled) => handleUpdateTask(id, isEnabled)}
          />
        );
      })}
    </div>
  );
}

export default Todo;
