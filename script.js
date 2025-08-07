const playPauseBtn = document.querySelector(".play-pause-btn")
const theaterBtn = document.querySelector(".theater-btn")
const fullScreenBtn = document.querySelector(".full-screen-btn")
const miniPlayerBtn = document.querySelector(".mini-player-btn")
const muteBtn = document.querySelector(".mute-btn")
const captionsBtn = document.querySelector(".captions-btn")
const speedBtn = document.querySelector(".speed-btn")
const currentTimeElem = document.querySelector(".current-time")
const totalTimeElem = document.querySelector(".total-time")
const previewImg = document.querySelector(".preview-img")
const thumbnailImg = document.querySelector(".thumbnail-img")
const volumeSlider = document.querySelector(".volume-slider")
const videoContainer = document.querySelector(".video-container")
const timelineContainer = document.querySelector(".timeline-container")
const video = document.querySelector("video")

document.addEventListener("keydown", (e) => {
  const tagName = document.activeElement.tagName.toLowerCase()

  if (tagName === "input" || tagName === "textarea") return

  const key = e.key.toLowerCase()
  switch (key) {
    case " ":
      if (tagName === "button") return
    case "k":
      togglePlayPause()
      break
    case "f":
      toggleFullScreen()
      break
    case "t":
      toggleTheater()
      break
    case "i":
      toggleMiniPlayer()
      break
    case "m":
      toggleMute()
  }
})

// Volume

muteBtn.addEventListener("click", toggleMute)
volumeSlider.addEventListener("input", updateVolume)

function toggleMute() {
  video.muted = !video.muted
}

function updateVolume() {
  video.volume = volumeSlider.value
  video.muted = volumeSlider.value === 0
}

video.addEventListener("volumechange", () => {
  volumeSlider.value = video.volume
  let volumeLevel
  if (video.volume === 0 || video.muted) {
    volumeLevel = "muted"
  } else if (video.volume < 0.5) {
    volumeLevel = "low"
  } else {
    volumeLevel = "high"
  }
  videoContainer.dataset.volumeLevel = volumeLevel
})

// View mode
miniPlayerBtn.addEventListener("click", toggleMiniPlayer)
theaterBtn.addEventListener("click", toggleTheater)
fullScreenBtn.addEventListener("click", toggleFullScreen)

function toggleMiniPlayer() {
  if (videoContainer.classList.contains("mini-player")) {
    document.exitPictureInPicture()
  } else {
    video.requestPictureInPicture()
  }
}

function toggleTheater() {
  videoContainer.classList.toggle("theater")
}

function toggleFullScreen() {
  if (document.fullscreenElement == null) {
    videoContainer.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}

videoContainer.addEventListener("fullscreenchange", () => {
  if (document.fullscreenElement == null) {
    videoContainer.classList.remove("full-screen")
  } else {
    videoContainer.classList.add("full-screen")
  }
})

videoContainer.addEventListener("enterpictureinpicture", () => {
  videoContainer.classList.add("mini-player")
})

videoContainer.addEventListener("leavepictureinpicture", () => {
  videoContainer.classList.remove("mini-player")
})

// Play/Pause

playPauseBtn.addEventListener("click", togglePlayPause)
video.addEventListener("click", togglePlayPause)

function togglePlayPause() {
  if (video.paused) {
    video.play()
  } else {
    video.pause()
  }
}

video.addEventListener("play", () => {
  videoContainer.classList.remove("paused")
})

video.addEventListener("pause", () => {
  videoContainer.classList.add("paused")
})