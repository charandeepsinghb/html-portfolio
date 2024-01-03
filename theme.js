const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

function darkMode(isOn) {
    if (isOn) {
        document.documentElement.style.setProperty('--font-color', 'white');
        document.documentElement.style.setProperty('--background-color', '#121212');
    
        document.documentElement.style.setProperty('--font-back-color', '#4c2f2f');

        document.documentElement.style.setProperty('--link-color', 'rgb(0, 194, 0)');
        return;
    }
    
    document.documentElement.style.setProperty('--font-color', 'black');
    document.documentElement.style.setProperty('--background-color', 'white');

    document.documentElement.style.setProperty('--font-back-color', '#e8dddd');
    
    document.documentElement.style.setProperty('--link-color', 'green');
}

function checkAndSetDarkMode(mode) {
    if (mode) {
        darkMode(true);
    } else {
        darkMode(false);
    }
}

checkAndSetDarkMode(darkThemeMq.matches);

// Theme change event listener
darkThemeMq.addEventListener("change", e => {
    checkAndSetDarkMode(darkThemeMq.matches);
});
