import React from "react";

function Table({ columns, data, onEdit, onDelete }) {
  return (
    <table className="w-full border-collapse text-left text-sm text-gray-700 dark:text-gray-300">
      <thead className="bg-primary dark:bg-secondary text-gray-700 dark:text-gray-200 rounded-t-lg overflow-hidden">
        <tr>
          {columns.map((column, index) => (
            <th
              key={index}
              className={`px-4 py-3 font-medium uppercase tracking-wide ${
                index === 0 ? "rounded-tl-lg" : ""
              } ${index === columns.length - 1 ? "rounded-tr-lg" : ""}`}
            >
              {column.label || Object.keys(column)[0]}
            </th>
          ))}
          <th className="px-4 py-3 font-medium uppercase rounded-tr-lg">Actions</th>
        </tr>
      </thead>

      <tbody>
        {data.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className="border-b border-accent hover:bg-primary dark:hover:bg-secondary transition"
          >
            {columns.map((column, colIndex) => (
              <td key={colIndex} className="px-4 py-3 text-text-primary dark:text-text-primary">
                {row[column.key]}
              </td>
            ))}
            <td className="px-4 py-3 flex gap-2">
              <button
                onClick={() => onEdit(row)}
                className="px-3 py-1 rounded-full bg-light-blue-600 hover:bg-light-blue-500 transition text-white"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(row)}
                className="px-3 py-1 rounded-full bg-magenta-bloom-600 hover:bg-magenta-bloom-500 transition text-white"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
