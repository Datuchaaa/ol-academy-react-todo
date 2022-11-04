import React from "react";

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      showEditor: false,
      doneTask: false,
      isEdited: false,
      item: props.item,
    };
  }

  handleChange = (event) => {
    this.setState({ iputValue: event.target.value });
  };

  _handleUpdateTask = (e, id) => {
    this.props.handleUpdate(id, true);
  };

  handleRemovetask = (id) => {
    this.props.handleRemove(id);
    console.log("remove task");
  };
  handleIsDonetask = (id) => {
    console.log("DONE", !this.state.doneTask);
    this.setState({ doneTask: !this.state.doneTask });
  };
  handleChangeCheckbox = (e, id) => {
    console.log("e", e);
    this.props.handleCheckbox(id, e.nativeEvent.target.checked);
  };
  _handleEditTask = (e, id) => {
    console.log("edit", e);
    this.props.handleEdit(id, false);
    this.setState({ isEdited: !this.state.isEdited });
  };

  handleMoveDown = (e) => {
    console.log(e, "movedown");
    this.props.handlePositionChange(this.state.item, "down");
  };

  handleMoveUp = (e) => {
    console.log(e, "moveup");
    this.props.handlePositionChange(this.state.item, "up");
  };

  render() {
    // console.log("DONE@@" , !this.state.doneTask)
    return (
      <div className="task-wrapper">
        <label htmlFor="">Task:</label>
        <input
          disabled={this.state.item.isDisabled}
          className={
            this.state.doneTask
              ? "isDoneTask"
              : "task-input" && this.state.isEdited
              ? "isEdited"
              : "task-input"
          }
          type="text"
          name=""
          id=""
          defaultValue={this.state.item.title}
          onChange={this.handleChange}
        />
        <button onClick={(e) => this._handleEditTask(e, this.state.item.id)}>
          ✎
        </button>
        <button onClick={(e) => this._handleUpdateTask(e, this.state.item.id)}>
          Update
        </button>

        <button onClick={(e) => this.handleMoveDown(this.state.item.id)}>
          DOWN
        </button>
        <button onClick={(e) => this.handleMoveUp(this.state.item.id)}>
          UP
        </button>
        <button
          disabled={!this.state.item.isChecked}
          onClick={() => this.handleRemovetask(this.state.item.id)}
        >
          ❌
        </button>
        <button
          className="isDone-btn"
          disabled={!this.state.item.isChecked}
          onClick={() => this.handleIsDonetask(this.state.item.id)}
        >
          ✔️
        </button>
        <input
          checked={this.state.item.isChecked}
          onChange={(e) => this.handleChangeCheckbox(e, this.state.item.id)}
          type="checkbox"
        />
      </div>
    );
  }
}

export default Task;
