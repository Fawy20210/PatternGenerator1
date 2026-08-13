const download = document.getElementById("download");
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


let ObjectCount = 2;
let iterations = 15;
let LineLength = 750;


let objects = [
    /* new Point(250,250,-1,0),
    new Point(250,250,1,0),
    new Point(250,250,0,-1),
    new Point(250,250,0,1), */
    new Point(2500,2500,0,-1),
    new Point(2500,2500,0,1),
    new Point(2500,2500,1,0),
    new Point(2500,2500,-1,0),

];



/* for(let i=0; i<ObjectCount; i++){
    let x = getRandomArbitrary(100,CanvasWidth-100);
    let y = getRandomArbitrary(100,CanvasHeight-100);

    let d = getRandomIntInclusive(0,3);
    let dx = 0;
    let dy = 0;
    if(d == 0) dx = 1;
    if(d == 1) dx = -1;
    if(d == 2) dy = 1;
    if(d == 3) dy = -1;

    objects.push(new Point(x,y,dx,dy));
} */




function draw(iter){
    objects.forEach(obj => {
        /* let move = getRandomArbitrary(0, 50); */
        let move = LineLength/iter;
        
        
        ctx.beginPath();
        ctx.moveTo(obj.x,obj.y);
        obj.x += obj.dirx * move;
        obj.y += obj.diry * move;
        ctx.lineTo(obj.x, obj.y);
        ctx.stroke();

        let n = getRandomIntInclusive(0,3);
        n=1;
        for(let i=0; i<n; i++){
            let d = getRandomIntInclusive(0,3);
            if(obj.dirx==1 || obj.dirx==-1){
                if(d==0){
                     objects.push(new Point(obj.x,obj.y,0,1))
                    objects.push(new Point(obj.x,obj.y,0,-1))
                    //nothing
                } else if(d==1){
                    objects.push(new Point(obj.x,obj.y,0,1))
                    /* obj.dirx = 0;
                    obj.diry = 1; */
                } else if(d==2){
                    objects.push(new Point(obj.x,obj.y,0,-1))
                    /* obj.dirx = 0;
                    obj.diry = -1; */
                }
            } else{
                if(d==0){
                     objects.push(new Point(obj.x,obj.y,-1,0))
                    objects.push(new Point(obj.x,obj.y,1,0)) 
                    //nothing
                } else if(d==1){
                    objects.push(new Point(obj.x,obj.y,1,0))
                    /* obj.dirx = 1;
                    obj.diry = 0; */
                } else if(d==2){
                    objects.push(new Point(obj.x,obj.y,-1,0))
                    /* obj.dirx = -1;
                    obj.diry = 0; */
                }
            }
        }
    });
}
/* let i=0;
let inter = setInterval(()=>{
    draw(i+1);
    i++;
    if(i==iterations) clearInterval(inter);

}, 1000); */

for(let i=0; i<iterations; i++){
    draw(i+1);
} 

download.addEventListener("click", () => {
    canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = `test`;
        link.href = url;
        link.click();
        setTimeout(() => URL.revokeObjectURL(url), 100); // kurz warten
    }, 'image/png');
});