
import WaveSurfer from 'https://cdn.jsdelivr.net/npm/wavesurfer.js@7/dist/wavesurfer.esm.js';
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
        startJogWheelSpinning(jogWheelA);  // Start jog-wheel spinning when music plays
    } else {
        audioDeckA.pause();
        isPlayingA = false;
        playPauseButtonA.textContent = "PLAY";
        stopJogWheelSpinning(jogWheelA);   // Stop jog-wheel spinning when music is paused
    }
});

// Play/Pause for Deck B
let isPlayingB = false;
playPauseButtonB.addEventListener("click", () => {
    if (audioDeckB.paused) {
        audioDeckB.play();
        isPlayingB = true;
        playPauseButtonB.textContent = "PAUSE";
        startJogWheelSpinning(jogWheelB);  // Start jog-wheel spinning when music plays
    } else {
        audioDeckB.pause();
        isPlayingB = false;
        playPauseButtonB.textContent = "PLAY";
        stopJogWheelSpinning(jogWheelB);   // Stop jog-wheel spinning when music is paused
    }
});

// Function to start spinning the jog wheel
const startJogWheelSpinning = (wheelElement) => {
    // Only spin when the track is playing
    wheelElement.style.animation = "spin 2s linear infinite";
};

// Function to stop spinning the jog wheel
const stopJogWheelSpinning = (wheelElement) => {
    // Stop the animation when the track is paused
    wheelElement.style.animation = "none";
};

