function TodoStats({ todos }) {
  const total = todos.length;
  const completed = todos.filter((t) => t.completed).length;
  const remaining = total - completed;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div
      className="mb-5 p-4 bg-gradient-to-r from-indigo-50 to-purple-50
                    rounded-xl border border-indigo-100"
    >
      <div className="flex justify-between items-center mb-3">
        <div className="flex gap-5">
          <div>
            <div className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
              Remaining
            </div>
            <div className="text-2xl font-bold text-indigo-600">
              {remaining}
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
              Completed
            </div>
            <div className="text-2xl font-bold text-green-600">{completed}</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
              Total
            </div>
            <div className="text-2xl font-bold text-gray-700">{total}</div>
          </div>
        </div>
        <div className="text-3xl font-extrabold text-indigo-600">
          {percent}%
        </div>
      </div>

      <div className="w-full h-2 bg-white rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500
                     rounded-full transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

export default TodoStats;
