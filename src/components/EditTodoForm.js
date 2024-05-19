import React, { useState } from "react";

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();

    editTodo(value, task.id);

    setValue("");
  };
  return (
    <form className="EditTodoForm flex w-full" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input p-4 flex-grow rounded-l-lg text-white font-semibold bg-indigo-950 outline outline-1 outline-blue-600 "
        value={value}
        placeholder="Update Task"
        onChange={(e) => setValue(e.target.value)}
      />

      <button
        type="submit"
        className="todo-btn bg-blue-600 outline-blue-600 text-white font-semibold px-4 hover:cursor-pointer ml-auto rounded-r-lg"
      >
        Update Task
      </button>
    </form>
  );
};

export default EditTodoForm;
