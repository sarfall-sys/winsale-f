import React from 'react'

function Card( { children, className = "" } ) {
  return (
      <div className={`rounded-2xl bg-gray-800 p-4 shadow ${className}`}>
      {children}
    </div>
  )
}

export default Card