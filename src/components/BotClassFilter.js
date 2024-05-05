import React from 'react'
import "./BotClassFilter.css"

// Function to allow filtering of the bots based on their class
function BotClassFilter({classes, handleFilter}) {
  return (
    <div>
        {classes.map((cls, index) => (
            <button key={index} onClick={() => handleFilter(cls)}>{cls}</button>
        ))}
    </div>
  )
}

export default BotClassFilter;