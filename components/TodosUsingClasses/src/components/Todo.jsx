// import { isDisabled } from "@testing-library/user-event/dist/utils";
import React from "react";
import Task from "./Task";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTaskValue: "",
      showAddedTask: false,
      tasks: [],
    };
  }

  handleAddTask = () => {
    const isFound = this.state.tasks.find((task) => {
      if (task.title === this.state.newTaskValue.trim()) {
        return true;
      }
      return false;
    });
    if (!isFound && this.state.newTaskValue.trim() !== "") {
      this.setState({
        tasks: [
          ...this.state.tasks,
          {
            id: this.state.tasks.length,
            title: this.state.newTaskValue,
            isDisabled: true,
            isDone: false,
            isChecked: false,
            position: this.state.tasks.length,
          },
        ],
      });
    } else alert("Error");

    this.setState({ newTaskValue: "" });
  };

  handleDeleteAllTask = (currentId) => {
    let deletedAllTasks = this.state.tasks.filter(({ id }) => id === currentId);
    this.setState({ tasks: deletedAllTasks });
  };

  deleteMarkedItems = (del) => {
    del === "deletemarked" &&
      this.setState({
        tasks: this.state.tasks.filter((item) => !item.isChecked),
      });
  };

  handleRemovetask(currentId) {
    let filtered = this.state.tasks.filter(({ id }) => id !== currentId);

    this.setState({
      tasks: filtered,
    });
  }

  handleEditTask = (id, isDisabled) => {
    let updatedList = this.state.tasks.map((item) => {
      if (item.id === id) {
        item.isDisabled = isDisabled;
      }
      return item;
    });

    this.setState({
      tasks: updatedList,
    });
  };

  handleChangeCheckbox(id, isChecked) {
    let updatedList = this.state.tasks.map((item) => {
      if (item.id === id) {
        item.isChecked = isChecked;
      }
      return item;
    });

    this.setState({
      tasks: updatedList,
    });
  }

  onChangeInputValue(e) {
    this.setState({ newTaskValue: e.target.value });
  }
  handleUpdateTask = (id, isEnabled) => {
    let updatedList = this.state.tasks.map((item) => {
      if (item.id === id) {
        item.isDisabled = isEnabled;
      }
      return item;
    });
    this.setState({
      tasks: updatedList,
    });
  };

  _handlePositionChange = (task, type) => {
    if (type === "down" && task.position === this.state.tasks.length - 1) {
      return;
    }

    if (type === "up" && task.position === 0) {
      return;
    }

    let tasks = [...this.state.tasks];
    const sibling =
      type === "up" ? tasks[task.position - 1] : tasks[task.position + 1];

    let temp = task.position;
    task.position = sibling.position;
    sibling.position = temp;

    tasks = tasks.sort((a, b) => (a.position > b.position ? 1 : -1));

    this.setState({ tasks: tasks });
  };

  render() {
    return (
      <div>
        <ul>
          <li>
            <div className="input-wrapper">
              <input
                placeholder="Enter task"
                onChange={(event) => this.onChangeInputValue(event)}
                value={this.state.newTaskValue}
                type="text"
              />
              <button
                type="submit"
                className="btn-add"
                onClick={() => this.handleAddTask("")}
              >
                ➕
              </button>
              <button
                className="btn-delete-all"
                onClick={() => this.handleDeleteAllTask()}
              >
                Delete All Tasks
              </button>
              <button
                onClick={() => this.deleteMarkedItems("deletemarked")}
                className="btn-delete-all"
              >
                Delete Checked
              </button>
              <div></div>
            </div>
          </li>
        </ul>

        {this.state.tasks.map((item) => {
          return (
            <Task
              key={item.id}
              item={item}
              handleUpdate={(id, isDisabled) =>
                this.handleUpdateTask(id, isDisabled)
              }
              handleEdit={(id, isDisabled) =>
                this.handleEditTask(id, isDisabled)
              }
              handleRemove={(id) => this.handleRemovetask(id)}
              handleCheckbox={(id, isCheked) =>
                this.handleChangeCheckbox(id, isCheked)
              }
              handlePositionChange={(task, type) =>
                this._handlePositionChange(task, type)
              }
            />
          );
        })}
      </div>
    );
  }
}

export default Todo;
