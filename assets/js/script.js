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

// Wheel Scratch and Nudge functionality for Deck A
const wheelScratchButtonA = document.getElementById('wheelScratchA');
const wheelNudgeButtonA = document.getElementById('wheelNudgeA');
const wheelStopButtonA = document.getElementById('wheelStopA');
const platterA = document.getElementById('platterA');

let isScratchModeA = false;

wheelScratchButtonA.addEventListener('click', () => {
    isScratchModeA = true;
    console.log('Scratch mode enabled for Deck A');
});

wheelNudgeButtonA.addEventListener('click', () => {
    isScratchModeA = false;
    console.log('Nudge mode enabled for Deck A');
});

wheelStopButtonA.addEventListener('click', () => {
    platterA.style.animationPlayState = 'paused'; // Stop spinning
    platterA.classList.remove('scratch');
    platterA.classList.remove('nudge');
    console.log('Wheel stopped for Deck A');
});

platterA.addEventListener('mousedown', () => {
    document.body.style.cursor = 'grabbing';
    if (isScratchModeA) {
        console.log('Scratch effect for Deck A');
        platterA.classList.add('scratch');
        platterA.style.animationPlayState = 'paused'; // Stop spinning when pressing down
    } else {
        console.log('Nudge effect for Deck A');
        platterA.classList.add('nudge');
        platterA.style.animationPlayState = 'paused'; // Stop spinning when pressing down
    }
});

platterA.addEventListener('mouseup', () => {
    document.body.style.cursor = 'default';
    if (isScratchModeA) {
        platterA.classList.remove('scratch');
    } else {
        platterA.classList.remove('nudge');
    }
    platterA.style.animationPlayState = 'running'; // Resume spinning when releasing
});

platterA.addEventListener('mouseleave', () => {
    document.body.style.cursor = 'default';
    if (isScratchModeA) {
        platterA.classList.remove('scratch');
    } else {
        platterA.classList.remove('nudge');
    }
    platterA.style.animationPlayState = 'running'; // Resume spinning when leaving
});

// Wheel Scratch and Nudge functionality for Deck B
const wheelScratchButtonB = document.getElementById('wheelScratchB');
const wheelNudgeButtonB = document.getElementById('wheelNudgeB');
const wheelStopButtonB = document.getElementById('wheelStopB');
const platterB = document.getElementById('platterB');

let isScratchModeB = false;

wheelScratchButtonB.addEventListener('click', () => {
    isScratchModeB = true;
    console.log('Scratch mode enabled for Deck B');
});

wheelNudgeButtonB.addEventListener('click', () => {
    isScratchModeB = false;
    console.log('Nudge mode enabled for Deck B');
});

wheelStopButtonB.addEventListener('click', () => {
    platterB.style.animationPlayState = 'paused'; // Stop spinning
    platterB.classList.remove('scratch');
    platterB.classList.remove('nudge');
    console.log('Wheel stopped for Deck B');
});

platterB.addEventListener('mousedown', () => {
    document.body.style.cursor = 'grabbing';
    if (isScratchModeB) {
        console.log('Scratch effect for Deck B');
        platterB.classList.add('scratch');
        platterB.style.animationPlayState = 'paused'; // Stop spinning when pressing down
    } else {
        console.log('Nudge effect for Deck B');
        platterB.classList.add('nudge');
        platterB.style.animationPlayState = 'paused'; // Stop spinning when pressing down
    }
});

platterB.addEventListener('mouseup', () => {
    document.body.style.cursor = 'default';
    if (isScratchModeB) {
        platterB.classList.remove('scratch');
    } else {
        platterB.classList.remove('nudge');
    }
    platterB.style.animationPlayState = 'running'; // Resume spinning when releasing
});

platterB.addEventListener('mouseleave', () => {
    document.body.style.cursor = 'default';
    if (isScratchModeB) {
        platterB.classList.remove('scratch');
    } else {
        platterB.classList.remove('nudge');
    }
    platterB.style.animationPlayState = 'running'; // Resume spinning when leaving
});















