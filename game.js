// Global Variables
var canvas, canvasContext;
var framesPerSecond = 30;
var ballX = 75;
var ballY = 75;
var ballSpeedX = 5;
var ballSpeedY = 10;

// Main Game Code
window.onload = function() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext("2d");

    setInterval(updateAll, 1000/framesPerSecond);
}

function updateAll() {
    moveAll();
    drawAll();
}

function moveAll() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if(ballX < 0) {
        ballSpeedX *= -1;
    }
    if(ballX > canvas.width) {
        ballSpeedX *= -1;
    }
    if(ballY < 0) {
        ballSpeedY *= -1;
    }
    if(ballY > canvas.height) {
        ballSpeedY *= -1;
    } 
}

function drawAll() {
    colorRect(0, 0, canvas.width, canvas.height, "black"); //clear screen
    
    colorCircle(ballX, ballY, 10, "red"); //draw ball
}

function colorRect(topLeftX, topLeftY, boxWidth, boxHeight, fillColor){
    canvasContext.fillStyle = fillColor;
    canvasContext.fillRect(topLeftX,topLeftY, boxWidth,boxHeight);
}

function colorCircle(centerX, centerY, radius, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0,Math.PI*2, true);
    canvasContext.fill();
}