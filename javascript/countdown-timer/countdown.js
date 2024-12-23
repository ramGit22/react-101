document.addEventListener('DOMContentLoaded', function () {
  const startBtn = document.getElementById('startBtn')
  const timerDisplay = document.getElementById('timerDisplay')
  let countdown
  let timeInSeconds = 0 // Store total time in seconds
  let isPaused = false // Track whether the countdown is paused

  startBtn.addEventListener('click', function () {
    let minutes = parseInt(document.getElementById('minutes').value, 10)
    let seconds = parseInt(document.getElementById('seconds').value, 10)
    if (!isPaused) {
      timeInSeconds = minutes * 60 + seconds
    }
    function formatTime(timeInSeconds) {
      let minutes = Math.floor(timeInSeconds / 60)
      let seconds = timeInSeconds % 60

      // Add leading zeros if necessary
      return `${String(minutes).padStart(
        2,
        '0'
      )}:${String(seconds).padStart(2, '0')}`
    }

    timerDisplay.innerText = formatTime(timeInSeconds)

    // Clear any existing intervals
    if (countdown) {
      clearInterval(countdown)
    }

    // Start the countdown
    countdown = setInterval(() => {
      timeInSeconds--
      timerDisplay.innerText = formatTime(timeInSeconds)

      if (timeInSeconds <= 0) {
        clearInterval(countdown)
        timerDisplay.innerText = '00:00'
      }
    }, 1000)
    isPaused = false
  })
  pauseBtn.addEventListener('click', function () {
    if (countdown) {
      clearInterval(countdown)
      isPaused = true // Set paused state to true
    }
  })
})
