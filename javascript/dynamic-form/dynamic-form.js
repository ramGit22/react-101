document.addEventListener('DOMContentLoaded', function () {
  const addFieldBtn = document.getElementById('addFieldBtn')
  const fieldList = document.getElementById('fieldList')
  const submitBtn = document.getElementById('submitBtn')
  addFieldBtn.addEventListener('click', function () {
    const itemList = document.createElement('li')
    const inputField = document.createElement('input')
    const deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = 'Delete'
    itemList.appendChild(inputField)
    itemList.appendChild(deleteBtn)
    fieldList.appendChild(itemList)

    deleteBtn.addEventListener('click', function () {
      fieldList.removeChild(itemList)
    })
  })
  submitBtn.addEventListener('click', function (event) {
    event.preventDefault()
    const inputs = fieldList.getElementsByTagName('input')
    const values = []
    for (let i = 0; i < inputs.length; i++) {
      let inputValues = inputs[i].value.trim()
      if (inputValues === '') {
        alert('Please fill in all the input fields')
        break
      } else {
        values.push(inputValues)
      }
    }
    console.log('inputvalue', values)
  })
})
