import React from 'react'

function AddButton({ onClick }) {
  return (
    <button 
    onClick={onClick}
    className="bg-jungle-teal-600 hover:bg-jungle-teal-500 text-white px-4 py-2 rounded-full transition"
    >Add</button>
  )
}

export default AddButton