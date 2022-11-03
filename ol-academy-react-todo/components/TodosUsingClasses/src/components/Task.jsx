import React from "react";

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      showEditor: false,
      doneTask: false,
      item: props.item,
    };
  }
  handleChange = (event) => {
    this.setState({ iputValue: event.target.value });
  };
  handleUpdate = () => {
    this.props.handleUpdate({
      id: this.props.currentTodo.id,
      title: this.state.iputValue,
    });
    // console.log(this.state.iputValue)
  };

  handleRemovetask = (id) => {
    this.props.handleRemove(id);
    console.log("remove task");
  };
  handleIsDonetask = (id) => {
    console.log("DONE");
    let doneTask = this.state.doneTask;
    this.setState({ tasks: !doneTask });
  };
  handleChangeCheckbox = (e, id) => {
    console.log("e", e);
    this.props.handleCheckbox(id, e.nativeEvent.target.checked);
  };
  _handleEditTask = (e, id) => {
    console.log("edit", e);
    this.setState.handleEdit(id, false);
  };

  render() {
    return (
      <div className="task-wrapper">
        <label htmlFor="">Task:</label>
        <input
          disabled={this.state.item.isDisabled}
          className={this.state.doneTask ? "isDoneTask" : "task-input"}
          type="text"
          name=""
          id=""
          value={this.state.item.title}
          onChange={this.handleChange}
        />
        <button onClick={(e) => this._handleEditTask(e, this.state.item.id)}>✎</button>
        <button onClick={this.handleUpdate}>Update</button>

        <button>⬇</button>
        <button>⬆</button>
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
