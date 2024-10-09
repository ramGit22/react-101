document.addEventListener('DOMContentLoaded', function () {
  let votes = JSON.parse(localStorage.getItem('votes')) || {
    'Option A': 0,
    'Option B': 0,
    'Option C': 0,
  }

  const ul = document.getElementById('pollOptions')
  const btns = ul.getElementsByClassName('voteBtn')
  const pollResults = document.getElementById('pollResults')

  function updateList() {
    pollResults.innerHTML = ''
    for (let item in votes) {
      const li = document.createElement('li')
      li.textContent = `${item}: ${votes[item]} votes`
      li.className = 'poll-option'
      pollResults.appendChild(li)
    }
    localStorage.setItem('votes', JSON.stringify(votes))
  }

  Array.from(btns).forEach((button) => {
    button.addEventListener('click', function () {
      const option = this.parentElement.querySelector('span').textContent
      votes[option] += 1
      updateList()
    })
  })

  updateList()
})
