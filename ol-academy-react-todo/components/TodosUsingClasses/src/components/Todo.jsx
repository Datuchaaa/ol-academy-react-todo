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
        },
      ],
    });
    // eslint-disable-next-line no-unused-expressions
    this.setState({ mainInputValue: "" });

    console.log("wwww", this.state.mainInputValue);

    // this.setState({showAddedTask: true, selectedForEdit:tasks,})
  };

  handleRemovetask(id) {
    // console.log("e ---", id);
    // console.log("tasks", this.state.tasks);

    let filtered = this.state.tasks.filter((item) => item.id !== id);

    this.setState({
      tasks: filtered,
    });

    console.log("filtered", filtered);
  }

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
    // this.setState({
    //   tasks: filtered,
    // })
  }

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
                placeholder="Enter task"
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
              handleRemove={(id) => this.handleRemovetask(id)}
              handleCheckbox={(id, isCheked) =>
                this.handleChangeCheckbox(id, isCheked)
              }
            />
          );
        })}
      </div>
    );
  }
}

export default Todo;
