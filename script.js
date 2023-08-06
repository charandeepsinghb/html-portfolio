const side = document.getElementById('side');

function colorChildrenUsingDataColor(element) {
    for (const metric of element.children) {
        if (metric.getAttribute('data-color')) {
            metric.style.backgroundColor = metric.getAttribute('data-color');
        }
    }
}

// colorChildrenUsingDataColor(side);


