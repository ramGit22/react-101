document.getElementById('addTaskBtn').addEventListener('click', addTask)

function addTask() {
  const taskInput = document.getElementById('taskInput')
  const taskText = taskInput.value.trim()

  if (taskText === '') {
    alert('Please enter a task.')
    return
  }

  const taskList = document.getElementById('taskList')

  // Create list item for new task
  const li = document.createElement('li')

  // Create checkbox to mark task as complete
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.addEventListener('change', function () {
    li.classList.toggle('completed')
  })

  // Create span to hold the task text
  const span = document.createElement('span')
  span.textContent = taskText

  // Create edit button
  const editButton = document.createElement('button')
  editButton.textContent = 'Edit'
  editButton.addEventListener('click', function () {
    if (editButton.textContent === 'Edit') {
      const editInput = document.createElement('input')
      editInput.type = 'text'
      editInput.value = span.textContent
      li.insertBefore(editInput, span)
      li.removeChild(span)
      editButton.textContent = 'Save'
    } else {
      const editInput = li.querySelector("input[type='text']")
      span.textContent = editInput.value.trim()
      li.insertBefore(span, editInput)
      li.removeChild(editInput)
      editButton.textContent = 'Edit'
    }
  })
  //Create delete button
  const deleteBtn = document.createElement('button')
  deleteBtn.textContent = 'Delete'
  deleteBtn.addEventListener('click', function () {
    li.remove()
  })

  // Append everything to the list item
  li.appendChild(checkbox)
  li.appendChild(span)
  li.appendChild(editButton)
  li.appendChild(deleteBtn)

  // Append the list item to the task list
  taskList.appendChild(li)

  // Clear the input field after adding the task
  taskInput.value = ''
}
