
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

// Cue Functionality for Deck A
const cuePointsA = [5, 15, 45, 60]; // Seconds

document.getElementById("cue1A").addEventListener("click", () => {
    audioDeckA.currentTime = cuePointsA[0];
});

document.getElementById("cue2A").addEventListener("click", () => {
    audioDeckA.currentTime = cuePointsA[1];
});

document.getElementById("cue3A").addEventListener("click", () => {
    audioDeckA.currentTime = cuePointsA[2];
});

document.getElementById("cue4A").addEventListener("click", () => {
    audioDeckA.currentTime = cuePointsA[3];
});

// Cue Functionality for Deck B

const cuePointsB = [5, 15, 45, 60]; // Seconds

document.getElementById("cue1B").addEventListener("click", () => {
    audioDeckB.currentTime = cuePointsB[0];
});

document.getElementById("cue2B").addEventListener("click", () => {
    audioDeckB.currentTime = cuePointsB[1];
});

document.getElementById("cue3B").addEventListener("click", () => {
    audioDeckB.currentTime = cuePointsB[2];
});

document.getElementById("cue4B").addEventListener("click", () => {
    audioDeckB.currentTime = cuePointsB[3];
});

// Channel A Volumefor Deck A and Deck B and Crossfader

const channelAVolume = document.getElementById("channelAVolume");
channelAVolume.addEventListener("input", () => {
    const volume = channelAVolume.value / 100; // Normalize value to 0-1
    audioDeckA.volume = volume;
});

const channelBVolume = document.getElementById("channelBVolume");
channelBVolume.addEventListener("input", () => {
    const volume = channelBVolume.value / 100; // Normalize value to 0-1
    audioDeckB.volume = volume;
});

const crossfader = document.getElementById("crossfader");
crossfader.addEventListener("input", () => {
    const crossfadeValue = crossfader.value / 100; // Normalize value to 0-1
    
    // Adjust Channel A and Channel B volume proportionally
    audioDeckA.volume = 1 - crossfadeValue;
    audioDeckB.volume = crossfadeValue;
});

// Half and Double speed for Deck A and Deck B

// Toggle Half-Speed for Deck A
document.getElementById("halfSpeedA").addEventListener("click", () => {
    if (audioDeckA.playbackRate === 0.5) {
        audioDeckA.playbackRate = 1.0; // Reset to normal speed
        console.log("Deck A playback rate reset to normal (1x)");
    } else {
        audioDeckA.playbackRate = 0.5; // Set to half speed
        console.log("Deck A playback rate set to half speed (0.5x)");
    }
});

// Toggle Double-Speed for Deck A
document.getElementById("doubleSpeedA").addEventListener("click", () => {
    if (audioDeckA.playbackRate === 2.0) {
        audioDeckA.playbackRate = 1.0; // Reset to normal speed
        console.log("Deck A playback rate reset to normal (1x)");
    } else {
        audioDeckA.playbackRate = 2.0; // Set to double speed
        console.log("Deck A playback rate set to double speed (2x)");
    }
});

// Toggle Half-Speed for Deck B
document.getElementById("halfSpeedB").addEventListener("click", () => {
    if (audioDeckB.playbackRate === 0.5) {
        audioDeckB.playbackRate = 1.0; // Reset to normal speed
        console.log("Deck B playback rate reset to normal (1x)");
    } else {
        audioDeckB.playbackRate = 0.5; // Set to half speed
        console.log("Deck B playback rate set to half speed (0.5x)");
    }
});

// Toggle Double-Speed for Deck B
document.getElementById("doubleSpeedB").addEventListener("click", () => {
    if (audioDeckB.playbackRate === 2.0) {
        audioDeckB.playbackRate = 1.0; // Reset to normal speed
        console.log("Deck B playback rate reset to normal (1x)");
    } else {
        audioDeckB.playbackRate = 2.0; // Set to double speed
        console.log("Deck B playback rate set to double speed (2x)");
    }
});











