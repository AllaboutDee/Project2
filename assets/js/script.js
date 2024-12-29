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