// CSS for spinning animation (you can add this inside a <style> tag or in your external stylesheet)
const style = document.createElement("style");
style.innerHTML = `
    .jog-wheel {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);

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

// Store loop points for both decks
let manualLoopInA = null;
let manualLoopOutA = null;
let manualLoopInB = null;
let manualLoopOutB = null;

// Flag to indicate whether manual loop is active
let isManualLoopActiveA = false;
let isManualLoopActiveB = false;

// Variable to store the interval for manual loop checking
let manualLoopIntervalA = null;
let manualLoopIntervalB = null;

// Manual Loop In for Deck A
document.getElementById("manualLoopInA").addEventListener("click", () => {
    manualLoopInA = audioDeckA.currentTime; // Store the current time as the In point
    console.log("Manual Loop In A:", manualLoopInA);
    // If loop is already active, toggle it off
    if (isManualLoopActiveA) {
        clearInterval(manualLoopIntervalA);
        isManualLoopActiveA = false;
        console.log("Manual loop deactivated for Deck A.");
    } else {
        isManualLoopActiveA = true;
        console.log("Manual loop activated for Deck A.");
    }
});

// Manual Loop Out for Deck A
document.getElementById("manualLoopOutA").addEventListener("click", () => {
    if (manualLoopInA !== null) {
        manualLoopOutA = audioDeckA.currentTime; // Store the current time as the Out point
        audioDeckA.currentTime = manualLoopInA; // Restart the track from the In point
        audioDeckA.play(); // Start playing from the In point
        console.log("Manual Loop Out A:", manualLoopOutA);
        console.log("Looping between", manualLoopInA, "and", manualLoopOutA);

        // Start the loop if it's not already active
        if (isManualLoopActiveA) {
            // Implement the looping behavior using setInterval
            manualLoopIntervalA = setInterval(() => {
                if (audioDeckA.currentTime >= manualLoopOutA) {
                    audioDeckA.currentTime = manualLoopInA; // Reset to In point
                }
            }, 100); // Check every 100ms
        }
    } else {
        console.log("Set Manual Loop In first for Deck A");
    }
});

// Manual Loop In for Deck B
document.getElementById("manualLoopInB").addEventListener("click", () => {
    manualLoopInB = audioDeckB.currentTime; // Store the current time as the In point
    console.log("Manual Loop In B:", manualLoopInB);
    // If loop is already active, toggle it off
    if (isManualLoopActiveB) {
        clearInterval(manualLoopIntervalB);
        isManualLoopActiveB = false;
        console.log("Manual loop deactivated for Deck B.");
    } else {
        isManualLoopActiveB = true;
        console.log("Manual loop activated for Deck B.");
    }
});

// Manual Loop Out for Deck B
document.getElementById("manualLoopOutB").addEventListener("click", () => {
    if (manualLoopInB !== null) {
        manualLoopOutB = audioDeckB.currentTime; // Store the current time as the Out point
        audioDeckB.currentTime = manualLoopInB; // Restart the track from the In point
        audioDeckB.play(); // Start playing from the In point
        console.log("Manual Loop Out B:", manualLoopOutB);
        console.log("Looping between", manualLoopInB, "and", manualLoopOutB);

        // Start the loop if it's not already active
        if (isManualLoopActiveB) {
            // Implement the looping behavior using setInterval
            manualLoopIntervalB = setInterval(() => {
                if (audioDeckB.currentTime >= manualLoopOutB) {
                    audioDeckB.currentTime = manualLoopInB; // Reset to In point
                }
            }, 100); // Check every 100ms
        }
    } else {
        console.log("Set Manual Loop In first for Deck B");
    }
});


// Store auto loop duration for Deck A
let autoLoopDurationA = 4; // Default to 4 seconds

// Get the auto loop button and dropdown for Deck A
const autoLoopButtonA = document.getElementById("autoLoopInA");
const autoLoopDropdownA = document.getElementById("autoLoopDropdownA");
const autoLoopTimeSelectA = document.getElementById("autoLoopTimeA");

// Variable to hold the interval for auto loop
let autoLoopIntervalA = null;

// Toggle the dropdown when the Auto Loop In button is clicked for Deck A
autoLoopButtonA.addEventListener("click", () => {
    // Toggle the visibility of the dropdown
    if (autoLoopDropdownA.style.display === "none") {
        autoLoopDropdownA.style.display = "block"; // Show the dropdown
    } else {
        autoLoopDropdownA.style.display = "none"; // Hide the dropdown
    }
});

// Update the selected loop time when the user selects a duration from the dropdown for Deck A
autoLoopTimeSelectA.addEventListener("change", (event) => {
    autoLoopDurationA = parseInt(event.target.value); // Set the loop duration (in seconds)
    console.log("Auto Loop Duration for Deck A set to", autoLoopDurationA, "seconds");
});

// Auto Loop functionality for Deck A (start the loop based on selected duration)
let autoLoopInA = null;
let autoLoopOutA = null;

autoLoopButtonA.addEventListener("click", () => {
    // If the dropdown is hidden, start the loop
    if (autoLoopDropdownA.style.display === "none") {
        autoLoopInA = audioDeckA.currentTime; // Store the current time as the In point
        console.log("Auto Loop In A:", autoLoopInA);
        
        // Set the loop out point based on the selected duration
        autoLoopOutA = autoLoopInA + autoLoopDurationA; // Set the loop out point based on selected duration
        console.log("Auto Loop Out A:", autoLoopOutA);
        
        // Start the loop
        audioDeckA.currentTime = autoLoopInA; // Restart the track from the In point
        audioDeckA.play(); // Play the track
        
        // Set interval to loop between In and Out points
        if (autoLoopIntervalA) clearInterval(autoLoopIntervalA); // Clear any existing interval before setting a new one
        
        autoLoopIntervalA = setInterval(() => {
            if (audioDeckA.currentTime >= autoLoopOutA) {
                audioDeckA.currentTime = autoLoopInA; // Reset to In point
            }
        }, 100); // Check every 100ms
    }
});

// Stop the loop when Auto Loop Out button is clicked for Deck A
const autoLoopOutButtonA = document.getElementById("autoLoopOutA");
autoLoopOutButtonA.addEventListener("click", () => {
    if (autoLoopIntervalA) {
        clearInterval(autoLoopIntervalA); // Stop the loop
        autoLoopIntervalA = null;
        console.log("Auto Loop Out A: Stopped");
    }
});


// Store auto loop duration for Deck B
let autoLoopDurationB = 4; // Default to 4 seconds

// Get the auto loop button and dropdown
const autoLoopButtonB = document.getElementById("autoLoopInB");
const autoLoopDropdownB = document.getElementById("autoLoopDropdownB");
const autoLoopTimeSelectB = document.getElementById("autoLoopTimeB");

// Variable to hold the interval for auto loop
let autoLoopIntervalB = null;

// Toggle the dropdown when the Auto Loop In button is clicked
autoLoopButtonB.addEventListener("click", () => {
    // Toggle the visibility of the dropdown
    if (autoLoopDropdownB.style.display === "none") {
        autoLoopDropdownB.style.display = "block"; // Show the dropdown
    } else {
        autoLoopDropdownB.style.display = "none"; // Hide the dropdown
    }
});

// Update the selected loop time when the user selects a duration from the dropdown
autoLoopTimeSelectB.addEventListener("change", (event) => {
    autoLoopDurationB = parseInt(event.target.value); // Set the loop duration (in seconds)
    console.log("Auto Loop Duration for Deck B set to", autoLoopDurationB, "seconds");
});

// Auto Loop functionality for Deck B (start the loop based on selected duration)
let autoLoopInB = null;
let autoLoopOutB = null;

autoLoopButtonB.addEventListener("click", () => {
    // If the dropdown is hidden, start the loop
    if (autoLoopDropdownB.style.display === "none") {
        autoLoopInB = audioDeckB.currentTime; // Store the current time as the In point
        console.log("Auto Loop In B:", autoLoopInB);
        
        // Set the loop out point based on the selected duration
        autoLoopOutB = autoLoopInB + autoLoopDurationB; // Set the loop out point based on selected duration
        console.log("Auto Loop Out B:", autoLoopOutB);
        
        // Start the loop
        audioDeckB.currentTime = autoLoopInB; // Restart the track from the In point
        audioDeckB.play(); // Play the track
        
        // Set interval to loop between In and Out points
        if (autoLoopIntervalB) clearInterval(autoLoopIntervalB); // Clear any existing interval before setting a new one
        
        autoLoopIntervalB = setInterval(() => {
            if (audioDeckB.currentTime >= autoLoopOutB) {
                audioDeckB.currentTime = autoLoopInB; // Reset to In point
            }
        }, 100); // Check every 100ms
    }
});

// Stop the loop when Auto Loop Out button is clicked
const autoLoopOutButtonB = document.getElementById("autoLoopOutB");
autoLoopOutButtonB.addEventListener("click", () => {
    if (autoLoopIntervalB) {
        clearInterval(autoLoopIntervalB); // Stop the loop
        autoLoopIntervalB = null;
        console.log("Auto Loop Out B: Stopped");
    }
});

// Select the tempo fader for Deck A
const tempoFaderA = document.getElementById("tempoFaderA");

// Event listener to adjust the playback rate of Deck A
tempoFaderA.addEventListener("input", () => {
    const tempoValue = tempoFaderA.value; // Get the current value from the fader (50-150)
    const playbackRate = tempoValue / 100; // Normalize to 0.5x - 1.5x playback rate
    audioDeckA.playbackRate = playbackRate; // Set the playback rate for Deck A

    // Log for debugging
    console.log(`Deck A Tempo: ${playbackRate}x (Fader Value: ${tempoValue})`);
});

// Select the tempo fader for Deck B
const tempoFaderB = document.getElementById("tempoFaderB");

// Event listener to adjust the playback rate of Deck B
tempoFaderB.addEventListener("input", () => {
    const tempoValue = tempoFaderB.value; // Get the current value from the fader (50-150)
    const playbackRate = tempoValue / 100; // Normalize to 0.5x - 1.5x playback rate
    audioDeckB.playbackRate = playbackRate; // Set the playback rate for Deck B

    // Log for debugging
    console.log(`Deck B Tempo: ${playbackRate}x (Fader Value: ${tempoValue})`);
});


// Ensure WaveSurfer is loaded