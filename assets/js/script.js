

// Theme Switching and Customization
const switchThemeButton = document.getElementById('switchTheme');
const customizeColourButton = document.getElementById('customizeColour');
const djSet = document.getElementById('djSet');
const musicSamplerDisplay = document.getElementById('musicSamplerDisplay');
const decksAndMixer = document.querySelectorAll('.deck, .mixer');

// Variables to track states
let themeState = 0; // 0: metallic light, 1: metallic black, 2: metallic red
let isRedTheme = true;

// Switch Theme functionality
switchThemeButton.addEventListener('click', () => {
    themeState = (themeState + 1) % 3; // Cycle through 0, 1, 2
    switch (themeState) {
        case 0:
            document.body.style.background = 'linear-gradient(to bottom, #eee, #bbb)'; // Metallic light effect
            djSet.classList.remove('dark-gray-theme');
            musicSamplerDisplay.classList.remove('dark-gray-theme');
            djSet.style.background = 'linear-gradient(145deg, #d32f2f, #c62828)'; // Metallic red
            musicSamplerDisplay.style.background = 'linear-gradient(145deg, #d32f2f, #c62828)'; // Metallic red
            break;
        case 1:
            document.body.style.background = 'linear-gradient(to bottom, #222, #444)'; // Metallic black effect
            djSet.classList.add('dark-gray-theme');
            musicSamplerDisplay.classList.add('dark-gray-theme');
            djSet.style.background = '';
            musicSamplerDisplay.style.background = '';
            break;
        case 2:
            document.body.style.background = 'linear-gradient(145deg, #d32f2f, #c62828)'; // Metallic red effect
            djSet.classList.remove('dark-gray-theme');
            musicSamplerDisplay.classList.remove('dark-gray-theme');
            djSet.style.background = 'linear-gradient(145deg, #d32f2f, #c62828)'; // Metallic red
            musicSamplerDisplay.style.background = 'linear-gradient(145deg, #d32f2f, #c62828)'; // Metallic red
            break;
    }
});

// Customize Colour functionality
customizeColourButton.addEventListener('click', () => {
    isRedTheme = !isRedTheme; // Toggle state
    decksAndMixer.forEach(element => {
        element.classList.toggle('dark-gray-color', !isRedTheme);
    });
});