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
    console.log("sdsdsdsdsd");
    this.props.handleRemove(id);
  };
  handleIsDonetask = (id) => {
    this.setState({ doneTask: !this.state.doneTask });
  };
  handleChangeCheckbox = (e, id) => {
    this.props.handleCheckbox(id, e.nativeEvent.target.checked);
  };
  _handleEditTask = (e, id) => {
    this.props.handleEdit(id, false);
    this.setState({ isEdited: !this.state.isEdited });
  };

  handleMoveDown = (e) => {
    this.props.handlePositionChange(this.state.item, "down");
  };

  handleMoveUp = (e) => {
    this.props.handlePositionChange(this.state.item, "up");
  };

  render() {
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
          // disabled={!this.state.item.isChecked}
          onClick={() => this.handleRemovetask(this.state.item.id)}
        >
          ❌
        </button>
        <button
          className="isDone-btn"
          // disabled={!this.state.item.isChecked}
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
