const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

class Point {
    constructor(x, y, dirx, diry) {
        this.x = x;
        this.y = y;
        this.dirx = dirx;
        this.diry = diry;
    }
}

let objects = [
    new Point(250,250,1,1),
    new Point(250,250,1,0),
    new Point(250,250,1,-1),
    new Point(250,250,0,1),
    new Point(250,250,0,0),
    new Point(250,250,0,-1),
    new Point(250,250,-1,1),
    new Point(250,250,-1,0),
    new Point(250,250,-1,-1),

];


function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function draw(){
    let move = getRandomArbitrary(0, 50);
    objects.forEach(obj => {
        ctx.beginPath();
        ctx.moveTo(obj.x,obj.y);
        obj.x += obj.dirx * move;
        obj.y += obj.diry * move;
        ctx.lineTo(obj.x, obj.y);
        ctx.stroke();



        obj.dirx += getRandomArbitrary(-1,1);
        obj.diry += getRandomArbitrary(-1,1);

        let len = Math.sqrt(obj.dirx**2 + obj.diry**2);

        obj.dirx /= len;
        obj.diry /= len;
    });
}

for(let i=0; i<10000; i++){
    draw();
}