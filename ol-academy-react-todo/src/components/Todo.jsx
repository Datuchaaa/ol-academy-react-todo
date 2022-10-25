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

  handleCloseEditor = () => {
    this.setState({ showEditor: false });
  };
  handleAddTask = () => {
    // this.setState({mainInputValue: e.target.value});
    // console.log("sss");
    
    this.setState({
      tasks: [
        ...this.state.tasks,
        { id: this.state.tasks.length, title: this.state.mainInputValue },
      ],
    });
    // eslint-disable-next-line no-unused-expressions
    this.setState({ mainInputValue: "" });
    if (this.state.mainInputValue === ""){
        alert("Please Enter Task")
    }
    console.log(this.state.mainInputValue);

    // this.setState({showAddedTask: true, selectedForEdit:tasks,})
  };

  // handleDeleteTodoItem = (id) => {
  //     // console.log("delete", id)
  //     const filtredTodos = this.state.todos.filter((todo) => todo.id !== id)
  //     this.setState({todos: filtredTodos})

  // }
//   handleEditTodoItem = (todo) => {
//     // console.log("edit", todo)
//     this.setState({ showEditor: true, selectedForEdit: todo });
//   };
  //   handleUpdateTodo = (updatedTask) => {
  //     const updatedTasks = this.state.tasks.map((tasks) => {
  //       if (tasks.id === updatedTask.id) {
  //         return updatedTask;
  //       }
  //       return tasks;
  //     });
  //     //    console.log(updatedTodos)
  //     this.setState({ tasks: updatedTasks });
  //     this.handleCloseEditor();
  //   };

  onChangeInputValue(e) {
    // console.log('e-wwd', e.target.value);
    this.setState({ mainInputValue: e.target.value });
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <div className="input-wrapper">
              <input
                onChange={(event) => this.onChangeInputValue(event)}
                value={this.state.mainInputValue}
                type="text"
              />
              <button onClick={() => this.handleAddTask("")}>➕</button>

              <div></div>
            </div>
          </li>
        </ul>

        {this.state.tasks.map((item) => {
          return (
            <Task
              key={item.id}
              item={item}
              //   currentTodo={this.state.selectedForEdit}
              handleUpdate={this.handleUpdateTodo}
              handleRemove={this.handleRemovetask}
            />
          );
        })}
      </div>
    );
  }
}

export default Todo;
