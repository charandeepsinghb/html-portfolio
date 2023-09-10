// const side = document.getElementById('side');

// function colorChildrenUsingDataColor(element) {
//     for (const metric of element.children) {
//         if (metric.getAttribute('data-color')) {
//             metric.style.backgroundColor = metric.getAttribute('data-color');
//         }
//     }
// }

function setRandomCornerBorder(el) {
    const corner = Math.floor(Math.random() * 4);
    
    switch (corner) {
        case 0:
            el.style.borderTopRightRadius = '50%';
            break;
        case 1:
            el.style.borderBottomRightRadius = '50%';
            break;
        case 2:
            el.style.borderBottomLeftRadius = '50%';
            break;
        default:
            el.style.borderTopLeftRadius = '50%';
            break;
    }
}

function getRandomInt(upto) {
    return Math.floor(Math.random() * upto);
}

function generateHtmlPattern(id) {
    const htmlpat = document.getElementById(id);
    const width = 20;
    
    for (let index = 0; index < width; index++) {
        const el = document.createElement('div');
        el.classList.add('smallbox');
        let color = randomColor({
            luminosity: 'light',
            hue: 'blue'
        });

        const randInt = getRandomInt(4);

        if (randInt === 0) {
            el.classList.add('hoverRotateLeft');
        } else if (randInt === 1) {
            el.classList.add('hoverRotateRight');
        }
        
        el.style.backgroundColor = color;
        setRandomCornerBorder(el);

        
        htmlpat.appendChild(el);
    }
}

generateHtmlPattern('htmlpat');
