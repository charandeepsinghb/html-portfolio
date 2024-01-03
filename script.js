function showNav() {
    let navContext = document.getElementById("navContext");
    const isShown = navContext.style.display !== "block";
    if (!isShown) {
        navContext.style.display = "none";
    } else {
        navContext.style.display = "block";
    }
}

function comaToHlList() {
    const comaElements = document.getElementsByClassName("comaToHlList");
    for (const elem of comaElements) {

        const listOfWords = elem.textContent.split(",");
        elem.innerHTML = "";
        for (const word of listOfWords) {
            const newElem = document.createElement("div");
            const newContent = document.createTextNode(word.trim());
            newElem.appendChild(newContent);
            elem.appendChild(newElem);
        }
    }
}

comaToHlList();
