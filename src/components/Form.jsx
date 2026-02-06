import React, { useState } from 'react'

function Form({ initialData, isEdit = false, onSubmit, fields }) {
  const [form, setForm] = useState(initialData || {});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(form);
  };

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-background dark:bg-background  p-6 rounded-xl shadow-lg border border-accent"
    >
      {fields.map(({ label, name, type }) => (
        <div key={name} className="flex flex-col gap-1 rounded-2xl">
          <label className="text-primary text-sm">{label}</label>
          <input
            type={type}
            name={name}
            value={form[name] || ""}
            onChange={onChange}
            className="px-3 py-2 rounded-lg bg-background dark:bg-background text-primary border border-primary focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
      ))}

      <button
        type="submit"
        className="w-full bg-light-blue-600 hover:bg-light-blue-500 text-white py-2 rounded-full transition"
      >
        {isEdit ? "Update" : "Create"}
      </button>
    </form>
  );
}

export default Form;
