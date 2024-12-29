
// Theme Switching and Customization
const switchThemeButton = document.getElementById('switchTheme');
const customizeColourButton = document.getElementById('customizeColour'); // Corrected ID
const decksAndMixer = document.querySelectorAll('.deck, .mixer');
const djSetAndMusicDisplay = document.querySelectorAll('.dj-set, .music-sampler-display');
const allButtons = document.querySelectorAll('.button');

// Variables to track states
let isDarkTheme = false;
let isRedTheme = true;

// Switch Theme functionality
switchThemeButton.addEventListener('click', () => {
    isDarkTheme = !isDarkTheme;
    document.body.style.background = isDarkTheme
        ? 'linear-gradient(to bottom, #222, #444)' // Metallic black effect
        : 'linear-gradient(to bottom, #eee, #bbb)'; // Metallic light effect
    djSetAndMusicDisplay.forEach(element => {
        element.classList.toggle('dark-gray-theme', isDarkTheme);
    });
});

// Customize Colour functionality
customizeColourButton.addEventListener('click', () => {
    isRedTheme = !isRedTheme; // Toggle state
    decksAndMixer.forEach(element => {
        element.style.background = isRedTheme
            ? 'linear-gradient(to bottom, #fff, #eee)' // Metallic White effect
            : 'linear-gradient(to bottom, #222, #444)'; // Metallic Grey effect (like the header)
        element.classList.toggle('dark-gray-color', !isRedTheme);
    });
});


// Upload and Playback of Track
// Deck A Elements
const fileInputA = document.getElementById("fileA");
const playPauseButtonA = document.getElementById("playPauseMusicA");
const audioDeckA = document.getElementById("audioDeckA");
const volumeSliderA = document.getElementById("channelAVolume");

// Deck B Elements
const fileInputB = document.getElementById("fileB");
const playPauseButtonB = document.getElementById("playButtonB");
const audioDeckB = document.getElementById("audioDeckB");
const volumeSliderB = document.getElementById("channelBVolume");

// Upload Track for Deck A
fileInputA.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
        const url = URL.createObjectURL(file);
        audioDeckA.src = url;
        audioDeckA.load();
    }
});

// Play/Pause for Deck A
let isPlayingA = false;
playPauseButtonA.addEventListener("click", () => {
    if (audioDeckA.paused) {
        audioDeckA.play();
        isPlayingA = true;
        playPauseButtonA.textContent = "PAUSE";
    } else {
        audioDeckA.pause();
        isPlayingA = false;
        playPauseButtonA.textContent = "PLAY";
    }
});

// Volume Control for Deck A
volumeSliderA.addEventListener("input", (event) => {
    audioDeckA.volume = event.target.value / 100;
});

// Upload Track for Deck B
fileInputB.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
        const url = URL.createObjectURL(file);
        audioDeckB.src = url;
        audioDeckB.load();
    }
});

// Play/Pause for Deck B
let isPlayingB = false;
playPauseButtonB.addEventListener("click", () => {
    if (audioDeckB.paused) {
        audioDeckB.play();
        isPlayingB = true;
        playPauseButtonB.textContent = "PAUSE";
    } else {
        audioDeckB.pause();
        isPlayingB = false;
        playPauseButtonB.textContent = "PLAY";
    }
});

// Volume Control for Deck B
volumeSliderB.addEventListener("input", (event) => {
    audioDeckB.volume = event.target.value / 100;
});

// Sync Functionality button for Deck A 

const syncButtonA = document.getElementById("syncButtonA");
syncButtonA.addEventListener("click", () => {
    if (!audioDeckA.paused && !audioDeckB.paused) {
        audioDeckB.currentTime = audioDeckA.currentTime;
    }
});

// Sync Functionality button for Deck B
const syncButtonB = document.getElementById("syncButtonB");
syncButtonB.addEventListener("click", () => {
    if (!audioDeckA.paused && !audioDeckB.paused) {
        audioDeckA.currentTime = audioDeckB.currentTime;
    }
});













