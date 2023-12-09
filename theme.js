const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

function darkMode(isOn) {
    if (isOn) {
        document.documentElement.style.setProperty('--font-color', 'white');
        document.documentElement.style.setProperty('--background-color', '#121212');
        return;
    }
    
    document.documentElement.style.setProperty('--font-color', 'black');
    document.documentElement.style.setProperty('--background-color', 'white');
}

// Theme change event listener
darkThemeMq.addEventListener("change", e => {
    if (e.matches) {
        darkCheck.checked = true;
        darkMode(true);
    } else {
        darkCheck.checked = false;
        darkMode(false);
    }
});
