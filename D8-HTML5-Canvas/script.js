alert("Welcome MIDDLE MOUSE BUTTON= change background, LEFT MOUSE BUTTON down and move accorss screen = draw")

const drawnPoints = [];

const canvas = document.querySelector("#board");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const drawingCxt2D = canvas.getContext("2d");

//board title
drawingCxt2D.fillStyle = 'red';
drawingCxt2D.font = "36px mono";
drawingCxt2D.fillText("bArtBoard", (window.innerWidth / 2 - 60), 60);
isDrawing = false;
changingBg = false;

initX = 0;
initY = 0;

hue = 0;

boardHue = 0;

function draw(e) {
    if (isDrawing) {
        drawingCxt2D.beginPath();
        drawingCxt2D.moveTo(initX, initY);
        drawingCxt2D.lineTo(e.offsetX, e.offsetY);

        drawnPoints.push({ x: e.offsetX, y: e.offsetY, hue });


        drawingCxt2D.stroke();
    } else if (changingBg) {
        boardHue += 2;
        document.body.style.backgroundColor = `hsl(${boardHue}, 60%, 90%)`;
    } else {
        initX = e.offsetX;
        initY = e.offsetY;
    }
}

function startDraw(event) {

    if (event.button === 0) {
        isDrawing = true;

        drawingCxt2D.lineWidth = "20px";
        drawingCxt2D.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    } else if (event.button == 1) {
        changingBg = true;
    } else {
        hue += 10
    }


}

function save(finalX, finalY) {
    initX = finalX;
    initY = finalY;

    console.log(drawnPoints.length);
}

function stopDraw(event) {
    if (isDrawing)
        save(event.offsetX, event.offsetY)

    isDrawing = false;
    changingBg = false;
}

window.addEventListener("mousemove", draw);
window.addEventListener("mouseup", stopDraw);
window.addEventListener("mousedown", startDraw);
window.addEventListener("mouseout", stopDraw);


class Point {
    x;
    y;
    color;
}