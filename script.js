// const side = document.getElementById('side');

// function colorChildrenUsingDataColor(element) {
//     for (const metric of element.children) {
//         if (metric.getAttribute('data-color')) {
//             metric.style.backgroundColor = metric.getAttribute('data-color');
//         }
//     }
// }

// Html Section

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

        const randInt = getRandomInt(20);

        if (randInt < 3) {
            el.classList.add('hoverRotateLeft');
        } else if (randInt < 6) {
            el.classList.add('hoverRotateRight');
        } else if (randInt < 9) {
            el.classList.add('rotateAni');
        }
        
        el.style.backgroundColor = color;
        setRandomCornerBorder(el);

        
        htmlpat.appendChild(el);
    }
}

generateHtmlPattern('htmlpat');

// JavaScript Section

function drawBounce() {

    const canvas = document.getElementById("can");
    const ctx = canvas.getContext("2d");
    let ballRadius = 10;
    let x = canvas.width / 2;
    let y = canvas.height - 30;
    let dx = 2;
    let dy = -1;
    const paddleHeight = 10;
    const paddleWidth = 75;
    let paddleX = (canvas.width - paddleWidth) / 2;


    function drawBall() {
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }
    function drawPaddle(x, y) {
        ctx.beginPath();
        ctx.rect(x, y, paddleHeight, paddleWidth);
        ctx.fillStyle = "#009500";
        ctx.fill();
        ctx.closePath();
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBall();

        if (y > canvas.height - paddleWidth / 2) {
            drawPaddle(0, canvas.height - paddleWidth);
            drawPaddle(canvas.width - 10, canvas.height - paddleWidth);
        } else if (y < paddleWidth / 2) {
            drawPaddle(0, 0);
            drawPaddle(canvas.width - 10, 0);
        } else {
            drawPaddle(0, y - paddleWidth / 2);
            drawPaddle(canvas.width - 10, y - paddleWidth / 2);
        }

        if (x + 5 + dx > canvas.width - ballRadius || x - 5 + dx < ballRadius) {
            dx = -dx;
        }
        if (y - 2 + dy > canvas.height - ballRadius || y + 2 + dy < ballRadius) {
            dy = -dy;
        }

        x += dx;
        y += dy + (Math.random() * 0.5) - 0.25;

        requestAnimationFrame(draw);
    }

    draw();
}

drawBounce();
