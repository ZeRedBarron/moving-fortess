var bdy = window.document.querySelector("body");
var canvas = document.getElementById("canvas");

canvas.width = 1500;
canvas.height = 800;

var keys = [], clicked = false, mouseX, mouseY;

var inter, runner;

//bdy.addEventListener("keydown", function(e) {//Keyboard reading
//	keys[e.keyCode] = true;
//});
//bdy.addEventListener("keyup", function(e) {
//	keys[e.keyCode] = false;
//});
bdy.addEventListener('keydown', (event) => {
    keys[event.key] = true;
});
bdy.addEventListener('keyup', (event) => {
    keys[event.key] = false;
});


bdy.addEventListener("mousedown", function() {//Mouse reading
	clicked = true;
});
bdy.addEventListener("mouseup", function() {
	clicked = false;
});
bdy.addEventListener("mousemove", function(e) {
	var rect = canvas.getBoundingClientRect(), scaleX = canvas.width / rect.width, scaleY = canvas.height / rect.height;//thanks: https://stackoverflow.com/questions/17130395/real-mouse-position-in-canvas
	mouseX = (e.clientX - rect.left) * scaleX;
	mouseY = (e.clientY - rect.top) * scaleY;
});

var ctx = window.document.getElementById("canvas").getContext("2d");//2d context
ctx.imageSmoothingEnabled = true;
ctx.imageSmoothingQuality = "high";
ctx.rect = function(x, y, w, h) {
	this.fillRect(x - w / 2, y - h / 2, w, h);
}//center rectangle function
ctx.drawImageC = function(img, x, y, w, h) {
	this.drawImage(img, x - w / 2, y - h / 2, w, h);
}//cneter image drawing

var cam = {
	x: 0,
	y: 0,
};//Camera stuff

function Player(x, y) {
    this.x = x;
    this.y = y;
    this.w = 40;
    this.h = 30;
}
Player.prototype.draw = function() {
    ctx.fillStyle = "black"
    ctx.rect(this.x, this.y, this.w, this.h);
};
Player.prototype.update = function() {
    if(keys["ArrowLeft"]){
        console.log("HI");
    }
    
};

var player = new Player(300, 300)

function runner() {//draw fuction
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, 1500, 800);

    

    player.draw();
    player.update();
}

inter = window.setInterval(runner, 1000 / 60);