import React from "react";

function Task(props) {
  console.log("props", props);

  const handleRemovetask = (id) => {
    props.handleRemove(id);
    console.log("remove task");
  };
  const _handleChangeCheckbox = (e, id) => {
    console.log("e", e);
    props.handleCheckbox(id, e.target.checked);
  };
  const handleEditTodoItem = (e) => {
    console.log("edit", e);
  };

  return (
    <div className="task-wrapper">
      <label htmlFor="">Task:</label>
      <input
        className="task-input"
        type="text"
        name=""
        id=""
        value={props.item.title}
        // onChange={handleChange}
      />
      <button>Update</button>
      <button
        disabled={!props.item.isChecked}
        onClick={() => handleRemovetask(props.item.id)}
      >
        ❌
      </button>
      <button onClick={() => handleEditTodoItem(Task)}>✎</button>

      <button>⬇</button>
      <button>⬆</button>
      <input
        checked={props.item.isChecked}
        onChange={(e) => _handleChangeCheckbox(e, props.item.id)}
        type="checkbox"
      />
    </div>
  );
}

export default Task;
