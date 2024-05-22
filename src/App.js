import Todo from "./components/Todo";
import TodoWrapper from "./components/TodoWrapper";

function App() {
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center bg-indigo-950 h-fit w-1/2 p-4">
        <h1 className="text-3xl mb-4 font-bold text-white">My TodoApp</h1>
        <TodoWrapper />
      </div>
    </div>
  );
}

export default App;
