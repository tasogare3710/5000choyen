const FONT_FAMILY = "myfont";

var canvas = document.getElementById("canvas");

var canvasWidth = document.getElementById("canvasWidth");
canvasWidth.addEventListener("input", resizeWidth);

var canvasHeight = document.getElementById("canvasHeight");
canvasHeight.addEventListener("input", resizeheight);

var posX = document.getElementById("posX");
posX.addEventListener("input", draw);

var posY = document.getElementById("posY");
posY.addEventListener("input", draw);

var canvasZoom = document.getElementById("canvasZoom");
canvasZoom.addEventListener("input", function(event){
    canvas.style.zoom = `${event.target.value}%`;
});

var fontSize = document.getElementById("fontSize");
fontSize.addEventListener("input", draw);

var lineWidth = document.getElementById("lineWidth");
lineWidth.addEventListener("input", draw);

var textbox = document.getElementById("textbox");
textbox.addEventListener("input", draw);

var lineJoin = document.getElementById("lineJoin");
lineJoin.addEventListener("input", draw);

var gradient1 = document.getElementById("gradient1");
gradient1.addEventListener("input", draw);

gradient2 = document.getElementById("gradient2");
gradient2.addEventListener("input", draw);

gradient3 = document.getElementById("gradient3");
gradient3.addEventListener("input", draw);

gradient4 = document.getElementById("gradient4");
gradient4.addEventListener("input", draw);

var generateButton = document.getElementById("generateButton");
generateButton.addEventListener("click", draw);

var ctx = canvas.getContext('2d');

function resizeWidth(event) {
    canvas.setAttribute("width", canvasWidth.value);
    draw();
}

function resizeheight(event) {
    canvas.setAttribute("height", canvasHeight.value);
    draw();
}

function draw(event) {
	const NUMBER_INPUT_BASE = 1;
	const COLOR_PICKER_BASE = NUMBER_INPUT_BASE + 5;
    const posx = Number(posX.value);
    const posy = Number(posY.value);
    const LINE_WIDTH = Number(lineWidth.value);
    const text = textbox.value;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.font = `${fontSize.value}px ${FONT_FAMILY}`;
    ctx.lineJoin = lineJoin.value;

    //黒色
    ctx.strokeStyle = "#000";
    ctx.lineWidth = LINE_WIDTH;
    ctx.strokeText(text, posx + 4, posy + 4);

    //銀色
    var grad = ctx.createLinearGradient(
        Number(gradient1.elements[NUMBER_INPUT_BASE + 0].value),
        Number(gradient1.elements[NUMBER_INPUT_BASE + 1].value),
        Number(gradient1.elements[NUMBER_INPUT_BASE + 2].value),
        Number(gradient1.elements[NUMBER_INPUT_BASE + 3].value),
    );
    grad.addColorStop(0.0, gradient1.elements[COLOR_PICKER_BASE + 0].value);
    grad.addColorStop(0.10, gradient1.elements[COLOR_PICKER_BASE + 1].value);
    grad.addColorStop(0.18, gradient1.elements[COLOR_PICKER_BASE + 2].value);
    grad.addColorStop(0.25, gradient1.elements[COLOR_PICKER_BASE + 3].value);
    grad.addColorStop(0.5, gradient1.elements[COLOR_PICKER_BASE + 4].value);
    grad.addColorStop(0.75, gradient1.elements[COLOR_PICKER_BASE + 5].value);
    grad.addColorStop(0.85, gradient1.elements[COLOR_PICKER_BASE + 6].value);
    grad.addColorStop(0.91, gradient1.elements[COLOR_PICKER_BASE + 7].value);
    grad.addColorStop(0.95, gradient1.elements[COLOR_PICKER_BASE + 8].value);
    grad.addColorStop(1, 'rgb(50,50,50)');
    ctx.strokeStyle = grad;
    ctx.lineWidth = LINE_WIDTH - 2;
    ctx.strokeText(text, posx + 4, posy + 4);

    //黒色
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = LINE_WIDTH - 6;
    ctx.strokeText(text, posx, posy);

    //金色
    var grad = ctx.createLinearGradient(
        Number(gradient2.elements[NUMBER_INPUT_BASE + 0].value),
        Number(gradient2.elements[NUMBER_INPUT_BASE + 1].value),
        Number(gradient2.elements[NUMBER_INPUT_BASE + 2].value),
        Number(gradient2.elements[NUMBER_INPUT_BASE + 3].value),
    );
    grad.addColorStop(0, gradient2.elements[COLOR_PICKER_BASE + 0].value);
    grad.addColorStop(0.25, gradient2.elements[COLOR_PICKER_BASE + 1].value);
    grad.addColorStop(0.4, gradient2.elements[COLOR_PICKER_BASE + 2].value);
    grad.addColorStop(0.75, gradient2.elements[COLOR_PICKER_BASE + 3].value);
    grad.addColorStop(0.9, gradient2.elements[COLOR_PICKER_BASE + 4].value);
    grad.addColorStop(1, gradient2.elements[COLOR_PICKER_BASE + 5].value);
    ctx.strokeStyle = grad;
    ctx.lineWidth = 10;
    ctx.strokeText(text, posx, posy);

    //黒
    ctx.lineWidth = 6;
    ctx.strokeStyle = '#000';
    ctx.strokeText(text, posx + 2, posy - 3);

    //白
    ctx.lineWidth = 6;
    ctx.strokeStyle = '#FFFFFF';
    ctx.strokeText(text, posx, posy - 3);

    //赤
    var grad = ctx.createLinearGradient(
        Number(gradient3.elements[NUMBER_INPUT_BASE + 0].value),
        Number(gradient3.elements[NUMBER_INPUT_BASE + 1].value),
        Number(gradient3.elements[NUMBER_INPUT_BASE + 2].value),
        Number(gradient3.elements[NUMBER_INPUT_BASE + 3].value),
    );
    grad.addColorStop(0, gradient3.elements[COLOR_PICKER_BASE + 0].value);
    grad.addColorStop(0.5, gradient3.elements[COLOR_PICKER_BASE + 1].value);
    grad.addColorStop(0.51, gradient3.elements[COLOR_PICKER_BASE + 2].value);
    grad.addColorStop(1, gradient3.elements[COLOR_PICKER_BASE + 3].value);
    ctx.lineWidth = 1;
    ctx.strokeStyle = grad;
    ctx.strokeText(text, posx, posy - 3);
    //赤
    var grad = ctx.createLinearGradient(
        Number(gradient4.elements[NUMBER_INPUT_BASE + 0].value),
        Number(gradient4.elements[NUMBER_INPUT_BASE + 1].value),
        Number(gradient4.elements[NUMBER_INPUT_BASE + 2].value),
        Number(gradient4.elements[NUMBER_INPUT_BASE + 3].value),
    );
    grad.addColorStop(0, gradient4.elements[COLOR_PICKER_BASE + 0].value);
    grad.addColorStop(0.5, gradient4.elements[COLOR_PICKER_BASE + 1].value);
    grad.addColorStop(0.51, gradient4.elements[COLOR_PICKER_BASE + 2].value);
    grad.addColorStop(1, gradient4.elements[COLOR_PICKER_BASE + 3].value);
    ctx.fillStyle = grad;
    ctx.fillText(text, posx, posy - 3);
}
