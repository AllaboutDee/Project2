
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

// Wheel Scratch and Nudge functionality for Deck A
const wheelScratchButtonA = document.getElementById('wheelScratchA');
const wheelNudgeButtonA = document.getElementById('wheelNudgeA');
const wheelStopButtonA = document.getElementById('wheelStopA');
const platterA = document.getElementById('platterA');
const musicFileA = document.getElementById('musicFileA');
const audioA = document.getElementById('audioA');
const playPauseMusicA = document.getElementById('playPauseMusicA');
const waveformA = document.getElementById('waveformA');

let isScratchModeA = false;
let isPlayingA = false;

// Initialize WaveSurfer for Deck A
const wavesurferA = WaveSurfer.create({
    container: '#waveformA',
    waveColor: 'violet',
    progressColor: 'purple'
});

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
    audioA.pause(); // Stop the music
    wavesurferA.pause(); // Pause WaveSurfer
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

// Handle music file selection for Deck A
musicFileA.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const fileURL = URL.createObjectURL(file);
        audioA.src = fileURL;
        wavesurferA.load(fileURL);
        audioA.play();
        isPlayingA = true;
        playPauseMusicA.textContent = 'PAUSE';
        console.log('Music file selected and playing for Deck A:', fileURL);
    } else {
        console.log('No file selected');
    }
});

// Play/Pause music for Deck A
playPauseMusicA.addEventListener('click', () => {
    if (isPlayingA) {
        audioA.pause();
        wavesurferA.pause();
        playPauseMusicA.textContent = 'PLAY';
        console.log('Pausing music for Deck A');
    } else {
        audioA.play();
        wavesurferA.play();
        playPauseMusicA.textContent = 'PAUSE';
        console.log('Playing music for Deck A');
    }
    isPlayingA = !isPlayingA;
});

// Repeat similar setup for Deck B
const wheelScratchButtonB = document.getElementById('wheelScratchB');
const wheelNudgeButtonB = document.getElementById('wheelNudgeB');
const wheelStopButtonB = document.getElementById('wheelStopB');
const platterB = document.getElementById('platterB');
const musicFileB = document.getElementById('musicFileB');
const audioB = document.getElementById('audioB');
const playPauseMusicB = document.getElementById('playPauseMusicB');
const waveformB = document.getElementById('waveformB');

let isScratchModeB = false;
let isPlayingB = false;

// Initialize WaveSurfer for Deck B
const wavesurferB = WaveSurfer.create({
    container: '#waveformB',
    waveColor: 'violet',
    progressColor: 'purple'
});

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
    audioB.pause(); // Stop the music
    wavesurferB.pause(); // Pause WaveSurfer
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

// Handle music file selection for Deck B
musicFileB.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const fileURL = URL.createObjectURL(file);
        audioB.src = fileURL;
        wavesurferB.load(fileURL);
        audioB.play();
        isPlayingB = true;
        playPauseMusicB.textContent = 'PAUSE';
        console.log('Music file selected and playing for Deck B:', fileURL);
    } else {
        console.log('No file selected');
    }
});

// Play/Pause music for Deck B
playPauseMusicB.addEventListener('click', () => {
    if (isPlayingB) {
        audioB.pause();
        wavesurferB.pause();
        playPauseMusicB.textContent = 'PLAY';
        console.log('Pausing music for Deck B');
    } else {
        audioB.play();
        wavesurferB.play();
        playPauseMusicB.textContent = 'PAUSE';
        console.log('Playing music for Deck B');
    }
    isPlayingB = !isPlayingB;
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

// Handle music file selection for Deck A
musicFileA.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const fileURL = URL.createObjectURL(file);
        audioA.src = fileURL;
        audioA.play();
        isPlayingA = true;
        playPauseMusicA.textContent = 'PAUSE';
        console.log('Music file selected and playing for Deck A:', fileURL);
    } else {
        console.log('No file selected');
    }
});

// Play/Pause music for Deck A
playPauseMusicA.addEventListener('click', () => {
    if (isPlayingA) {
        audioA.pause();
        playPauseMusicA.textContent = 'PLAY';
        console.log('Pausing music for Deck A');
    } else {
        audioA.play();
        playPauseMusicA.textContent = 'PAUSE';
        console.log('Playing music for Deck A');
    }
    isPlayingA = !isPlayingA;
});


