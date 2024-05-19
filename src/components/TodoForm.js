import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(value);

    setValue("");
  };
  return (
    <form className="TodoForm flex w-full" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input p-4 flex-grow rounded-l-lg text-white font-semibold bg-indigo-950 outline outline-1 outline-blue-600"
        value={value}
        placeholder="What is the task of the day?"
        onChange={(e) => setValue(e.target.value)}
      />

      <button
        type="submit"
        className="todo-btn bg-blue-600 outline-blue-600 text-gray-800 text-lg hover:text-white font-semibold px-4 hover:cursor-pointer ml-auto rounded-r-lg "
      >
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
