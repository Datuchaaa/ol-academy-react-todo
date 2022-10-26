import React from "react";

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      showEditor: false,

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
  handleChangeCheckbox = (e, id) => {
    console.log("e", e);
    this.props.handleCheckbox(id, e.nativeEvent.target.checked);
  };
  handleEditTodoItem = (e) => {
    console.log("edit", e);
  };

  render() {
    return (
      <div className="task-wrapper">
        <label htmlFor="">Task:</label>
        <input
          className="task-input"
          type="text"
          name=""
          id=""
          value={this.state.item.title}
          onChange={this.handleChange}
        />
        <button onClick={this.handleUpdate}>Update</button>
        <button
          disabled={!this.state.item.isChecked}
          onClick={() => this.handleRemovetask(this.state.item.id)}
        >
          ❌
        </button>
        <button onClick={() => this.handleEditTodoItem(Task)}>✎</button>

        <button>⬇</button>
        <button>⬆</button>
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
