function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li
      className="flex items-center gap-3 px-4 py-3 bg-white border
                   border-gray-200 rounded-lg shadow-sm hover:shadow-md
                   transition group"
    >
      <button
        onClick={() => onToggle(todo.id)}
        className={`w-5 h-5 rounded-full border-2 flex items-center
                    justify-center transition
                    ${
                      todo.completed
                        ? "bg-indigo-600 border-indigo-600"
                        : "border-gray-300 hover:border-indigo-500"
                    }`}
      >
        {todo.completed && (
          <svg
            className="w-3 h-3 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </button>

      <span
        className={`flex-1 transition ${
          todo.completed ? "line-through text-gray-400" : "text-gray-800"
        }`}
      >
        {todo.text}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        className="px-3 py-1 text-sm text-red-600 rounded-md
                   hover:bg-red-50 opacity-0 group-hover:opacity-100
                   transition"
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
