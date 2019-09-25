var canvas = document.querySelector ('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext('2d');


var mouse = {
    x: undefined,
    y: undefined
}
var maxRadius = 40;
//var minRadius = 2;

var colorArray = [
    '#2C3E50',
    '#E74C3C',
    '#ECF0F1',
    '#3498DB',
    '#2980B9',
];
window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;

})

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init();
});

// Круги с рандомными значениями
function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray [Math.floor(Math.random() * colorArray.length)]

    this.draw = function() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.fillStyle = this.color;
        context.fill();
    }

    this.update = function (){
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        //Взоимодействие
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50
            && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            if (this.radius < maxRadius){
                this.radius += 1;
            }
                
        }
        else if (this.radius > this.minRadius){
            this.radius -=1;
        }
        this.draw();
    }
}
//Создание Кругов

var circleArray = [];
function init(){
    circleArray = [];
    for (let i = 0; i < 800; i++){
        var x = Math.random() * (innerWidth - radius * 2) + radius;
        var y = Math.random() * (innerHeight - radius * 2) + radius;
        var dx = (Math.random() - 0.5);
        var dy = (Math.random() - 0.5);
        var radius = Math.random() * 3 + 1;
        circleArray.push (new Circle(x, y, dx, dy, radius));
}
}
//Вызов
function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < circleArray.length; i++){
        circleArray[i].update(); 
    }
}
init();
animate();




