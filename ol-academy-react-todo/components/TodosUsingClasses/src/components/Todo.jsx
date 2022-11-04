// import { isDisabled } from "@testing-library/user-event/dist/utils";
import React from "react";
import Task from "./Task";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainInputValue: "",
      showAddedTask: false,
      showEditor: false,
      selectedForEdit: undefined,
      tasks: [],
    };
  }
  test = "";

  handleAddTask = () => {
    if (this.state.mainInputValue === "") {
      return alert("Please Enter Task");
    }
    this.setState({
      tasks: [
        ...this.state.tasks,
        {
          id: this.state.tasks.length,
          title: this.state.mainInputValue,
          isChecked: false,
          isDisabled: true,
          isEnabled: false,
          doneTask: false,
          position: this.state.tasks.length,
        },
      ],
    });

    this.setState({ mainInputValue: "" });

    console.log("wwww", this.state.mainInputValue);
  };

  handleDeleteAllTask = (id) => {
    console.log("delete All tasks");
    let deletedAllTasks = this.state.tasks.filter((item) => item.id === id);
    this.setState({ tasks: deletedAllTasks });
  };

  handleRemovetask(id) {
    let filtered = this.state.tasks.filter((item) => item.id !== id);

    this.setState({
      tasks: filtered,
    });

    console.log("filtered", filtered);
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
    console.log("id", id);
    console.log("checked", isChecked);
    console.log("updated list", updatedList);

    this.setState({
      tasks: updatedList,
    });
  }

  onChangeInputValue(e) {
    // console.log('e-wwd', e.target.value);
    this.setState({ mainInputValue: e.target.value });
  }
  handleUpdateTask = (id, isEnabled) => {
    console.log(id, isEnabled);
    let updatedList = this.state.tasks.map((item) => {
      if (item.id === id) {
        item.isDisabled = isEnabled;
      }
      return item;
    });
    console.log(updatedList);
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

    let tasks = this.state.tasks;
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
                value={this.state.mainInputValue}
                type="text"
              />
              <button
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
