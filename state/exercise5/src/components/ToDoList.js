import React, { useState } from 'react'

const ToDoList = () => {
  const [inputValue, setInputValue] = useState('')
  const [tasks, setTasks] = useState([])

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const addTasks = () => {
    setTasks([...tasks, inputValue])
    setInputValue('')
  }

  const handleRemove = (index) => {
    //The underscore (_) in the filter function is used as a placeholder for a parameter that we don't need to use.
    const newTasks = tasks.filter((_, i) => i !== index)
    setTasks(newTasks)
  }
  return (
    <div>
      <input value={inputValue} onChange={handleChange} />
      <button onClick={addTasks}>Add Tasks</button>
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
          <button onClick={() => handleRemove(index)}>Remove</button>
        </li>
      ))}
    </div>
  )
}

export default ToDoList
