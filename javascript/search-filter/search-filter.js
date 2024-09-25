document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput')
  const ul = document.getElementById('itemList')
  const li = ul.getElementsByTagName('li')

  searchInput.addEventListener('keyup', function () {
    const searchInputValue = searchInput.value.toLowerCase()

    for (let i = 0; i < li.length; i++) {
      const itemText = li[i].innerText.toLowerCase()
      const startIndex = itemText.indexOf(searchInputValue)

      if (startIndex !== -1) {
        const endIndex = startIndex + searchInputValue.length
        const highlightedText = li[i].innerText.substring(startIndex, endIndex)
        const newText =
          li[i].innerText.substring(0, startIndex) +
          `<span style='background-color:yellow'>${highlightedText}</span>` +
          li[i].innerText.substring(endIndex)
        li[i].innerHTML = newText
        li[i].style.display = ''
      } else {
        li[i].style.display = 'none'
      }
    }
  })
})
