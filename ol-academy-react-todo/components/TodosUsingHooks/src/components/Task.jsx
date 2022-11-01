import { useState } from "react";

function Task(props) {
  // console.log("props", props);
const [doneTask, setDoneTask] = useState(false)
  const handleRemovetask = (id) => {
    props.handleRemove(id);
    console.log("remove task");
  };
  const handleIsDonetask = (id) => {
    console.log("DONE", );
    setDoneTask(!doneTask)
    
    
  };
  const _handleChangeCheckbox = (e, id) => {
    // console.log("e", e);
    props.handleCheckbox(id, e.target.checked);
  };
  const _handleEditTask = (e, id) => {
    console.log("edit", e);
    props.handleEdit(id, false);
  };
  const _handleUpdateTask = (e, id) => {
    console.log("update", props);
    props.handleUpdate(id, true);
  };
  function onChangeInputValue(e) {
    console.log("target change", e);
  }

  return (
    <div className="task-wrapper">
      <label htmlFor="">Task:</label>
      <input
        disabled={props.item.isDisabled}
        onChange={(event) => onChangeInputValue(event)}
        className={doneTask ? "isDoneTask" : "task-input"}
        type="text"
        name=""
        id=""
        defaultValue={props.item.title}
        // onChange={props.handleChange}
      />

      <button onClick={(e) => _handleEditTask(e, props.item.id)}>✎</button>
      <button onClick={(e) => _handleUpdateTask(e, props.item.id)}>
        Update
      </button>

      <button>⬇</button>
      <button>⬆</button>
      <button
        disabled={!props.item.isChecked}
        onClick={() => handleRemovetask(props.item.id)}
      >
        ❌
      </button>
      <button
        className="isDone-btn"
        disabled={!props.item.isChecked}
        onClick={() => handleIsDonetask(props.item.id)}
      >
        ✔️
      </button>
      <input
        checked={props.item.isChecked}
        onChange={(e) => _handleChangeCheckbox(e, props.item.id)}
        type="checkbox"
      />
    </div>
  );
}

export default Task;
