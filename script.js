let currentColor = 'black';
let canDraw = false;
let mouseX = 0;
let mouseY = 0;

let screen = document.querySelector('#tela');
//algum tipo de erro no 2d, nao sei oque é.
//let ctx = screen.getContex('2d');
//alteraçoes e aqui to apenas testando

document.querySelectorAll('.colorArea .color').forEach(item =>{
item.addEventListener('click', colorClickEvent);
});
//aqui tbm!
//testando novamente aqui

screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent);
document.querySelector('.clear').addEventListener('click', clearScreen);

function colorClickEvent(e){
    let color = e.target.getAttribute('data-color');
    currentColor = color;

    document.querySelector('.color.active').classList.remove('active');
    e.target.classList.add('active');
}
 function mouseDownEvent(e){
canDraw = true;
mouseX = e.pageX - screen.offsetLeft;
mouseY = e.pageY - screen.offsetTop;

}
function mouseMoveEvent(e){
    if(canDraw) {
        draw(e.pageX, e.pageY);
    }
}
function mouseUpEvent(){
    canDraw = false;
}
function draw(x,y){
    let pointX = x - screen.offsetLeft;
    let pointY = y - screen.offsetTop;

    ctx.beginPatch();
    ctx.lineWidth = 5;
    ctx.lineJoin = "round";
    ctx.moveTo(mouseX, mouseY);
    ctx.closePath();
    ctx.strokeStyle = currentColor;
    ctx.stroke();

    mouseX = pointX;
    mouseY = pointY;

}
function clearScreen(){
ctx.setTransform(1, 0, 0, 1, 0, 0);
ctx.clearRect(0, 0, ctx.canvas.width. ctx.canvas.heigth);

}