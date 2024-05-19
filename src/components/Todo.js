import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ task, toggleComplete, deleteTodo, editTodo, color }) => {
  return (
    <div className="Todo">
      <div
        className={`flex justify-between my-4 p-4 rounded-lg text-white font-semibold text-xl ${color}`}
      >
        <p
          onClick={() => toggleComplete(task.id)}
          className={`${task.completed ? "line-through text-gray-500" : ""}`}
        >
          {task.task}
        </p>

        <div>
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="mx-4 text-lg hover:text-2xl"
            onClick={() => editTodo(task.id)}
          />
          <FontAwesomeIcon
            icon={faTrash}
            className="mx-4 text-lg hover:text-2xl"
            onClick={() => deleteTodo(task.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default Todo;
