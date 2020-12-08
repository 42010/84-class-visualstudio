canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d")
var background_image = "mars.jpg";
var rover_image = "rover.png";
var rover_x = 10;
var rover_y = 10;
var rover_width = 70;
var rover_heiht = 70;

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground();
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover();
    rover_imgTag.src = rover_image;
    
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

