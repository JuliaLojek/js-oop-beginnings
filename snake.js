const canvas = document.getElementsByClassName("canvas")[0];
const ctx = canvas.getContext("2d");

const scale = 40;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
const x = (Math.floor(Math.random()*columns - 1) + 1)*scale;
const y = (Math.floor(Math.random()*rows - 1) + 1)*scale;

// ctx.fillStyle = "rgb(132, 240, 239)";
// ctx.fillRect(0, 0, scale*3, scale*2);
// window.setTimeout(() => ctx.clearRect(0, 0, scale*3, scale*2), 2000);

// const makeRandomRect = function(){
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     const x = Math.floor(Math.random()*(canvas.width-scale) -1) +1;
//     const y = Math.floor(Math.random()*(canvas.width-scale) -1) +1;
//     ctx.fillStyle = "rgb(224, 140, 139)";
//     ctx.fillRect(x, y, scale, scale);
// };

class Snake {
    constructor () {
        this.create();
    }
    width = scale;
    height = scale;
    color = "green";
    sx = 0;
    sy = 0;
    velX = 0;
    velY = 0;
    create = () => {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.sx, this.sy, this.width, this.height);
    };
    update = () => {
        this.sx += this.velX;
        this.sy += this.velY;

        // if( this.sx < canvas.width - this.width ){
        //     this.sx += this.velX;
        // } else {
        //     this.sx = 0 - this.width;
        // }
    };
}

class Apple {
    constructor () {
        this.create();
    }
    width = scale;
    height = scale;
    color = "red";
    ax = x;
    ay = y;
    create = () => {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.ax, this.ay, this.width, this.height);
    };
}


window.addEventListener('keydown', function(event){
    if( event.key === "ArrowLeft" ){
        snake.velY = 0;
        snake.velX = scale * -1;
    } else if ( event.key === "ArrowRight" ){
        snake.velY = 0;
        snake.velX = scale * 1;
    } else if ( event.key === "ArrowUp" ){
        snake.velX = 0;
        snake.velY = scale * -1;
    } else if ( event.key === "ArrowDown" ){
        snake.velX = 0;
        snake.velY = scale * 1;
    }
})

const snake = new Snake();
const apple = new Apple();
function setup(){
    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        snake.create();
        snake.update();
        apple.create();
    }, 200);
}
setup();