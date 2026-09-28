import { useState } from "react";

function TodoInput({ onAdd }) {
  const [text, setText] = useState("");

  function handleAdd() {
    if (!text.trim()) return;
    onAdd(text.trim());
    setText("");
  }

  return (
    <div className="flex gap-2 mb-5">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        placeholder="What needs to be done?"
        className="flex-1 px-4 py-2.5 rounded-lg border border-gray-300
                   focus:outline-none focus:ring-2 focus:ring-indigo-500
                   transition"
      />
      <button
        onClick={handleAdd}
        disabled={!text.trim()}
        className="px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-lg
                   hover:bg-indigo-700 active:scale-95
                   disabled:opacity-40 disabled:cursor-not-allowed
                   transition"
      >
        Add
      </button>
    </div>
  );
}

export default TodoInput;
