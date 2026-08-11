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

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

const CanvasWidth = canvas.clientWidth;
const CanvasHeight = canvas.clientHeight;

let ObjectCount = 20;
let iterations = 1000;


let objects = [
    /* new Point(250,250,-1,0),
    new Point(250,250,1,0),
    new Point(250,250,0,-1),
    new Point(250,250,0,1), */

];



for(let i=0; i<ObjectCount; i++){
    let x = getRandomArbitrary(0,CanvasWidth);
    let y = getRandomArbitrary(0,CanvasHeight);

    let d = getRandomIntInclusive(0,3);
    let dx = 0;
    let dy = 0;
    if(d == 0) dx = 1;
    if(d == 1) dx = -1;
    if(d == 2) dy = 1;
    if(d == 3) dy = -1;

    objects.push(new Point(x,y,dx,dy));
}





function draw(){
    objects.forEach(obj => {
        let move = getRandomArbitrary(0, 50);
        ctx.beginPath();
        ctx.moveTo(obj.x,obj.y);
        obj.x += obj.dirx * move;
        obj.y += obj.diry * move;
        ctx.lineTo(obj.x, obj.y);
        ctx.stroke();


        let d = getRandomIntInclusive(0,3);
        if(obj.dirx==1 || obj.dirx==-1){
            if(d==0){
                //nothing
            } else if(d==1){
                obj.dirx = 0;
                obj.diry = 1;
            } else if(d==2){
                obj.dirx = 0;
                obj.diry = -1;
            }
        } else{
            if(d==0){
                //nothing
            } else if(d==1){
                obj.dirx = 1;
                obj.diry = 0;
            } else if(d==2){
                obj.dirx = -1;
                obj.diry = 0;
            }
        }

        /* obj.dirx += getRandomArbitrary(-1,1);
        obj.diry += getRandomArbitrary(-1,1);

        let len = Math.sqrt(obj.dirx**2 + obj.diry**2);

        obj.dirx /= len;
        obj.diry /= len; */
    });
}

for(let i=0; i<10000; i++){
    draw();
}