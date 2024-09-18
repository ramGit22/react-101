document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput')
  const ul = document.getElementById('itemList')
  const li = ul.getElementsByTagName('li')

  searchInput.addEventListener('keyup', function () {
    const searchInputValue = searchInput.value.toLowerCase()

    for (i = 0; i < li.length; i++) {
      const listValues = li[i].textContent.toLowerCase()
      if (listValues.includes(searchInputValue)) {
        li[i].style.display = ''
      } else {
        li[i].style.display = 'none'
      }
    }
  })
})
