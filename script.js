function showNav() {
    let navContext = document.getElementById("navContext");
    const isShown = navContext.style.display !== "block";
    if (!isShown) {
        navContext.style.display = "none";
    } else {
        navContext.style.display = "block";
    }
}
