import { useState } from "react";

function Task(props) {
  const [doneTask, setDoneTask] = useState(false);
  const [isEdited, setIsEdited] = useState(false);
  const handleRemovetask = (id) => {
    props.handleRemove(id);
  };
  const handleIsDonetask = (id) => {
    setDoneTask(!doneTask);
   
  };
  const _handleChangeCheckbox = (e, id) => {
    props.handleCheckbox(id, e.target.checked);
  };
  const _handleEditTask = (e, id) => {
    props.handleEdit(id, false);
    setIsEdited(!isEdited);
  };
  const _handleUpdateTask = (e, id) => {
    props.handleUpdate(id, true);
  };
  function onChangeInputValue(e) {
    console.log("target change", e);
  }
  const handleMoveDown = (e) => {
    props.handlePosition(props.item, "down");
  };

  const handleMoveUp = (e) => {
    props.handlePosition(props.item, "up");
  };

  return (
    <div className="task-wrapper">
      <label htmlFor="">Task:</label>
      <input
        disabled={props.item.isDisabled}
        onChange={(event) => onChangeInputValue(event)}
        className={
          doneTask
            ? "isDoneTask"
            : "task-input" && isEdited
            ? "isEdited"
            : "task-input"
        }
        type="text"
        name=""
        id=""
        defaultValue={props.item.title}
      />

      <button onClick={(e) => _handleEditTask(e, props.item.id)}>✎</button>
      <button onClick={(e) => _handleUpdateTask(e, props.item.id)}>
        Update
      </button>

      <button onClick={(e) => handleMoveDown(e, props.item.id)}>DOWN</button>
      <button onClick={(e) => handleMoveUp(e, props.item.id)}>UP</button>
      <button onClick={() => handleRemovetask(props.item.id)}>❌</button>
      <button
        className="isDone-btn"
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
