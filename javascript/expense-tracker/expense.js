document.addEventListener('DOMContentLoaded', () => {
  const descriptionInput = document.getElementById('description')
  const amountInput = document.getElementById('amount')
  const dateInput = document.getElementById('date')
  const addExpenseBtn = document.getElementById('addExpenseBtn')
  const expenseList = document.getElementById('expenseList')
  const totalAmountDisplay = document.getElementById('totalAmount')
  const monthFilter = document.getElementById('monthFilter')

  let expenses = []
  let totalAmount = 0

  // Function to format date to YYYY-MM for filtering
  function formatDateToMonth(date) {
    const d = new Date(date)
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
  }

  // Function to update the total expenses display
  function updateTotalAmount() {
    totalAmount = expenses.reduce(
      (acc, expense) => acc + parseFloat(expense.amount),
      0
    )
    totalAmountDisplay.textContent = totalAmount.toFixed(2)
  }

  // Function to render expenses on the page
  function renderExpenses(filteredExpenses = expenses) {
    expenseList.innerHTML = '' // Clear the list
    filteredExpenses.forEach((expense, index) => {
      const li = document.createElement('li')
      li.classList.add('expense-item')

      const expenseContent = `${expense.description} - $${
        expense.amount
      } - ${new Date(expense.date).toLocaleDateString()}`
      li.textContent = expenseContent

      // Add a delete button for each expense item
      const deleteBtn = document.createElement('button')
      deleteBtn.textContent = 'Delete'
      deleteBtn.onclick = () => {
        expenses.splice(index, 1) // Remove the expense from the array
        updateTotalAmount()
        renderExpenses()
      }

      li.appendChild(deleteBtn)
      expenseList.appendChild(li)
    })
  }

  // Event listener for adding an expense
  addExpenseBtn.addEventListener('click', () => {
    const description = descriptionInput.value.trim()
    const amount = parseFloat(amountInput.value)
    const date = dateInput.value

    if (description && !isNaN(amount) && date) {
      const newExpense = { description, amount, date }
      expenses.push(newExpense)

      // Clear input fields
      descriptionInput.value = ''
      amountInput.value = ''
      dateInput.value = ''

      // Update total amount and re-render the expense list
      updateTotalAmount()
      renderExpenses()
    } else {
      alert('Please enter a valid description, amount, and date.')
    }
  })

  // Event listener for filtering expenses by month
  monthFilter.addEventListener('input', () => {
    const selectedMonth = monthFilter.value // YYYY-MM format
    if (selectedMonth) {
      const filteredExpenses = expenses.filter(
        (expense) => formatDateToMonth(expense.date) === selectedMonth
      )
      renderExpenses(filteredExpenses)
    } else {
      renderExpenses() // No filter, show all expenses
    }
  })
})
