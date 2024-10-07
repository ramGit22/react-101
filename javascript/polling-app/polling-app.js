document.addEventListener('DOMContentLoaded', function () {
  const ul = document.getElementById('pollOptions')
  const btns = ul.getElementsByTagName('button')
  const pollResults = document.getElementById('pollResults')
  let votes = { 'Option A': 0, 'Option B': 0, 'Option C': 0 }

  function updateList() {
    pollResults.innerHTML = ''
    for (let item in votes) {
      const li = document.createElement('li')
      li.textContent = `${item}: ${votes[item]} votes`
      li.className = 'poll-option'
      pollResults.appendChild(li)
    }
  }

  for (let item in btns) {
    btns[item].addEventListener('click', function () {
      const option = this.parentElement.querySelector('span').textContent
      votes[option] += 1
      updateList()
    })
  }
})
