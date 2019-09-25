var canvas = document.querySelector ('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight ;
var context = canvas.getContext('2d');

// Круги с рандомными значениями
function Circle(x, y, dx, dy, radius, color1, color2) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color1 = color1;
    this.color2 = color2;

    this.draw = function() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.strokeStyle = this.color1;
        context.fillStyle = this.color2;
        context.stroke();
        context.fill();
    }

    this.update = function (){
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy;
        }
        if (this.x === 0 && this.y === 0){
           this.x += this.radius;
           this.y += this.radius;   
        }
        
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}
//Создание Кругов
var circleArray = [];
for (let i = 0; i < 20; i++){
    var x = 0;
    var y = 0;
    var dx = (Math.random() - 0.5) * 8;
    var dy = (Math.random() - 0.5) * 8;
    var radius = Math.random() * 40;
    var color1 = "#"+((1<<24)*Math.random()|0).toString(16);
    var color2 = "#"+((1<<24)*Math.random()|0).toString(16);
    circleArray.push (new Circle(x, y, dx, dy, radius, color1, color2));
}
//Вызов
function animate() {
    //setInterval(requestAnimationFrame(animate), 5000);
    requestAnimationFrame(animate);
    context.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < circleArray.length; i++){
        circleArray[i].update(); 
    }
}
animate();




