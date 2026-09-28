import { useState } from "react";
import TodoInput from "./components/TodoInput"; // ✅ fixed typo
import TodoList from "./components/TodoList";
import TodoStats from "./components/TodoStats";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(text) {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900">Todo List</h1>
          <p className="text-gray-500 mt-2">
            Stay Locked in jor. Get things done.
          </p>
        </header>

        <main
          className="bg-white/80 backdrop-blur-sm rounded-2xl
                         shadow-xl shadow-indigo-200/50 border border-white
                         p-6 md:p-8"
        >
          <TodoInput onAdd={addTodo} />
          <TodoStats todos={todos} />
          <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
        </main>

        {/* <footer className="text-center text-xs text-gray-400 mt-6">
          
        </footer> */}
      </div>
    </div>
  );
}

export default App;
